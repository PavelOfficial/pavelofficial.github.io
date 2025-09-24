const textSentenceClass = "text-sentence ";
let isNewDictPickerWordAddToDict = false;
/*
  const leadingZeros = (value, count) => {
    return `0000000000000${value}`.slice(-count)
  };
 */
let YANDEX_DICT_KEY = "dict";
let configPromise = (() => {
  return fetch("/word-learner/audition/config.json").then((res) => {
    return res.json();
  }).then((config) => {
    YANDEX_DICT_KEY = config.API_KEY;

    return null;
  }).catch(() => {}).finally(() => {});
})();

const requestYandexDict = (phrase) => {
  if (window.location.hostname === "localhost") {
    return configPromise.then(() => {
      return fetch(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${YANDEX_DICT_KEY}&lang=en-ru&text=${phrase}`)
        .then((response) => response.json());
    })
  } else {
    return Promise.resolve({});
  }
};


(() => {
  let currentCategory = null
  let soundValue = 1
  let auditions = null
  let currentAudio = null
  let isDragging = false
  let isRecordingSrc = false
  let lastWords = []
  let lastSelectedWords = new Set([])

  const cleanCommentForm = () => {
    document.querySelector('.audio-comment-ready').innerHTML = ""
    document.querySelector('.js-comment-text-field').value = ""
    document.querySelector('.source-text').innerHTML = ""

    stopRecord()
  }

  const createNullAudioComment = () => {
    let audioComment2 = {
      srcText: "",
      srcAudio: null,
      commentText: "",
      commentAudio: null,
      timestamp: Date.now(),
    }

    return audioComment2
  }

  let audioCommentRef = { current: createNullAudioComment() }


  window.renderTextFragmentSelection = (textFragment, listIndex) => {
    textFragment.selectedSpans.forEach((span) => {
      const spanElem = document.querySelector(`[data-p-index="${span[0]}"]`)
        .querySelector(`[data-span-index="${span[1]}"]`);

      const dictArticles = spanElem.getAttribute("data-dict-articles") || "";
      const dictArticlesList = dictArticles.split(",")
        .filter(item => item)
        .map((item) => parseInt(item, 10));

      dictArticlesList.push(listIndex);

      spanElem.setAttribute("data-dict-articles", dictArticlesList.join(","));
      spanElem.setAttribute("class", `${textSentenceClass}span-dict-linked-text span-dict-linked-text_${dictArticlesList.slice(0, 3).length}`);
    });
  };

  window.renderListTextFragments = () => {
    const dict = JSON.parse(localStorage.getItem("dict") || "[]");

    dict.forEach((item, index) => {
      try {
        if (item.textSelectionFragment) {
          renderTextFragmentSelection(item.textSelectionFragment, dict.length - index);
        }
      } catch (error) {
        // if one is not save other will be rendered
        console.log(error);
      }
    });
  };

  const fetchAuditions = async () => {
    const allAuditionUrls = categories.reduce((result, item) => {
      result.push(...item.auditions)

      return result
    }, [])

    const auditionPromises = allAuditionUrls.map((url) => {
      return fetch("/word-learner" + url)
    })

    const allSettledResult = await Promise.allSettled(auditionPromises)
    const allSettledResultJSONs = await Promise.allSettled(allSettledResult.map((response) => response.value.json()))

    console.log("allSettledResultJSONs all: ", allSettledResultJSONs.map(result => result.value))

    return allSettledResultJSONs.map((result, index) => ({ ...result.value, url: allAuditionUrls[index] }))
  }

  const renderCategories = () => {
    const html =`
      <ul class="categories">${categories.map((audition) => audition.title).map((item, index) => `<li data-category-index="${index}" class="category-li">${item}</li>`).join("")}</ul>      
    `

    document.querySelector('.categories-box').innerHTML = html
  }

  const renderThemes = () => {
    const auditionsSet = new Set(currentCategory.auditions)

    const html =`
      <ul class="themes">${auditions.filter(({ url }) => { return auditionsSet.has(url) }).map((audition) =>  {
        const themesIndex = auditions.indexOf(audition);

        return { title: audition.title, themesIndex } 
      }).map(({ title, themesIndex }, index) => {
        return `<li data-index="${themesIndex}" class="themes-li">${title}</li>`
      }).join("")}</ul>      
    `

    document.querySelector('.themes-box').innerHTML = html
  }

  const render = () => {
    renderCategories();
  }

  const rawSeparators = ["…", "...", ".", "?", "!"];
  const separators = ["…", "\\.\\.\\.", "\\.", "\\?", "\\!"];
  const separatorsAll = [...rawSeparators, ...rawSeparators]
  const postFixes = ["(?:\\'|\\”|\\\")[\\s\\n]?", "(?:[^\\'\\S]|\\n)"]
  const regCases = postFixes.reduce((result, postFix) => {
    const nextCases = separators.map((separator) => {
      return separator + postFix
    });

    result.push(...nextCases);

    return result;
  }, [])

  const regs = regCases.map((regCase) => new RegExp(regCase, "gi"))
  const allRegCasesCombinations = regCases.reduce((result, item, index) => {
    regCases.forEach((item2, index2) => {
      result.push({ reg: new RegExp(item + "\\s*" + item2, "gi"), index: index })
      result.push({ reg: new RegExp(item2 + "\\s*" + item, "gi"), index: index2 })
    })

    return result
  }, [])

  const splitText = (text) => {
    const doublesReg = (new RegExp("", "gi"))
    const quotesReg = (new RegExp("”", "gi"))
    let word2 = text.trim().split(/\n+/).join('\n');

    allRegCasesCombinations.forEach((regItem) => {
      word2 = word2.split(regItem.reg).join(separatorsAll[regItem.index] + " ")
    })

    regs.forEach((reg, index) => {
      word2 = word2.split(reg).join(separatorsAll[index] + (index > 4 ? "\'" : "") + "\n\n")
    })

    word2 = word2.split(/\n\n\n\n/).join('\n\n')
      .split(/\n\n\n/).join('\n\n')
      .split(/\n\n/).join('\n\n\n')
      .replace(doublesReg, '')
      .replace(doublesReg, '')
      .replace(doublesReg, '')
      .replace(doublesReg, '')
      .replace(quotesReg, '')
      .replace(quotesReg, '')
      .replace(quotesReg, '')
      .replace(quotesReg, '')

    const word3 = word2.split(/\n+/)

    return word3
  }

  const initSelectTheme = () => {
    const initThemeIndex = localStorage.getItem("theme-index") || document.querySelector(".themes-li").getAttribute("data-index")

    const item = document.querySelector(`.themes-li[data-index="${initThemeIndex}"]`)

    if (item) {
      item.click()
    }
  }

  const initSelectCategory = () => {
    const initThemeIndex = localStorage.getItem("category-index") || document.querySelector(".category-li").getAttribute("data-category-index")

    const item = document.querySelector(`.category-li[data-category-index="${initThemeIndex}"]`)

    if (item) {
      item.click()
    }
  }

  const selectCategoryItem = (item, index) => {
    const prevSelected = document.querySelector(".category-li.selected")

    if (prevSelected) {
      prevSelected.setAttribute("class", "category-li")
    }

    item.setAttribute("class", "category-li selected")


    currentCategory = categories[index]

    renderThemes()
    initSelectTheme()
  }

  const scrollArea = document.querySelector(".text-container-inner");

  scrollArea.addEventListener("scroll", (event) => {
    const scrollTop = event.target.scrollTop;

    localStorage.setItem("currentAudioUrl", JSON.stringify(currentAuditionItem.audio));
    localStorage.setItem("scrollAreaScrollTop", JSON.stringify(scrollTop));
  });

  const showSentences = (delta, targetCount) => {
    const allTexts = Array.from(document.querySelectorAll(".text-container .text-container_item"))

    if (allTexts.length) {
      let firstTextIndex
      if (delta !== null) {
        let firstTextIndex = allTexts.findIndex((item) => {
          return item.style.visibility === "hidden";
        });

        if (firstTextIndex === -1) {
          firstTextIndex = allTexts.length;
        }

        const secondIndex = firstTextIndex + delta;
        const textSlice = allTexts.slice(secondIndex > firstTextIndex ? firstTextIndex : secondIndex, secondIndex > firstTextIndex ? secondIndex : firstTextIndex);

        textSlice.forEach((item) => {
          if (delta < 0) {
            item.style.visibility = "hidden";
          } else {
            item.style.visibility = "";
          }
        });

        const shownCount = allTexts.reduce((result, item) => {
          if (item.style.visibility !== "hidden") {
            result += 1;
          }

          return result;
        }, 0)

        localStorage.setItem("currentAudioUrl", JSON.stringify(currentAuditionItem.audio));
        localStorage.setItem("currentTextBlocksCount", JSON.stringify(shownCount));
      } else {
        firstTextIndex = allTexts.length;

        allTexts.forEach((item, index) => {
          if (index < targetCount) {
            item.style.visibility = "";
          } else {
            item.style.visibility = "hidden";
          }
        });

        localStorage.setItem("currentAudioUrl", JSON.stringify(currentAuditionItem.audio));
        localStorage.setItem("currentTextBlocksCount", JSON.stringify(targetCount));
      }

      let firstHiddenTextIndex = allTexts.findIndex((item) => {
        return item.style.visibility === "hidden"
      });

      const lastVisibleTextIndex = firstHiddenTextIndex - 1;

      const scrollArea = document.querySelector(".text-container-inner");
      const textWrap = document.querySelector(".text-wrap");

      if (allTexts[lastVisibleTextIndex]) {
        const { top: itemTop, height: itemHeight  } = allTexts[lastVisibleTextIndex].getBoundingClientRect();
        const { top: scrollAreaTop, height: scrollAreaHeight  }  = scrollArea.getBoundingClientRect();
        const scrollAreaScrollTop = scrollArea.scrollTop;
        const MARGIN_BOTTOM = 50;
        const resultTop = scrollAreaScrollTop + (itemTop - scrollAreaTop) - scrollAreaHeight + itemHeight + MARGIN_BOTTOM;

        scrollArea.scrollTo({ top: resultTop });
      } else {
        if (lastVisibleTextIndex === -2) {
          scrollArea.scrollTo({ top: textWrap.getBoundingClientRect().height  });
        } else {
          scrollArea.scrollTo({ top: 0 });
        }
      }

      allTexts.forEach((text) => {
        text.setAttribute("class", text.getAttribute("class").replace(/\slast\-shown/, ""));
      })

      const prevLastVisibleItem = allTexts[firstTextIndex - 1];
      if (prevLastVisibleItem) {
        const prevLastVisibleItemClass = prevLastVisibleItem.getAttribute("class");

        prevLastVisibleItem.setAttribute("class", `${prevLastVisibleItemClass} last-shown`);
      }
    }
  };

  const applyProgressToUI = (value) => {
    const progressPercent = `${(value) * 100}%`
    const duration = currentAudio.duration()
    const seek = duration * value
    const seekSec = parseInt(seek % 60, 10);
    const seekMin = parseInt((seek / 60) % 60, 10);
    const seekHours = parseInt(seek / (60 * 60), 10);

    document.querySelector(".audio-player-progress__direct-handle").style.left = progressPercent
    document.querySelector(".audio-player-progress__slow-handle").style.left = progressPercent
    document.querySelector(".audio-player-progress__bar-progress").style.width = progressPercent

    document.querySelector(".audio-player-progress__current-seek").innerHTML = `${seekHours ? `${leadingZeros(seekHours, 2)}:` : ""}${leadingZeros(seekMin, 2)}:${leadingZeros(seekSec, 2)}`
  };

  let currentAudioLoaded = false;
  let currentAuditionItem = null;
  const selectThemeItem = (item, index) => {
    currentAudioLoaded = false;
    const prevSelected = document.querySelector(".themes-li.selected")

    if (prevSelected) {
      prevSelected.setAttribute("class", "themes-li")
    }

    item.setAttribute("class", "themes-li selected")

    const auditionItem = auditions[index];
    currentAuditionItem = auditionItem;

    if (currentAudio) {
      currentAudio.stop()
    }

    currentAudio = new Howl({
      src: [`/word-learner${auditionItem.audio}`],
      volume: soundValue,
      onload: () => {
        if (currentAuditionItem === auditionItem) {
          const duration = currentAudio.duration();
          const durationSec = parseInt(duration % 60, 10);
          const durationMin = parseInt((duration / 60) % 60, 10);
          const durationHours = parseInt(duration / (60 * 60), 10);

          document.querySelector(".audio-player-progress__total-seek").innerHTML = `${durationHours ? `${leadingZeros(durationHours)}:` : ""}${leadingZeros(durationMin, 2)}:${leadingZeros(durationSec, 2)}`

          const lastCurrentSeek = JSON.parse(localStorage.getItem("currentAudioSeek"));
          const lastCurrentUrl = JSON.parse(localStorage.getItem("currentAudioUrl"));

          if (lastCurrentSeek && lastCurrentSeek !== null && lastCurrentUrl && lastCurrentUrl !== null && lastCurrentUrl === auditionItem.audio) {
            currentAudio.seek(lastCurrentSeek);

            localStorage.setItem("currentAudioSeek", JSON.stringify(null));

            applyProgressToUI(currentAudio.seek() / currentAudio.duration());
          }

          currentAudioLoaded = true;

        }
      },
    });


    if (auditionItem.contentType === "html") {
      const html = `<div class="text-wrap-html">${auditionItem.en}</div>`;

      document.querySelector(".text-container-inner .text-wrap").innerHTML = html;

      Array.from(document.querySelector(".text-container-inner .text-wrap").querySelectorAll("p"))
        .forEach((item, index) => {
          const text = String(item.innerText);

          item.setAttribute("data-p-index", index);
          let wordIndex = 0;

          const nextText = text.replace(/(\w+)?(\s|\.|\\|\!|\?|\,|\—|\-|\—|\(|\)|\*|\&|\%|\$|\#|\@|\/|\|)?/gi, (match, p1, p2) => {
            wordIndex += 1;

            return `${!!p1 ? 
                  `<span class="text-sentence" data-span-index="${wordIndex}"
                    >${p1}</span>`
                : ""
              }${!!p2 ? `<span>${p2}</span>` : ""}`;
          });

          /*
            const nextText = text.split(/\s/gi)
              .filter((item) => item.trim())
              .map((item2, index) => {
                const indexOfSentenceEnd = text.indexOf(item2) + item2.length;

                return `<span class="text-sentence" data-span-index="${index}">${item2} </span>`;
              }).join("");
           */

          item.innerHTML = nextText;
        });

      window.renderListTextFragments();

      // Scroll to stored scroll.
      const scrollArea = document.querySelector(".text-container-inner");
      const scrollAreaScrollTop = JSON.parse(localStorage.getItem("scrollAreaScrollTop"));
      const currentAudioUrl = JSON.parse(localStorage.getItem("currentAudioUrl"));

      if (currentAudioUrl === auditionItem.audio) {
        scrollArea.scrollTo({ top: scrollAreaScrollTop });
      }
    } else {
      const enList = splitText(auditionItem.en);
      const ruList = splitText(auditionItem.ru);

      const html = enList.map((enItem, index) => {
        const ruItem = ruList[index]

        return `
        <div class="text-container_item">
          <div class="text-container_en">
            ${enItem}
          </div>
          <div class="text-container_ru">
            ${ruItem ? String(ruItem) : ""}
          </div>
        </div>
      `
      }).join("");

      document.querySelector(".text-container-inner .text-wrap").innerHTML = html;

      /* display text blocks */
      const lastCurrentUrl = JSON.parse(localStorage.getItem("currentAudioUrl"));
      const currentTextBlocksCount = JSON.parse(localStorage.getItem("currentTextBlocksCount"));

      if (typeof currentTextBlocksCount === "number" &&
        currentTextBlocksCount !== null &&
        lastCurrentUrl &&
        lastCurrentUrl !== null &&
        lastCurrentUrl === auditionItem.audio) {
        showSentences(null, currentTextBlocksCount);
      }

      // console.log(enList)
      // console.log(ruList)
    }
  }

  let progressRequestAminationID = null
  const watchProgress = () => {
    const renderProgress = () => {
      const seek = currentAudio.seek()
      const duration = currentAudio.duration()

      applyProgressToUI(seek / duration)
    }

    renderProgress()

    const nextRender = () => {
      progressRequestAminationID = requestAnimationFrame(() => {
        if (!isDragging) {
          renderProgress()
        }

        nextRender()
      })
    }

    nextRender()
  }

  const finishProgress = () => {
    cancelAnimationFrame(progressRequestAminationID);
  }

  let playing = false;

  window.playAudio = () => {
    if (currentAudio && currentAudio.state() === "loaded") {
      currentAudio.play()
      watchProgress()

      playing = true;

      document.querySelector(".btn-pause").style.display = ""
      document.querySelector(".btn-play").style.display = "none"
    }
  }

  window.pauseAudio = () => {
    if (currentAudio && currentAudio.state() === "loaded") {
      currentAudio.pause()

      finishProgress()

      playing = false;

      document.querySelector(".btn-pause").style.display = "none"
      document.querySelector(".btn-play").style.display = ""
    }
  }

  document.querySelector(".btn-pause").style.display = "none"

  const rewind = (delta) => {
    const currentSeek = currentAudio.seek()
    let nextSeek = currentSeek + delta
    const duration = currentAudio.duration()

    if (nextSeek >= duration) {
      nextSeek = duration
    }

    if (nextSeek < 0) {
      nextSeek = 0
    }

    currentAudio.seek(nextSeek)
  }

  window.onRewindBack2_5Sec = () => rewind(-2.5);
  window.onRewindBack5Sec = () =>  rewind(-5);
  window.onRewindBack10Sec = () => rewind(-10);
  window.onRewindBack15Sec = () => rewind(-15);

  window.onRewindNext2_5Sec = () => rewind(2.5);
  window.onRewindNext5Sec = () =>  rewind(5);
  window.onRewindNext10Sec = () => rewind(10);
  window.onRewindNext15Sec = () => rewind(15);
  window.switchTopicList = () => {
    const listElem = document.querySelector(".theme-list")
    const display = listElem.style.display

    if (display !== "none") {
      listElem.style.display = "none"
    } else {
      listElem.style.display = ""
    }
  }

  window.switchRuDisplay = () => {
    const listElem = document.querySelector(".text-container")
    const currentClass = listElem.getAttribute("class")

    if (/hide\-ru/.test(currentClass)) {
      listElem.setAttribute("class", "text-container")
    } else {
      listElem.setAttribute("class", "text-container hide-ru")
    }
  }

  window.switchAllDisplay = () => {
    const allTexts = Array.from(document.querySelectorAll(".text-container .text-container_item"))

    if (allTexts.length) {
      const firstElement = allTexts[0]
      const firstElementVisibility = firstElement.style.visibility

      const scrollArea = document.querySelector(".text-container-inner")
      const textWrap = document.querySelector(".text-wrap")

      if (firstElementVisibility === "hidden") {
        allTexts.forEach((text) => {
          text.style.visibility = ""
        });

        scrollArea.scrollTo({ top: textWrap.getBoundingClientRect().height });

        localStorage.setItem("currentAudioUrl", JSON.stringify(currentAuditionItem.audio));
        localStorage.setItem("currentTextBlocksCount", JSON.stringify(allTexts.length));
      } else {
        allTexts.forEach((text) => {
          text.style.visibility = "hidden"
        });

        scrollArea.scrollTo({ top: 0 });

        localStorage.setItem("currentAudioUrl", JSON.stringify(currentAuditionItem.audio));
        localStorage.setItem("currentTextBlocksCount", JSON.stringify(0));
      }
    }
  }

  window.showPrev5Sentences = () => showSentences(-5)
  window.showPrev1Sentences = () => showSentences(-1)
  window.showNext1Sentences = () => showSentences(1)
  window.showNext5Sentences = () => showSentences(5)

  const createCommentFileName = (timestamp, postfix, ext = "") => {
    return `aud$$-${timestamp}-${postfix}${ext}`
  }

  const startDrag = (mouseDownEvent, selector, moveCallback, endCallback) => {
    isDragging = true

    let downMouseX

    if (mouseDownEvent.touches) {
      downMouseX = mouseDownEvent.touches[0].pageX;
    } else {
      downMouseX = mouseDownEvent.x
    }

    const draggedItem = document.querySelector(selector)

    const handleMouseMove = (event) => {
      let x

      if (event.touches) {
        x = event.touches[0].pageX;
      } else {
        x = event.x
      }

      moveCallback(x - downMouseX)
    }

    const handleMouseUp = (event) => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchend", handleMouseUp)

      let x

      if (event.changedTouches) {
        x = event.changedTouches[0].pageX;
      } else {
        x = event.x
      }

      isDragging = false
      endCallback(x - downMouseX)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("touchmove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchend", handleMouseUp)
  }

  function getChildIndex(node) {
    return Array.prototype.indexOf.call(node.parentNode.children, node);
  }

  const createComment = () => {
    audioCommentRef.current.commentText = document.querySelector(".js-comment-text-field").value
    audioCommentRef.current.srcText = Array.from(
      document.querySelector(".source-text").querySelectorAll(".source-word")
    ).map((wordSpan, index) => {
      const word = wordSpan.innerText

      if (lastSelectedWords.has(index)) {
        let prefix = ''
        let postfix = ''

        if (!lastSelectedWords.has(index - 1)) {
          prefix = "<span class=\"highlight\">"
        }

        if (!lastSelectedWords.has(index + 1)) {
          postfix = "</span>"
        }

        return `${prefix}${word}${postfix}`
      }

      return word
    }).join(" ")

    const { srcAudio, commentAudio, timestamp, srcText, commentText } = audioCommentRef.current

    downloadAsFile(srcAudio, srcAudio.type, createCommentFileName(timestamp, "src-audio", ".webm"))

    if (commentAudio) {
      downloadAsFile(commentAudio, commentAudio.type, createCommentFileName(timestamp, "cmnt-audio", ".webm"))
    }

    downloadAsFile(JSON.stringify({
      timestamp: timestamp,
      srcText: srcText,
      commentText: commentText,
    }, null, 2), "text/json", createCommentFileName(timestamp, "data", ".json"))
  }

  const initFeatures = () => {
    document.addEventListener("click", (event) => {
      const closestThemesLi = event.target.closest(".themes-li")

      if (closestThemesLi) {
        const index = parseInt(closestThemesLi.getAttribute("data-index"), 10)

        localStorage.setItem("theme-index", String(index))

        selectThemeItem(closestThemesLi, index)
        finishProgress()
      }

      const closestCategoryLi = event.target.closest(".category-li")

      if (closestCategoryLi) {
        const index = parseInt(closestCategoryLi.getAttribute("data-category-index"), 10)

        localStorage.setItem("category-index", String(index))

        selectCategoryItem(closestCategoryLi, index)
        finishProgress()
      }

      if (event.target.closest(".source-word")) {
        const closestWord = event.target.closest(".source-word")
        const className = closestWord.getAttribute("class")

        if (closestWord.matches(".source-word-selected")) {
          closestWord.setAttribute("class", "source-word")

          const childIndex = getChildIndex(closestWord)
          lastSelectedWords.delete(childIndex)
        } else {
          closestWord.setAttribute("class", "source-word source-word-selected");

          const childIndex = getChildIndex(closestWord);
          lastSelectedWords.add(childIndex);
        }
      }

      if (event.target.closest(".js-create-comment")) {
        createComment();

        cleanCommentForm();
        document.querySelector('.comment-popup').style.display = "none";

        // lastSelectedWords
      }

      console.log("lastSelectedWords: ", lastSelectedWords);
    })

    initSelectCategory()

    const startDragEventHandler = (event) => {
      const progressHandle = event.target.closest(".audio-player-progress__direct-handle")
      const progressWidth = document.querySelector(".audio-player-progress__bar-progress").getBoundingClientRect().width
      const calcProgress = (deltaX) => {
        const totalWidth = document.querySelector(".audio-player-progress__bar").getBoundingClientRect().width

        const currentProgressPercent = progressWidth / totalWidth
        const currentProgressDeltaXPercent = deltaX / totalWidth
        const resultProgressPercent = Math.min(Math.max(currentProgressPercent + currentProgressDeltaXPercent, 0), 1)

        return resultProgressPercent
      }

      if (progressHandle) {
        startDrag(event, ".audio-player-progress__direct-handle", (deltaX) => {
          applyProgressToUI(calcProgress(deltaX))
        }, (deltaX) => {
          const progress = calcProgress(deltaX)
          const duration = currentAudio.duration()

          currentAudio.seek(progress * duration)
          applyProgressToUI(progress)
        })
        return
      }

      const progressSlowHandle = event.target.closest(".audio-player-progress__slow-handle")

      if (progressSlowHandle) {
        const slowingRate = 0.25
        startDrag(event, ".audio-player-progress__slow-handle", (deltaX) => {
          applyProgressToUI(calcProgress(deltaX * slowingRate))
        }, (deltaX) => {
          const progress = calcProgress(deltaX * slowingRate)
          const duration = currentAudio.duration()

          currentAudio.seek(progress * duration)
          applyProgressToUI(progress)
        })

        return
      }
    }

    document.addEventListener("mousedown", startDragEventHandler)
    document.addEventListener("touchstart", startDragEventHandler)

  }

  const initApp = async () => {
    auditions = await fetchAuditions()
    render()
    initFeatures()
  }

  initApp()

  function downloadAsFile(data, mimeType, filename) {
    let a = document.createElement("a");
    let file = new Blob([data], { type: mimeType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
  }

  let mediaRecorder = null;
  const recordings = [];
  let lastRecord = null;
  let counter = 0;

  /*
    const onNewRecord = (audioData) => {
      downloadAsFile(audioData, audioData.type, `test-${counter}.webm`)
      counter++;
    }
   */

  let startRecord = () => {

  }

  let stopRecord = () => {

  }

  navigator.mediaDevices.getUserMedia({
    "audio": {
    "mandatory": {
      echoCancellation: false,
      googEchoCancellation: false,
      googAutoGainControl: false,
      googAutoGainControl2: false,
      googNoiseSuppression: false,
      googHighpassFilter: false,
      googTypingNoiseDetection: false,
      autoGainControl: false,
      channelCount: 2,
      latency: 0,
      noiseSuppression: false,
      sampleRate: 48000,
      sampleSize: 16,
      volume: 1.0
    },
    "optional": []
    } }
  ).then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      let ended = false
      let saveTargetRef = { current: null }
      let saveField = ""
      let onAfterReady = null

      startRecord = (saveTarget, saveFieldTemp, onAfterReadyHandler) => {
        saveTargetRef.current = saveTarget
        saveField = saveFieldTemp
        onAfterReady = onAfterReadyHandler
        ended = false

        mediaRecorder.start();
      }

      stopRecord = () => {
        mediaRecorder.stop();
      }

      mediaRecorder.addEventListener("dataavailable", function(event) {
        if (!ended) {
          saveTargetRef.current[saveField] = event.data

          onAfterReady()
          ended = true
        }

        // onNewRecord(event.data)
        // lastRecord = event.data
      });
    });

  const renderNextSelectedWords = (words) => {
    return words.map((word, index) => {
      return `<span class="source-word">${word}</span>`
    }).join(" ")
  }

  const openCommentPopup = () => {
    const selObj = window.getSelection();
    const commentPopup = document.querySelector(".comment-popup")

    commentPopup.style.display = "block"

    const selectionText = selObj.toString()
    const words = selectionText.split(" ")

    lastWords = words
    lastSelectedWords = new Set([])

    document.querySelector('.source-text').innerHTML = renderNextSelectedWords(words)
  }

  const createSwitchRecordingSrc = (className, fieldName, { onInit, onRecordFinish, onStart, onFinish }) => {
    return () => {
      isRecordingSrc = !isRecordingSrc

      const micBtt = document.querySelector(`.${className}`)

      if (isRecordingSrc) {
        onInit()
        onStart()
        micBtt.setAttribute("class", `${className} btn btn-primary btn-mic btn-mic_recording`)
      } else {
        onFinish()
        micBtt.setAttribute("class", `${className} btn btn-primary btn-mic`)
      }

      if (isRecordingSrc) {
        startRecord(audioCommentRef.current, fieldName, onRecordFinish)
      } else {
        stopRecord()
      }
    }
  }

  window.switchRecordingSrc = createSwitchRecordingSrc("js-btn-mic-source", "srcAudio", {
    onInit: () => {
      cleanCommentForm()
      audioCommentRef.current = createNullAudioComment()
    },
    onRecordFinish: () => {
      openCommentPopup()
      document.querySelector('.js-btn-mic-source').setAttribute("class", `js-btn-mic-source btn btn-primary btn-mic`)
    },
    onStart: () => {

    },
    onFinish: () => {
      if (currentAudio && currentAudio.playing()) {
        pauseAudio()
      }
    },
  })

  window.switchRecordingComment = createSwitchRecordingSrc("js-btn-mic-comment", "commentAudio", {
    onInit: () => {},
    onRecordFinish: () => {
      document.querySelector('.audio-comment-ready').innerHTML = "Ready"
      document.querySelector('.js-btn-mic-comment').setAttribute("class", `js-btn-mic-comment btn btn-primary btn-mic`)
    },
    onStart: () => {},
    onFinish: () => {},
  })

  /* COMMENT */
  /*
    $$(".open-comment-button").onclick = () => {
      $$(".comment-popup").style.display = ""
    }
   */

  document.querySelector(".close-comment-button").onclick = () => {
    document.querySelector(".comment-popup").style.display = "none"
    cleanCommentForm()
  }
  /* END COMMENT */

  /* Time progress saving */
  let previousCurrentSeek = null;
  setInterval(() => {
    if (currentAudioLoaded) {
      if (currentAudio) {
        const currentSeek = currentAudio.seek();

        localStorage.setItem("currentAudioUrl", JSON.stringify(currentAuditionItem.audio));
        localStorage.setItem("currentAudioSeek", JSON.stringify(previousCurrentSeek));

        previousCurrentSeek = currentSeek;
      } else {
        localStorage.setItem("currentAudioUrl", JSON.stringify(null));
        localStorage.setItem("currentAudioSeek", JSON.stringify(null));
      }
    }
  }, 3000);


  /* Displayed text blocks saving */


  /* Buttons to hide till certain text block */


  const downloadWordListBtt = document.querySelector(".download-word-list-btt");
  const saveToLocalStorageBtt = document.querySelector(".save-to-local-storage-btt");

  /*  */
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "F4") {
      window.handleClickAddItemToDict(event);

      return;
    }

    /* rewind */
    // if (key === "q") {
    //   onRewindBack10Sec();
//
    //   return;
    // }
//
    // if (key === "w") {
    //   onRewindBack5Sec();
//
    //   return;
    // }
//
    // if (key === "e") {
    //   onRewindBack2_5Sec();
//
    //   return;
    // }
//
    // if (key === "r") {
    //   onRewindNext2_5Sec();
//
    //   return;
    // }
//
    // if (key === "t") {
    //   onRewindNext5Sec();
//
    //   return;
    // }
//
    // if (key === "y") {
    //   onRewindNext10Sec();
//
    //   return;
    // }
//
    // /* play/pause */
    // if (event.code === "Space") {
    //   if (playing) {
    //     pauseAudio();
    //   } else {
    //     playAudio();
    //   }
//
    //   return;
    // }
//
    // /* save word */
    // // console.log("event.code: ", event.code, event);
    // if (event.ctrlKey && key === "s") {
    //   saveToLocalStorageBtt.click();
//
//
    //   event.preventDefault();
    //   return;
    // }

  });

})();

// Replace google doc translation box.
(() => {
  let currentAddToDictResolve = (() => {});
  let currentAddToDictResolveFlag = false;
  let awaitForAddToDict = null;

  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  const observe = (obj, callback) => {
    if (!obj || obj.nodeType !== 1) {
      return;
    }

    if (MutationObserver) {
      // define a new observer
      var mutationObserver = new MutationObserver(callback);
      // have the observer observe for changes in children
      mutationObserver.observe(obj, { childList: true, subtree: false });
      return mutationObserver;
    }
  };

  window.handlePhraseBlurHandler = (event) => {
    const text = event.target.value;
    const listIndexBox = event.target.closest("[data-list-index]");
    const listIndex = parseInt(listIndexBox.getAttribute("data-list-index"), 10);

    const dict = JSON.parse(localStorage.getItem("dict") || "[]");
    const item = dict[dict.length - listIndex];

    item.ruComment = text;

    localStorage.setItem("dict", JSON.stringify(dict));
  };

  const renderSelectionSentencesText = (text, item) => {
    text = text || "";
    const textIndex = text.indexOf(item.trim());

    if (textIndex !== -1) {
      return `${text.slice(0, textIndex)}<span class="subject-fragment">${text.slice(textIndex, textIndex + item.length)}</span>${text.slice(textIndex + item.length)}`;
    }

    return text
  };

  const renderDictFragment = (dictFragment, date1, date2) => {
    return dictFragment.map((item, index, array) => {
      if (date1 && date1.getTime() > (item.timestamp !== undefined ? item.timestamp : item.datestamp)) {
        return "";
      }

      if (date2 && date2.getTime() < (item.timestamp !== undefined ? item.timestamp : item.datestamp)) {
        return "";
      }

      if (item.removed) {
        return "";
      }

      let prefix = "";

      if (array[index - 1] ? (array[index - 1].date !== item.date) : true) {
        prefix = `
          <tr>
            <td class="date-header" colspan=5>${item.date}</td>
          </tr>
        `;
      }

      if (item.type === "word") {
        return `
                    ${prefix}
                    <tr>
                      <td>
                        <div>${item.en}</div>
                        <div>${String(item.trascription).trim() ? `[${item.trascription}]` : ""}</div>
                      </td>
                      <td>${item.ruCurrentMeaning ? item.ruCurrentMeaning.join(","): ""}</td>
                      <td>${renderRuTranslations((item.ruTranslations || []))}</td>
                      <td>${renderSelectionSentencesText(item.selectionSentencesText, item.en)}</td>
                      <td><nobr>${item.time} - ${item.date}</nobr></td>  
                    </tr>
                  `;
      } else if (item.type === "phrase") {
        return `
                    ${prefix}
                    <tr>
                      <td>
                        <div>${renderEnPhrase(item)}</div>
                        <div>${String(item.trascription).trim() ? `[${item.trascription}]` : ""}</div>
                      </td>
                      <td>${item.ruComment}</td>
                      <td>${item.ru}</td>
                      <td>${renderSelectionSentencesText(item.selectionSentencesText, item.en)}</td>
                      <td><nobr>${item.time} - ${item.date}</nobr></td>  
                    </tr>
                  `;
      }
    }).join("")
  };

  window.handleOpenTableInWindow = () => {
    const separatePhraseInput = document.querySelector("#separatePhraseInput");
    const rangeDateInput1 = document.querySelector("#rangeDateInput1");
    const rangeDateInput2 = document.querySelector("#rangeDateInput2");

    let date1 = rangeDateInput1.value.trim() ? rangeDateInput1.value.trim().split("/").map((item) => parseInt(item, 10)) : null;
    let date2 = rangeDateInput2.value.trim() ? rangeDateInput2.value.trim().split("/").map((item) => parseInt(item, 10)) : null;

    date1 = date1 ? new Date(date1[0] + 2000, date1[1] - 1, date1[2]) : null;
    date2 = date2 ? new Date(date2[0] + 2000, date2[1] - 1, date2[2]) : null;

    let dict = JSON.parse(localStorage.getItem("dict") || "[]");
    const newWindow = window.open("", "_blank");

    if (document.querySelector("#sortingFormStart").checked) {
      dict = dict.reverse();
    }

    newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Table</title>
            <style>
              body {
                font-family: Arial;
                padding: 15px;
                font-size: 8pt;
              }
              
              table {
                border-collapse: collapse;
              }

              table td,
              table th {
                vertical-align: top;
                text-align: left;
                border: 1px solid #000000;
                padding: 0px;       
              }
              
              .date-header {
                padding-top: 10px;
                font-size: 11pt;
              }
              
              .span-phrase-word {
                cursor: pointer;
              }
              
              .span-phrase-word_selected {
                text-decoration: underline;
              }
              
              .subject-fragment {
                text-decoration: underline;
              }
            </style>
        </head>
        <body>
            <table>
              <colgroup>
                <col style="width:3.5cm;" />
                <col style="width:2.25cm;" />
                <col style="width:4.5cm;" />
                <col style="width:3.75cm;" />
                <col style="width:2.6cm;" />
              </colgroup> 
              <tr>
                <th>en</th>
                <th>current meaning</th>
                <th>ru</th>
                <th>text fragment</th>
                <th>time</th>
              </tr>
              ${separatePhraseInput.checked ? 
                  `${renderDictFragment(dict.filter((item) => item.type === "word"), date1, date2)}${renderDictFragment(dict.filter((item) => item.type === "phrase"), date1, date2)}` : 
                  `${renderDictFragment(dict, date1, date2)}`
                }
            </table>
        </body>
        </html>
    `);
  };

  let currentDictArticle;
  let selectionSentencesText;
  let textFragmentSelection;

  const renderRuTranslations = (ruTranslations) => {
    return ruTranslations.map((item) => {
      return `
          <span class="dict-hint">${item.header.slice(0, 4)}.</span>
          ${item.items.map((item) => {
            return `<span class="dict-word-item">${item}</span>`;
          }).join(", ")};
      `;
    })
  };


  const renderEnPhrase = (item) => {
    return item.en.split(" ").map((word, index) => {
      return `<span data-phrase-word-index="${index}"
                    class="span-phrase-word ${(item.highlightedWords || []).indexOf(index) !== -1 ? "span-phrase-word_selected" : ""}">
        ${word} </span>`;
    }).join("");
  };


  const renderDictItem = (item, index, renderAddButton, listIndex, selectionSentencesText, displayDeleteButton) => {
    displayDeleteButton = displayDeleteButton === undefined ? true : displayDeleteButton;

    if (item.type === "phrase") {
      return `<div data-list-index="${index}" data-removed="${item.removed ? "true" : "false"}" class="dict-article dict-article-phrase">
          <div class="dict-article__top-controls"${!renderAddButton ? " style='display: none;'" : ''}>
            <button class="btn btn-primary btn-sm btn-sm-short"  onclick="window.handleClickAddItemToDict(event)">+</button>
          </div>
          <div class="dict-article__top">
            <div class="dict-article__top-left">
              <div class="dict-article__word">
                <div class="dict-article__word-number word-index">${leadingZeros(index, 5)}</div>
                <div class="dict-article__word-number">
                  ${renderEnPhrase(item)}
                  ${displayDeleteButton ? `
                      <button class="btn btn-outline-secondary btn-sm btn-sm-tiny" 
                              data-index="${listIndex}" 
                              onclick="window.handleClickRemoveItemFromDict(event)">
                                -
                      </button>                  
                  ` : ""}
                </div>
                <div class="trascription-text">
                  ${item.trascription || ""}
                </div>
              </div>
              <div class="dict-article__transcription">
                ${item.date} - ${item.time}
              </div>
            </div>
            <div class="dict-article__top-right">
              <textarea class="dict-phrase-comment" onblur="window.handlePhraseBlurHandler(event)">${item.ruComment || ""}</textarea>
            </div>
          </div>
          <div class="dict-article__bottom">
            ${item.ru}
          </div>
          <div class="dict-source-santance">
            ${renderSelectionSentencesText(item.selectionSentencesText || "", item.en.trim())}
          </div>
        </div>`;
    } else {
      return `<div data-list-index="${index}" data-removed="${item.removed ? "true" : "false"}" class="dict-article">
          <div class="dict-article__top-controls"${!renderAddButton ? " style='display: none;'" : ''}>
            <button class="btn btn-primary btn-sm btn-sm-short"  onclick="window.handleClickAddItemToDict(event)">+</button>
          </div>
          <div class="dict-article__top">
            <div class="dict-article__top-left">
              <div class="dict-article__word">
                <div class="dict-article__word-number word-index">${leadingZeros(index, 5)}</div>
                <div class="dict-article__word-number">
                  ${item.en}
                  ${displayDeleteButton ? `
                    <button class="btn btn-outline-secondary btn-sm btn-sm-tiny" 
                            data-index="${listIndex}"
                            onclick="window.handleClickRemoveItemFromDict(event)">
                            -
                    </button>
                  `: ""}
                </div>
                <div class="trascription-text">
                  ${item.trascription || ""}
                </div>
              </div>
              <div class="dict-article__transcription">
                ${item.date} - ${item.time}
              </div>
            </div>
            <div class="dict-article__top-right">
              <span class="ru-current-meaning">${item.ruCurrentMeaning ? item.ruCurrentMeaning.join(", ") : ""}</span>
              <textarea class="dict-phrase-comment dict-phrase-comment_word" onblur="window.handlePhraseBlurHandler(event)">${item.ruComment || ""}</textarea>
            </div>
          </div>
          <div class="dict-article__bottom">
            ${renderRuTranslations((item.ruTranslations || []))}          
          </div>
          <div class="dict-source-santance">
            ${renderSelectionSentencesText(item.selectionSentencesText || "", item.en.trim())}
          </div>
        </div>`;
    }
  };

  const addDictItemToQueue = (element) => {
    if (document.querySelector(".js-special-dictionary").checked) {
      new Promise(() => {
        let selection = document.getSelection();
        selection.removeAllRanges();
        selection.selectAllChildren(element);
      });
    } else {
      const createNextPromise = () => {
        return (new Promise((resolve) => {
          let selection = document.getSelection();
          selection.removeAllRanges();
          selection.selectAllChildren(element);
          isNewDictPickerWordAddToDict = true;
          // !!!!


          // const mouseDownEvent = new MouseEvent('mousedown', {
          //   bubbles: true, // Allow the event to bubble up the DOM tree
          //   cancelable: true, // Allow the default action of the event to be prevented
          //   view: window, // The window object, relevant for UI events
          //   button: 0, // 0 for left mouse button, 1 for middle, 2 for right
          // });
//
          // // Give the plugin a reason to check if selection is changed.
          // element.dispatchEvent(mouseDownEvent);
          const event2Obj = {
            bubbles: true,
            cancelable: true,
            button: 0, // 0 for left button, 1 for middle, 2 for right
          };

          document.body.dispatchEvent(new KeyboardEvent('mousedown', event2Obj));

          const event3Obj = {
            bubbles: true,
            cancelable: true,
            button: 0, // 0 for left button, 1 for middle, 2 for right
          };

          document.body.dispatchEvent(new KeyboardEvent('mouseup', event3Obj));

          currentAddToDictResolve = resolve;
          currentAddToDictResolveFlag = false;
        }));
      };

      if (awaitForAddToDict) {
        awaitForAddToDict.then(() => {
          return createNextPromise();
        });
      } else {
        awaitForAddToDict = createNextPromise();
      }
    }
  };


  document.addEventListener("click", (event) => {
    if (event.target.matches(".text-sentence") && event.button === 0) {
      if (document.querySelector("#dictClicker").checked) {
        console.log("addDictItemToQueue !!!");
        addDictItemToQueue(event.target);

        const target = event.target;
        target.setAttribute("data-clicked", "enabled");

        setTimeout(() => {
          target.removeAttribute("data-clicked");
        }, 350);

        event.preventDefault();
        event.stopPropagation();
      }
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.matches(".dict-word-item")) {
      const text = event.target.innerText;
      const listIndexBox = event.target.closest("[data-list-index]");
      const listIndex = parseInt(listIndexBox.getAttribute("data-list-index"), 10);

      const dict = JSON.parse(localStorage.getItem("dict") || "[]");

      const item = dict[dict.length - listIndex] || currentDictArticle;

      if (!item.ruCurrentMeaning) {
        item.ruCurrentMeaning = [];
      }

      item.ruCurrentMeaning.push(text);

      listIndexBox.querySelector(".ru-current-meaning").innerText = item.ruCurrentMeaning.join(", ");

      localStorage.setItem("dict", JSON.stringify(dict));
    }

    if (event.target.closest(".ru-current-meaning")) {
      const listIndexBox = event.target.closest("[data-list-index]");
      const listIndex = parseInt(listIndexBox.getAttribute("data-list-index"), 10);

      const dict = JSON.parse(localStorage.getItem("dict") || "[]");

      const item = dict[dict.length - listIndex] || currentDictArticle;

      if (!item.ruCurrentMeaning) {
        item.ruCurrentMeaning = [];
      }

      item.ruCurrentMeaning = [];

      listIndexBox.querySelector(".ru-current-meaning").innerText = "";

      localStorage.setItem("dict", JSON.stringify(dict));
    }

    if (event.target.matches(".span-phrase-word")) {
      const phraseWordIndex = parseInt(event.target.getAttribute("data-phrase-word-index"), 10);
      const listIndexBox = event.target.closest("[data-list-index]");
      const listIndex = parseInt(listIndexBox.getAttribute("data-list-index"), 10);

      const dict = JSON.parse(localStorage.getItem("dict") || "[]");
      const item = dict[dict.length - listIndex];

      if (!item.highlightedWords) {
        item.highlightedWords = [];
      }

      if (item.highlightedWords.indexOf(phraseWordIndex) !== -1) {
        item.highlightedWords.splice(item.highlightedWords.indexOf(phraseWordIndex), 1);
      } else {
        item.highlightedWords.push(phraseWordIndex);
      }

      event.target.setAttribute("class", item.highlightedWords.indexOf(phraseWordIndex) !== -1 ?
        "span-phrase-word span-phrase-word_selected" :
        "span-phrase-word"
      );

      localStorage.setItem("dict", JSON.stringify(dict));
    }

    if (event.target.matches(".text-sentence")) {
      if (!document.querySelector("#dictClicker").checked) {
        let dictArticles = event.target.getAttribute("data-dict-articles") || "";

        dictArticles = dictArticles.split(",").filter(item => item).map(listIndex => parseInt(listIndex, 10));

        const dataList = Array.from(document.querySelectorAll("[data-list-index]"));

        dataList.forEach((item) => {
          // dict-article dict-article-phrase
          if (/dict-article-phrase/.test(item.getAttribute("class"))) {
            item.setAttribute("class", "dict-article dict-article-phrase");
          } else {
            item.setAttribute("class", "dict-article");
          }
        });

        const targetSentences = Array.from(document.querySelectorAll(`[data-dict-articles]`)).filter((item) => {
          let dictArticleElements = item.getAttribute("data-dict-articles");

          dictArticleElements = dictArticleElements.split(",").map((item) => {
            return parseInt(item, 10);
          });

          return dictArticles.some((item2) => {
            return dictArticleElements.indexOf(item2) !== -1;
          });
        });

        Array.from(document.querySelectorAll(".span-dict-linked-text_selected"))
          .forEach((item) => {
            let classAttr = item.getAttribute("class");

            classAttr = classAttr.replace(/\s?span-dict-linked-text_selected\s?/, "");

            item.setAttribute("class", classAttr);
          });

        // выбирать всех и фильтровать по вхождению индекса в список.
        targetSentences.forEach((item) => {
          item.setAttribute("class", `${item.getAttribute("class")} span-dict-linked-text_selected`);
        });

        if (!dictArticles.length) {
          return;
        }

        dictArticles.forEach((listIndex) => {
          const dictArticle = document.querySelector(`[data-list-index="${listIndex}"]`);

          if (/dict-article-phrase/.test(dictArticle.getAttribute("class"))) {
            dictArticle.setAttribute("class", "dict-article dict-article-phrase dict-article_active");
          } else {
            dictArticle.setAttribute("class", "dict-article dict-article_active");
          }
        });

        const firstDictArticleIndex = dictArticles[0];

        if (firstDictArticleIndex !== undefined) {
          const dictArticle = document.querySelector(`[data-list-index="${firstDictArticleIndex}"]`);
          const dictArticleRect = dictArticle.getBoundingClientRect();

          const dictContainer = document.querySelector(".dict-container-inner");
          const dictContainerRect = dictContainer.getBoundingClientRect();

          // добавить textContainerRect.top
          if ((dictArticleRect.top < dictContainerRect.top) ||
            (dictArticleRect.bottom > dictContainerRect.bottom)) {
            const deltaTop = dictArticleRect.top - dictContainerRect.top;
            const putToCenterDelta = (dictContainerRect.height / 2);

            dictContainer.scrollTo({
              left: 0,
              top: dictContainer.scrollTop + deltaTop - putToCenterDelta,
            });
          }

        }
      }
    }

    if (event.target.matches(".dict-article__word-number")) {
      const listIndex = parseInt(event.target.closest("[data-list-index]").getAttribute("data-list-index"), 10);
      const listItem = event.target.closest("[data-list-index]");

      const dataList = Array.from(document.querySelectorAll("[data-list-index]"));

      dataList.forEach((item) => {
        // dict-article dict-article-phrase
        if (/dict-article-phrase/.test(item.getAttribute("class"))) {
          item.setAttribute("class", "dict-article dict-article-phrase");
        } else {
          item.setAttribute("class", "dict-article");
        }
      });

      const listDictArticle = event.target.closest("[data-list-index]");

      if (/dict-article-phrase/.test(listDictArticle.getAttribute("class"))) {
        listDictArticle.setAttribute("class", "dict-article dict-article-phrase dict-article_active");
      } else {
        listDictArticle.setAttribute("class", "dict-article dict-article_active");
      }

      const targetSentences = Array.from(document.querySelectorAll(`[data-dict-articles]`)).filter((item) => {
        let dictArticleElements = item.getAttribute("data-dict-articles");

        dictArticleElements = dictArticleElements.split(",").map((item) => {
          return parseInt(item, 10);
        });

        return dictArticleElements.indexOf(listIndex) !== -1;
      });

      Array.from(document.querySelectorAll(".span-dict-linked-text_selected"))
        .forEach((item) => {
          let classAttr = item.getAttribute("class");

          classAttr = classAttr.replace(/\s?span-dict-linked-text_selected\s?/, "");

          item.setAttribute("class", classAttr);
        });

      // выбирать всех и фильтровать по вхождению индекса в список.
      targetSentences.forEach((item) => {
        item.setAttribute("class", `${item.getAttribute("class")} span-dict-linked-text_selected`);
      });

      if (targetSentences[0]) {
        const targetElement = targetSentences[0];
        const textContainer = document.querySelector(".text-container-inner");

        const targetElementRect = targetElement.getBoundingClientRect();
        const textContainerRect = textContainer.getBoundingClientRect();

        // добавить textContainerRect.top
        if ((targetElementRect.top < textContainerRect.top) ||
            (targetElementRect.bottom > textContainerRect.bottom)) {
          const deltaTop = targetElementRect.top - textContainerRect.top;
          const putToCenterDelta = (textContainerRect.height / 2);

          textContainer.scrollTo({
            left: 0,
            top: textContainer.scrollTop + deltaTop - putToCenterDelta,
          });
        }
      }
    }
  });


  const rerenderDictList = (dict, renderAddButton) => {
    document.querySelector(".dict-list").innerHTML = dict.map((item, index, array) => {
      return renderDictItem(item, array.length - index, renderAddButton, index);
    }).join("");
  };

  const rerenderDictListItem = (dictItem, index, array) => {
    const revIndex = array.length - index

    const div = document.querySelector(`[data-list-index="${revIndex}"]`);
    div.outerHTML = renderDictItem(dictItem, revIndex, false, index);
  };

  const rerenderDictFirstElement = (dict, renderAddButton) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = renderDictItem(dict[0], dict.length, renderAddButton, 0);

    const firstChild = document.querySelector(".dict-list > *:first-child");
    document.querySelector(".dict-list").insertBefore(tempDiv.childNodes[0], firstChild);
  };

  const setCurrentArticleInDictionary = () => {
    let dict = JSON.parse(localStorage.getItem("dict") || "[]");

    /*
    const indexOfTarget = dict.findIndex((dictItem) => {
      return dictItem.en === currentDictArticle.en;
    });

    if (indexOfTarget !== -1) {
      const item = dict[indexOfTarget];

      dict.splice(indexOfTarget, 1);

      dict.unshift(item);
    } else {
    */

    dict.unshift(currentDictArticle);

    // }

    // rerenderDictList(dict, false);
    rerenderDictFirstElement(dict, false);
    localStorage.setItem("dict", JSON.stringify(dict));
  };

  const firstDictListRender = () => {
    let dict = JSON.parse(localStorage.getItem("dict") || "[]");

    rerenderDictList(dict, false);
  };

  firstDictListRender();

  window.handleClickAddItemToDict = () => {
    setCurrentArticleInDictionary();
  };

  window.handleClickRemoveItemFromDict = (event) => {
    const index = parseInt(event.target.getAttribute("data-index"));
    const dict = JSON.parse(localStorage.getItem("dict") || "[]");

    dict[index].removed = !dict[index].removed;

    rerenderDictListItem(dict[index], index, dict);
    // rerenderDictList(dict, false);
    localStorage.setItem("dict", JSON.stringify(dict));
  };

  const getTextFragmentSelection = () => {
    const selObj = window.getSelection();

    let baseOffset = selObj.baseOffset;
    let extentOffset = selObj.extentOffset;

    let baseNodeItem = selObj.baseNode instanceof Text ?
      selObj.baseNode.parentElement.closest("[data-span-index]") :
      selObj.baseNode.closest("[data-span-index]");

    let extentNodeItem = selObj.baseNode instanceof Text ?
      selObj.extentNode.parentElement.closest("[data-span-index]") :
      selObj.extentNode.closest("[data-span-index]");

    let baseNodeItemP = baseNodeItem.closest("[data-p-index]");
    let extentNodeItemP = extentNodeItem.closest("[data-p-index]");

    if (parseInt(baseNodeItemP.getAttribute("data-p-index"), 10) >
      parseInt(extentNodeItemP.getAttribute("data-p-index"), 10)) {
      let tempP = baseNodeItemP;
      let tempOffset = baseOffset;
      let tempNodeSpan = baseNodeItem;

      baseNodeItem = extentNodeItem;
      baseNodeItemP = extentNodeItemP;
      baseOffset = extentOffset;

      extentNodeItem = tempNodeSpan;
      extentNodeItemP = tempP;
      extentOffset = baseOffset;
    }

    /*

      const { baseNode, extentNode } = selObj;

      if (baseNode instanceof Text) {
        let counter = 0;

        let tempNode = extentNode;
        while (tempNode && tempNode.previousSibling) {
          counter += baseNode.previousSibling.innerText.length;
          tempNode = tempNode.nextSibling;
        }

        baseOffset += counter;
      }

      if (extentNode instanceof Text) {
        let counter = 0;

        let tempNode = extentNode;
        while (tempNode && tempNode.nextSibling) {
          counter += baseNode.nextSibling.innerText.length;
          tempNode = tempNode.nextSibling;
        }

        extentOffset += counter;
      }
     */

    const baseNodePItemIndex = baseNodeItemP.getAttribute("data-p-index");
    const extentNodePItemIndex = extentNodeItemP.getAttribute("data-p-index");

    const allNodes = [];

    const baseNodeItemIndex = parseInt(baseNodeItem.getAttribute("data-span-index"), 10);
    const extentNodeItemIndex = parseInt(extentNodeItem.getAttribute("data-span-index"), 10);

    let i2 = baseNodeItemIndex;
    let nextItem = baseNodeItemP.querySelector(`[data-span-index="${i2}"]`);
    while (nextItem) {
      nextItem = baseNodeItemP.querySelector(`[data-span-index="${i2}"]`);

      if (baseNodePItemIndex === extentNodePItemIndex && i2 > extentNodeItemIndex) {
        nextItem = null;
      }

      if (nextItem) {
        allNodes.push([baseNodePItemIndex, i2]);
      }

      i2 += 1;
    }

    for (let i = baseNodePItemIndex + 1; i <= extentNodePItemIndex - 1; i++) {
      const item = document.querySelector(`[data-p-index="${i}"]`);
      const spanSelectors = Array.from(item.querySelectorAll("> *")).map((item) => {
        return [i, parseInt(item.getAttribute("data-span-index"), 10)];
      });

      allNodes.push(...spanSelectors);
    }

    let i3 = extentNodeItemIndex;
    let nextItem2 = extentNodeItemP.querySelector(`[data-span-index="${i3}"]`);
    while (nextItem2 && baseNodePItemIndex !== extentNodePItemIndex) {
      nextItem2 = extentNodeItemP.querySelector(`[data-span-index="${i3}"]`);

      if (nextItem2) {
        allNodes.push([extentNodePItemIndex, i3]);
      }

      i3 -= 1;
    }

    return {
      selectedSpans: allNodes,
      startSpan: [baseNodePItemIndex, parseInt(baseNodeItem.getAttribute("data-span-index"), 10)],
      endSpan: [extentNodePItemIndex, parseInt(extentNodeItem.getAttribute("data-span-index"), 10)],

      startOffset: baseOffset, // !!! it ie needed as a hack for empty selection detection
      endOffset: extentOffset, // !!! it ie needed as a hack for empty selection detection
    };
  };

  const getSelectionText = (textFragmentSelection) => {
    let allSpans = [];
    const selectedSpans = textFragmentSelection.selectedSpans;
    let result = "";

    const { startSpan, endSpan } = textFragmentSelection;

    let tempSpan = document.querySelector(`[data-p-index="${startSpan[0]}"]`)
      .querySelector(`[data-span-index="${startSpan[1]}"]`).previousSibling;

    while (tempSpan) {
      if (!/\.|\!|\?/.test(tempSpan.innerText)) {
        allSpans.push(tempSpan);

        tempSpan = tempSpan.previousSibling;
      } else {
        tempSpan = null;
      }
    }

    allSpans = allSpans.reverse();

    allSpans = allSpans.concat(selectedSpans);

    tempSpan = document.querySelector(`[data-p-index="${endSpan[0]}"]`)
      .querySelector(`[data-span-index="${endSpan[1]}"]`).nextSibling;

    while (tempSpan) {
      if (!/\.|\!|\?/.test(tempSpan.innerText)) {
        allSpans.push(tempSpan);
        tempSpan = tempSpan.nextSibling;
      } else {
        allSpans.push(tempSpan);
        tempSpan = null;
      }
    }

    allSpans.forEach((selectedSpan) => {
      let selectedSpanElem;
      if (Array.isArray(selectedSpan)) {
        selectedSpanElem = document.querySelector(`[data-p-index="${selectedSpan[0]}"]`)
          .querySelector(`[data-span-index="${selectedSpan[1]}"]`);
      }

      const targetNode = (selectedSpanElem || selectedSpan)

      result += ((typeof targetNode.textContent === "string" ? targetNode.textContent : targetNode.innerText) || "") + " ";
    });

    return result.replace(/\s\s/gi, " ").replace(/\s\s/gi, " ")
      .replace(/\s\s/gi, " ").replace(/\s\s/gi, " ")
      .replace(/\s\s/gi, " ").replace(/\s\s/gi, " ")
      .replace(/\s\s/gi, " ").replace(/\s\s/gi, " ");
  };

  const renderSelectedDictArticleElement = () => {
    let dict = JSON.parse(localStorage.getItem("dict") || "[]");
    const selectedArticleDictItem = document.querySelector(".selected-text-item");

    selectedArticleDictItem.innerHTML = renderDictItem(currentDictArticle, dict.length + 1, true, -1, selectionSentencesText, false);
  };


  const cleanAllDictFragments = () => {
    const allElements = document.querySelectorAll(".span-dict-linked-text");

    allElements.forEach((item) => {
      item.setAttribute("class", textSentenceClass);
      item.setAttribute("data-dict-articles", "");
    });
  };

  let lastYandexDictRequest = Promise.resolve(null);

  let lastSelectionChangeText = "";
  let selectionChanged = false;
  let lastSelectionChangeFinishText = "";
  document.onselectionchange = (event) => {
    if (document.querySelector(".js-special-dictionary").checked) {
      const selObj = window.getSelection();
      const text = selObj.toString().trim();

      selectionChanged = true;
      lastSelectionChangeText = text;
    }
  };

  document.addEventListener("mouseup", (event) => {
    if (selectionChanged) {
      const textFragmentSelection1 = getTextFragmentSelection();
      const selectionSentencesText2 = getSelectionText(textFragmentSelection1);
      const selection = {
        textFragmentSelection: textFragmentSelection1,
        selectionSentencesText: selectionSentencesText2,
      };

      setTimeout(() => {
          const text = lastSelectionChangeText;

          if (!!text) {
            isNewDictPickerWordAddToDict = true; // ??? It should be redone.

            const tryNextRequest = (optionsText, prevOptionsText) => {
              return lastYandexDictRequest.then(() => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                  }, 400);
                });
              }).then(() => {
                return requestYandexDict(optionsText);
              }).then((response) => {
                if ((!response.defs || !response.defs.length)) {
                  if (/ies$/.test(optionsText)) {
                    return tryNextRequest(optionsText.replace(/ies$/, "y"));
                  }

                  if (/s$/.test(optionsText)) {
                    return tryNextRequest(optionsText.replace(/s$/, ""));
                  }

                  if (/ied$/.test(optionsText)) {
                    return tryNextRequest(optionsText.replace(/ied$/, "y"));
                  }

                  if (/ed$/.test(optionsText) && !prevOptionsText) {
                    return tryNextRequest(optionsText.replace(/d$/, ""), optionsText);
                  }

                  if (/e$/.test(optionsText) && /ed$/.test(prevOptionsText)) {
                    return tryNextRequest(optionsText.replace(/e$/, ""));
                  }
                }

                parseAndSetSelectedDictArticle(response, selection, () => {
                  if (document.querySelector("#dictClicker").checked) {
                    setCurrentArticleInDictionary();
                  }
                });

                return null;
              })
            };

            lastYandexDictRequest = tryNextRequest(text.trim()).catch((error) => error)
              .finally(() => {
                return null;
              });
          }
      }, 65);
    }

    selectionChanged = false;
  });

  const parseAndSetSelectedDictArticle = (dictArticle, selection, beforeRender) => {
    let yaDictCase = false;

    if (document.querySelector(".js-special-dictionary").checked) {
      yaDictCase = true;

      let en = "";
      let ru = "";
      let transcription = "";
      let ruTranslations = [];

      const def = dictArticle.def;

      if (def && def.length) {
        en = def[0].text;
        transcription = def[0].ts;

        if (def[0].tr && def[0].tr.length) {
          ru = def[0].tr[0].text;
        }

        ruTranslations = def.map((item) => {
          return {
            header: item.pos,
            items: item.tr.map((item) => {
              return item.text.trim();
            }),
          }
        });
      }

      const nowDate = new Date();

      currentDictArticle = {
        en: en,
        transcription: transcription,
        ru: ru,
        ruComment: "",
        highlightedWords: [],
        type: "word",
        ruTranslations: ruTranslations,
        timestamp: nowDate.getTime(),
        date: `${leadingZeros(nowDate.getFullYear(), 4)}-${leadingZeros(nowDate.getMonth() + 1, 2)}-${leadingZeros(nowDate.getDate(), 2)}`,
        time: `${leadingZeros(nowDate.getHours(), 2)}:${leadingZeros(nowDate.getMinutes(), 2)}`,
        selectionSentencesText: selection.selectionSentencesText,
        textSelectionFragment: selection.textFragmentSelection,
        removed: false,
      };

      selectionSentencesText = selection.selectionSentencesText;
      textFragmentSelection = selection.textFragmentSelection;

    } else {
      const ticket = document.querySelector("div.TnITTtw-tooltip-main-wrap");

      if (!ticket) {
        return;
      }

      const enBody = ticket.querySelector(".TnITTtw-original .TnITTtw-mv-text-part");
      const ruBody = ticket.querySelector(".TnITTtw-main-variant .TnITTtw-mv-text-part");
      const ruOthers = Array.from(ticket.querySelectorAll(".TnITTtw-v-closest-wrap .TnITTtw-main-of-item"));

      textFragmentSelection = getTextFragmentSelection();
      selectionSentencesText = getSelectionText(textFragmentSelection);

      if (!enBody || !ruBody) {
        const enBodyText = ticket.querySelector(".TnITTtw-original-wrap.TnITTtw-padded-single-translation .TnITTtw-mv-text-part.TnITTtw-t");
        const ruBodyText = ticket.querySelector(".TnITTtw-padded-single-translation.TnITTtw-trans-wrap .TnITTtw-tpart.TnITTtw-t");
        const type = "";

        const en = String(enBodyText.innerText).trim();
        const ru = String(ruBodyText.innerText).trim();

        const isASingleWord = !/\s/.test(en);
        const nowDate = new Date();

        currentDictArticle = {
          en: en,
          transcription: "",
          ru: ru,
          ruComment: "",
          highlightedWords: [],
          type: isASingleWord ? "word" : "phrase",
          ruTranslations: [],
          timestamp: nowDate.getTime(),
          date: `${leadingZeros(nowDate.getFullYear(), 4)}-${leadingZeros(nowDate.getMonth() + 1, 2)}-${leadingZeros(nowDate.getDate(), 2)}`,
          time: `${leadingZeros(nowDate.getHours(), 2)}:${leadingZeros(nowDate.getMinutes(), 2)}`,
          selectionSentencesText: selectionSentencesText,
          textSelectionFragment: textFragmentSelection,
          removed: false,
        };
      } else {
        // TnITTtw-variant-row TnITTtw-t - блок
        // TnITTtw-v-pos TnITTtw-t - заголовок
        // .TnITTtw-v-closest-wrap .TnITTtw-main-of-item - переводы

        // const bodies = Array.from(ticket.querySelectorAll(".gtx-body"));
        const translationBocks = Array.from(ticket.querySelectorAll(".TnITTtw-variant-row.TnITTtw-t"));
        const ruTranslations = translationBocks.map((translationBock) => {
          const header = String(translationBock.querySelector(".TnITTtw-v-pos.TnITTtw-t").innerText).trim();
          const items = Array.from(translationBock.querySelectorAll(".TnITTtw-main-of-item.TnITTtw-t")).map((item) => {
            return String(item.innerText).trim();
          });

          return {
            header,
            items,
          };
        });

        const en = String(enBody.innerText).trim();
        const ru = String(ruBody.innerText).trim();

        const nowDate = new Date()
        currentDictArticle = {
          en: en,
          transcription: "",
          ru: ru,
          ruComment: "",
          ruCurrentMeaning: [],
          type: "word",
          ruTranslations: ruTranslations,
          timestamp: nowDate.getTime(),
          date: `${leadingZeros(nowDate.getFullYear(), 4)}-${leadingZeros(nowDate.getMonth() + 1, 2)}-${leadingZeros(nowDate.getDate(), 2)}`,
          time: `${leadingZeros(nowDate.getHours(), 2)}:${leadingZeros(nowDate.getMinutes(), 2)}`,
          selectionSentencesText: selectionSentencesText,
          textSelectionFragment: textFragmentSelection,
          removed: false,
        };

        console.log("Single word!");
      }
    }

    if (beforeRender) {
      beforeRender();
    }

    //
    renderSelectedDictArticleElement();

    const isSelectionEmpty = textFragmentSelection.startSpan[0] === textFragmentSelection.endSpan[0] &&
      textFragmentSelection.startSpan[1] === textFragmentSelection.endSpan[1] &&
      textFragmentSelection.startOffset === textFragmentSelection.endOffset;

    if (yaDictCase ? document.querySelector("#dictClicker").checked : !isSelectionEmpty) {
      if (!isNewDictPickerWordAddToDict) {
        cleanAllDictFragments();
      }

      const dict = JSON.parse(localStorage.getItem("dict") || "[]");

      window.renderTextFragmentSelection(textFragmentSelection, dict.length);
      // !!
      // window.renderTextFragmentSelection(textFragmentSelection, -1);
    }

    if (!isNewDictPickerWordAddToDict) {
      window.renderListTextFragments();
    }
  };

  const observeMap =  new Map([]);

  observe(document.body, (...args) => {
    console.log("args: ", args);

    let googleTranslateCase = false;
    let googleTranslateRemoveCase = false;
    let transButt = false;

    args[0].forEach((argItem) => {
      argItem.addedNodes.forEach((item) => {
        if (item.matches("div.TnITTtw-tooltip-main-wrap")) {
          googleTranslateCase = true;
        }

        if (item.matches(".TnITTtw-translate-selection-button")) {
          transButt = true;
        }
      });
    });

    let removedItem = null;
    args[0].forEach((argItem) => {
      argItem.removedNodes.forEach((item) => {
        if (item.matches("div.TnITTtw-tooltip-main-wrap")) {
          removedItem = item;
          googleTranslateRemoveCase = true;
        }
      });
    });

    if (googleTranslateCase) {
      const translationBox = document.querySelector("div.TnITTtw-tooltip-main-wrap");

      // const className = translationBox.getAttribute("class")

      translationBox.style.top = "";
      translationBox.style.left = "";
      translationBox.style.bottom = 0;
      translationBox.style.right = 0;
      translationBox.style.zIndex = -1000;

      // Options for the observer (which mutations to observe)
      const config = { attributes: true, childList: false, subtree: false };

      // Callback function to execute when mutations are observed
      // !!! The moment when dict article panel is appeared in dom.
      const callback = (mutationList, observer) => {
        translationBox.style.top = "";
        translationBox.style.left = "";
        translationBox.style.bottom = 0;
        translationBox.style.right = 0;
        translationBox.style.zIndex = -1000;

        // Block if other dictionary is working.
        if (!document.querySelector(".js-special-dictionary").checked) {
          try {
            parseAndSetSelectedDictArticle();
          } catch (error) {
            console.log("parseAndSetSelectedDictArticle error !!!");
          }

          if (document.querySelector("#dictClicker").checked && !currentAddToDictResolveFlag) {
            setCurrentArticleInDictionary();
            currentAddToDictResolve();
            currentAddToDictResolveFlag = true;
          }
        }
      };

      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);

      // Start observing the target node for configured mutations
      observer.observe(translationBox, config);
      observeMap.set(translationBox, observer);

      // Later, you can stop observing
      // observer.disconnect();
    }

    if (googleTranslateRemoveCase && removedItem) {
      const observerItem = observeMap.get(removedItem);

      if (observerItem) {
        observerItem.disconnect();

        console.log("observeMap.get(removedItem).disconnect(); !!!");
      }
    }

    if (transButt) {
      const btt = document.querySelector(".TnITTtw-translate-selection-button")

      btt.click();
    }
  });

  let horizontalControlsShown = true;

  let hugeDictionary = JSON.parse(localStorage.getItem("hugeDictionary") || "false");

  document.querySelector(".js-huge-dictionary").checked = hugeDictionary;

  const applyLayoutContainerHugeDictionary = (checked) => {
    if (checked) {
      document.querySelector(".layout-container").setAttribute("class", "layout-container huge-dictionary");
    } else {
      document.querySelector(".layout-container").setAttribute("class", "layout-container");
    }
  };

  applyLayoutContainerHugeDictionary(hugeDictionary);

  let hideExtraDict = JSON.parse(localStorage.getItem("hideExtraDict") || "false");
  document.querySelector(".js-extra-dict-info").checked = hideExtraDict;

  const applyLayoutContainerHideExtraInfo = (checked) => {
    if (checked) {
      document.querySelector(".layout-container").setAttribute("data-hide-extra-info", "true");
    } else {
      document.querySelector(".layout-container").setAttribute("data-hide-extra-info", "false");
    }
  };

  applyLayoutContainerHideExtraInfo(hideExtraDict);

  let specialDictionaryChecked = JSON.parse(localStorage.getItem("useSpecialDictionary") || "false");
  document.querySelector(".js-special-dictionary").checked = specialDictionaryChecked;

  window.onSpecialDictionaryChange = (event) => {
    localStorage.setItem("useSpecialDictionary", JSON.stringify(event.target.checked));
  };

  window.onHugeDictionaryChange = (event) => {
    const checked = event.target.checked;

    localStorage.setItem("hugeDictionary", JSON.stringify(checked));
    applyLayoutContainerHugeDictionary(checked);
  };

  window.onHideExtraDictInfo = (event) => {
    const checked = event.target.checked;

    localStorage.setItem("hideExtraDict", JSON.stringify(checked));
    applyLayoutContainerHideExtraInfo(checked);
  };


  window.applyDataToDict = () => {
    document.querySelector(".settings-popup").style.display = "flex";

    const text = document.querySelector(".js-data-text-area").value;

    const file = document.querySelector(".js-input-dict-data").files[0];

    if (file) {
      file.text()
        .then((textString) => {
          localStorage.setItem("dict", textString);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error reading Blob as text:", error);
        });

      return;
    }

    if (prompt("Are you sure to overwrite data? And lose old data?")) {
      try {
        JSON.parse(text);

        localStorage.setItem("dict", text);
        window.location.reload();
      } catch (error) {
        alert("wrong json");
      }
    }
  };

  function downloadAsFile(data, fileName) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  window.saveDataToDict = () => {
    const data = localStorage.getItem("dict") || "";
    const date = (new Date());
    const dateString = `${leadingZeros(date.getFullYear(), 4)}-${leadingZeros(date.getMonth() + 1, 2)}-${leadingZeros(date.getDate(), 2)}_${leadingZeros(date.getHours(), 2)}-${leadingZeros(date.getMinutes(), 2)}`;

    downloadAsFile(data, `result-${dateString}.json`);
  };

  window.openSettings = () => {
    document.querySelector(".settings-popup").style.display = "flex";
  };

  window.closeSettingsPopup = () => {
    document.querySelector(".settings-popup").style.display = "none";
  };

  window.switchHorizontalLineDisplay = () => {
    if (horizontalControlsShown) {
      Array.from(document.querySelectorAll(".switch-visible-line")).forEach((item) => {
        item.setAttribute("style", "display:none;");
      });

      document.querySelector(".player-container").setAttribute("class", "player-container player-container_short");
      document.querySelector(".layout-top").setAttribute("class", "layout-top layout-top_large");
      horizontalControlsShown = false;
    } else {
      Array.from(document.querySelectorAll(".switch-visible-line")).forEach((item) => {
        item.setAttribute("style", "display:block;");
      });

      document.querySelector(".player-container").setAttribute("class", "player-container");
      document.querySelector(".layout-top").setAttribute("class", "layout-top");
      horizontalControlsShown = true;
    }
  };

  window.saveEngTextList = () => {
    const dict = JSON.parse(localStorage.getItem("dict") || "[]");

    const text = dict.map((item) => {
      return item.en;
    }).join("\n");

    const date = new Date();
    const dateString = `${leadingZeros(date.getFullYear(), 4)}-${leadingZeros(date.getMonth() + 1, 2)}-${leadingZeros(date.getDate(), 2)}_${leadingZeros(date.getHours(), 2)}-${leadingZeros(date.getMinutes(), 2)}`;

    downloadAsFile(text, `eng-list-${dateString}.json`);
  };

  window.applyTranscriptionsToDict = () => {
    const fileInput = document.querySelector(".js-apply-transcriptions-to-dict");
    const file = fileInput.files[0];

    if (file) {
      file.text()
        .then((textString) => {
          const dict = JSON.parse(localStorage.getItem("dict") || "[]");
          let items = textString.split("\n").map(item => item.trim());

          if (!items[items.length - 1].trim()) {
            items = items.slice(0, -1);
          }

          dict.forEach((item, index, array) => {
            array[index].trascription = items[index];
          });


          localStorage.setItem("dict", JSON.stringify(dict));
        })
        .catch((error) => {
          console.error("Error reading Blob as text:", error);
        });

      return;
    }
  };

  return
})();



// Safe to localstorage.
(() => {
  const downloadWordListBtt = document.querySelector(".download-word-list-btt");

  function downloadAsFile(data, name) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
  }

  downloadWordListBtt.addEventListener("click", () => {
    downloadAsFile(localStorage.getItem("dict") || "", "memory-word-list.json");
  });

})();


