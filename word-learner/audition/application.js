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

  const leadingZeros = (value, count) => {
    return `0000000000000${value}`.slice(-count)
  }

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

  const selectThemeItem = (item, index) => {
    const prevSelected = document.querySelector(".themes-li.selected")

    if (prevSelected) {
      prevSelected.setAttribute("class", "themes-li")
    }

    item.setAttribute("class", "themes-li selected")

    const auditionItem = auditions[index]

    if (currentAudio) {
      currentAudio.stop()
    }

    currentAudio = new Howl({
      src: [`/word-learner${auditionItem.audio}`],
      volume: soundValue,
      onload: () => {
        const duration = currentAudio.duration()
        const durationSec = parseInt(duration % 60, 10)
        const durationMin = parseInt(duration / 60, 10)

        document.querySelector(".audio-player-progress__total-seek").innerHTML = `${leadingZeros(durationMin, 2)}:${leadingZeros(durationSec, 2)}`
      },
    });

    const enList = splitText(auditionItem.en)
    const ruList = splitText(auditionItem.ru)

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
    }).join("")

    document.querySelector(".text-container-inner .text-wrap").innerHTML = html

    console.log(enList)
    console.log(ruList)
  }

  const applyProgressToUI = (value) => {
    const progressPercent = `${(value) * 100}%`
    const duration = currentAudio.duration()
    const seek = duration * value
    const seekSec = parseInt(seek % 60, 10)
    const seekMin = parseInt(seek / 60, 10)

    document.querySelector(".audio-player-progress__direct-handle").style.left = progressPercent
    document.querySelector(".audio-player-progress__slow-handle").style.left = progressPercent
    document.querySelector(".audio-player-progress__bar-progress").style.width = progressPercent

    document.querySelector(".audio-player-progress__current-seek").innerHTML = `${leadingZeros(seekMin, 2)}:${leadingZeros(seekSec, 2)}`
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

  window.playAudio = () => {
    if (currentAudio && currentAudio.state() === "loaded") {
      currentAudio.play()
      watchProgress()

      document.querySelector(".btn-pause").style.display = ""
      document.querySelector(".btn-play").style.display = "none"
    }
  }

  window.pauseAudio = () => {
    if (currentAudio && currentAudio.state() === "loaded") {
      currentAudio.pause()

      finishProgress()

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
        })

        scrollArea.scrollTo({ top: textWrap.getBoundingClientRect().height })
      } else {
        allTexts.forEach((text) => {
          text.style.visibility = "hidden"
        })

        scrollArea.scrollTo({ top: 0 })
      }
    }
  }

  const showSentences = (delta) => {
    const allTexts = Array.from(document.querySelectorAll(".text-container .text-container_item"))

    if (allTexts.length) {
      let firstTextIndex = allTexts.findIndex((item) => {
        return item.style.visibility === "hidden"
      })

      if (firstTextIndex === -1) {
        firstTextIndex = allTexts.length
      }

      const secondIndex = firstTextIndex + delta

      const textSlice = allTexts.slice(secondIndex > firstTextIndex ? firstTextIndex : secondIndex, secondIndex > firstTextIndex ? secondIndex : firstTextIndex)

      textSlice.forEach((item) => {
        if (delta < 0) {
          item.style.visibility = "hidden"
        } else {
          item.style.visibility = ""
        }
      })

      let firstHiddenTextIndex = allTexts.findIndex((item) => {
        return item.style.visibility === "hidden"
      })

      const lastVisibleTextIndex = firstHiddenTextIndex - 1

      const scrollArea = document.querySelector(".text-container-inner")
      const textWrap = document.querySelector(".text-wrap")

      if (allTexts[lastVisibleTextIndex]) {
        const { top: itemTop, height: itemHeight  } = allTexts[lastVisibleTextIndex].getBoundingClientRect()
        const { top: scrollAreaTop, height: scrollAreaHeight  }  = scrollArea.getBoundingClientRect()
        const scrollAreaScrollTop = scrollArea.scrollTop
        const MARGIN_BOTTOM = 50
        const resultTop = scrollAreaScrollTop + (itemTop - scrollAreaTop) - scrollAreaHeight + itemHeight + MARGIN_BOTTOM

        scrollArea.scrollTo({ top: resultTop })
      } else {
        if (lastVisibleTextIndex === -2) {
          scrollArea.scrollTo({ top: textWrap.getBoundingClientRect().height  })
        } else {
          scrollArea.scrollTo({ top: 0 })
        }
      }

      allTexts.forEach((text) => {
        text.setAttribute("class", text.getAttribute("class").replace(/\slast\-shown/, ""))
      })

      const prevLastVisibleItem = allTexts[firstTextIndex - 1]
      if (prevLastVisibleItem) {
        const prevLastVisibleItemClass = prevLastVisibleItem.getAttribute("class")

        prevLastVisibleItem.setAttribute("class", `${prevLastVisibleItemClass} last-shown`)
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
          closestWord.setAttribute("class", "source-word source-word-selected")

          const childIndex = getChildIndex(closestWord)
          lastSelectedWords.add(childIndex)
        }
      }

      if (event.target.closest(".js-create-comment")) {
        createComment()

        cleanCommentForm()
        document.querySelector('.comment-popup').style.display = "none"

        // lastSelectedWords
      }

      console.log("lastSelectedWords: ", lastSelectedWords)
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

})()
