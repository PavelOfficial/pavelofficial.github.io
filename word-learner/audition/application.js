(() => {
  let currentCategory = null
  let soundValue = 1
  let auditions = null
  let currentAudio = null
  let isDragging = false

  const leadingZeros = (value, count) => {
    return `0000000000000${value}`.slice(-count)
  }

  const fetchAuditions = async () => {
    const allAuditionUrls = categories.reduce((result, item) => {
      result.push(...item.auditions)

      return result
    }, [])

    const auditionPromises = allAuditionUrls.map((url) => {
      return fetch(url)
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

  const splitText = (text) => {
    const doublesReg = (new RegExp("", "gi"))
    const quotesReg = (new RegExp("”", "gi"))
    const word2 = text.trim().split(/\n+/).join('\n')
      .split(/\.\'|\”[\s\n]?/gi).join('.\'\n\n')
      .split(/\?\'|\”[\s\n]?/gi).join('?\'\n\n')
      .split(/\!\'|\”[\s\n]?/gi).join('!\'\n\n')
      .split(/\.(?:[^\'\S]|\n)/gi).join('.\n\n')
      .split(/\?(?:[^\'\S]|\n)/gi).join('?\n\n')
      .split(/\!(?:[^\'\S]|\n)/gi).join('!\n\n')
      .split(/\n\n\n\n/).join('\n\n')
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
      src: [auditionItem.audio],
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
            ${ruItem}
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

})()
