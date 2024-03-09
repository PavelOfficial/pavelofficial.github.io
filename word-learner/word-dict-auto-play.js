(() => {
  const leadingZeros = (num) => {
    return String('0000000000000' + num).slice(-5)
  }

  // allWordsMap
  const dictMap = {
    8000: enWords8000,
    2700: engWords2700,
  }
  // enWords8000
  // engWords2700
  const playLists = [{
    name: "Популярные 2000",
    dict: engDictAllIndexes2000,
  }, {
    name: "Популярные 3000",
    dict: engDictAllIndexes3000,
  }, {
    name: "Популярные 5000",
    dict: engDictAllIndexes5000,
  }, {
    name: "Популярные 7000",
    dict: engDictAllIndexes7000,
  }, {
    name: "Популярные остаток",
    dict: engDictAllIndexesAll,
  }, {
    name: "Популярные сокращенный 2000",
    dict: engDictNotKnownIndexes2000,
  },{
    name: "Популярные сокращенный 3000",
    dict: engDictNotKnownIndexes3000,
  },{
    name: "Популярные сокращенный 5000",
    dict: engDictNotKnownIndexes5000,
  },{
    name: "Популярные сокращенный 7000",
    dict: engDictNotKnownIndexes7000,
  }, {
    name: "Популярные сокращенный все",
    dict: engDictNotKnownIndexesAll,
  }]

  const DEFAULT_TRANSLATION_DELAY = 350
  let TRANSLATION_DELAY = 350
  let selectDelayValue = localStorage.getItem("selectDelayValue")
  let currentList = null
  let currentWord = null
  let currentDescription = null
  let currentSelection = null
  let indexFrom = localStorage.getItem("indexFrom") ? parseInt(localStorage.getItem("indexFrom"), 10) - 1 : null
  let indexTo = localStorage.getItem("indexTo") ? parseInt(localStorage.getItem("indexTo") - 1, 10) : null
  let isPlaying = false
  let handleAudioPlay = () => {}

  let firstAudioReady = false
  let secondAudioReady = false

  let audioEng = null
  let audioRu = null

  let isWordPlaying = false
  let switchToNext = false
  let translationDisplaied = true
  let skipTranslation = false
  let translationDescriptor = null
  let lastFinishWordPlaying = () => {}

  function getListByName(name) {
    return playLists.find((list) => {
      return list.name === name
    })
  }

  let playAWord = () => {}

  function playAudio(callback) {
    if (isPlaying && !isWordPlaying) {
      playAWord(callback)
    }
  }

  function prepareAudio() {
    if (currentSelection) {
      audioEng.oncanplaythrough = function () {
        firstAudioReady = true

        if (secondAudioReady) {
          handleAudioPlay()
        }
      }

      audioRu.oncanplaythrough = function () {
        secondAudioReady = true

        if (firstAudioReady) {
          handleAudioPlay()
        }
      }
    }
  }


  window.handleSelectDictItem = handleSelectDictItem

  function afterPlayAudio() {
    if (isPlaying) {
      if (currentList && currentSelection) {
        const index = currentList.dict.findIndex((item) => {
          return item[0] === currentSelection[0] && item[1] === currentSelection[1]
        })

        if (indexTo !== null && index + 1 > indexTo) {
          switchToNext = true
          switchPlaying(false, true)

          return
        }

        let nextItem
        if (switchToNext) {
          nextItem = currentList.dict[index + 1]
        } else {
          nextItem = currentList.dict[index]
          switchToNext = true
        }

        if (nextItem) {
          handleSelectDictItem(nextItem[0], nextItem[1], switchToNext)
          playAudio(afterPlayAudio)
        } else {
          switchPlaying(false, true)
        }
      }
    }
  }

  const skipButton = document.querySelector(".skip-button")
  const displayTranslationButton = document.querySelector(".display-translation-button")
  const playPauseButton = document.querySelector(".play-pause-button")
  const wordBox = document.querySelector(".word-box")
  const playlistBox = document.querySelector(".playlist-controls")
  const currentPlaylist = document.querySelector(".current-playlist")
  const currentAudioBox = document.querySelector(".audio-box")

  function switchPlaying(nextIsPlaying, noInit) {
    if (!noInit && indexFrom !== null) {
      const firstItem = currentList.dict[indexFrom]

      if (firstItem) {
        handleSelectDictItem(firstItem[0], firstItem[1], true)
      }
    }

    isPlaying = nextIsPlaying !== undefined ? nextIsPlaying : !isPlaying

    playAudio(afterPlayAudio)
  }

  playPauseButton.onclick = () => switchPlaying()

  displayTranslationButton.onclick = () => {
    translationDisplaied = !translationDisplaied

    wordBox.querySelector(".word-translations").style.visibility = translationDisplaied ? "visible" : "hidden"
  }

  skipButton.onclick = () => {
    skipTranslation = true

    if (translationDescriptor !== null) {
      clearTimeout(translationDescriptor)
      lastFinishWordPlaying()
    }
  }

  function handleSelectDictItem(packName, index, nextSwitchToNext) {
    currentSelection = [packName, index]


    switchToNext = nextSwitchToNext !== undefined ? nextSwitchToNext : false
    const dict = dictMap[packName]

    if (dict) {
      const word = dict[index]
      const fullDescription = allWordsMap[word]

      currentWord = word
      currentDescription = fullDescription
    }

    const listItemIndex = currentList.dict.findIndex((item) => {
      return item[0] === currentSelection[0] && item[1] === currentSelection[1]
    })

    localStorage.setItem("current-selection-index", String(listItemIndex))

    const li = Array.from(document.querySelectorAll(".current-playlist ul li"))[listItemIndex]
    const currentSelectedLI = document.querySelector(".playlist-item-selected")

    if (currentSelectedLI) {
      currentSelectedLI.setAttribute("class", "")
    }

    if (li) {
      li.setAttribute("class", "playlist-item-selected")

      const liBoundingRect = li.getBoundingClientRect()
      const currentPlaylistBoundingRect = currentPlaylist.getBoundingClientRect()
      const topDelta = liBoundingRect.top - currentPlaylistBoundingRect.top
      const targetYOffset = (currentPlaylistBoundingRect.height / 2) - (liBoundingRect.height / 2)

      currentPlaylist.scrollTop = currentPlaylist.scrollTop + topDelta - targetYOffset
    }

    renderAll()
    playAudio(afterPlayAudio)
  }

  function renderСurrentPlaylist() {
    const content = currentList ? `
      <ul>
        ${currentList.dict.map((item, arrayIndex) => {
          const pack = item[0]
          const index = item[1]
          const dict = dictMap[pack]
          let word = ""
  
          word = dict[index]
      
          return `<li onclick="handleSelectDictItem('${pack}', ${index})">${leadingZeros(arrayIndex + 1)}. ${word}</li>`
        }).join('')}
      </ul>
    ` : ''

    currentPlaylist.innerHTML = content
  }

  function renderCurrentDescription() {
    let content
    if (currentDescription) {
      content = `
        <div class="word-value">${currentDescription.en}</div>
        <div class="word-transcription">${currentDescription.transcription}</div>
        <div class="word-translations" style="${translationDisplaied ? 'visibility: visible;' : 'visibility: hidden;'}">${currentDescription.blocks.map((item) => {
          return `<div>${item.translations.map((itemWord) => itemWord.split(",").join(", ")).join("; ")}</div>`
        })}</div>
      `
    } else {
      content = ''
    }

    wordBox.innerHTML = content
  }

  function renderAudio() {
    if (currentSelection && currentSelection[0] !== null) {
      const engSrc = `./${currentSelection[0]}/eng-sounds/${leadingZeros(currentSelection[1])}.mp3`
      const ruSrc = `./${currentSelection[0]}/ru-sounds/${leadingZeros(currentSelection[1])}.mp3`

      playAWord = (callback) => {
        isWordPlaying = true

        const finish = () => {
          skipTranslation = false
          isWordPlaying = false
          callback()
        }

        lastFinishWordPlaying = finish

        audioEng = new Howl({
          src: [engSrc],
          volume: 1,
          speed: 2,
          onend: function() {
            if (skipTranslation) {
              finish()
              return
            }

            translationDescriptor = setTimeout(() => {
              translationDescriptor = null
              if (skipTranslation) {
                finish()
              } else {
                audioRu.play()
              }
            }, TRANSLATION_DELAY)
          }
        });

        audioRu = new Howl({
          src: [ruSrc],
          volume: 1,
          speed: 2,
          onend: function() {
            setTimeout(() => {
              finish()
            }, 750)
          }
        });

        audioEng.play()
      }
    }
  }

  function renderAll() {
    renderCurrentDescription()
    renderAudio()
  }

  window.handleSelectDict = (listName) => {
    isPlaying = false
    currentSelection = null

    currentList = getListByName(listName)
    localStorage.setItem("current-list", currentList.name)

    renderAll()
    renderСurrentPlaylist()

    const firstItem = currentList.dict[indexFrom ?? 0]

    if (firstItem) {
      handleSelectDictItem(firstItem[0], firstItem[1], true)
    }
  }

  function renderPlaylistBox() {
    window.handleSelectDictChange = (event) => {
      const value = event.target.value

      if (value) {
        handleSelectDict(value)
      }
    }

    window.handleSelectDelayChange = (event) => {
      const value = event.target.value

      if (value === "DEFAULT DELAY") {
        TRANSLATION_DELAY = DEFAULT_TRANSLATION_DELAY
      } else {
        TRANSLATION_DELAY = parseFloat(value) * 1000
      }

      localStorage.setItem("selectDelayValue", value)
    }

    if (selectDelayValue !== undefined) {
      handleSelectDelayChange({ target: { value: selectDelayValue } })
    }

    window.handleFromIndexBlur = (event) => {
      const value = event.target.value

      if (!value) {
        indexFrom = null
        localStorage.removeItem("indexFrom")
      } else {
        indexFrom = parseInt(value, 10) - 1
        localStorage.setItem("indexFrom", String(value))
      }
    }

    window.handleToIndexBlur = (event) => {
      const value = event.target.value

      if (!value) {
        indexTo = null
        localStorage.removeItem("indexTo")
      } else {
        indexTo = parseInt(value, 10) - 1
        localStorage.setItem("indexTo", String(value))
      }
    }

    const localStorageCurrentSelection = localStorage.getItem("current-list")

    const content = `
      <div>
        <select onchange="handleSelectDictChange(event)">
          <option value="">NONE</option>
          ${playLists.map((list) => {
            const selected = list.name === localStorageCurrentSelection
  
            return `<option ${selected ? 'selected="selected"' : ''} value="${list.name}">${list.name}</option>`
          }).join('')}  
        </select>
      </div>
      <div>
        <select onchange="handleSelectDelayChange(event)">
          <option ${selectDelayValue === "DEFAULT" ? "selected=\"selected\"" : ""} value="DEFAULT">DEFAULT</option>
          <option ${selectDelayValue === "0.5" ? "selected=\"selected\"" : ""} value="0.5">0.5</option>
          <option ${selectDelayValue === "1" ? "selected=\"selected\"" : ""} value="1">1</option>
          <option ${selectDelayValue === "2" ? "selected=\"selected\"" : ""} value="2">2</option>
          <option ${selectDelayValue === "3" ? "selected=\"selected\"" : ""} value="3">3</option>
          <option ${selectDelayValue === "4" ? "selected=\"selected\"" : ""} value="4">4</option>
          <option ${selectDelayValue === "5" ? "selected=\"selected\"" : ""} value="5">5</option>
        </select>
      </div>
      <div>
        <div>
          <label>
            Индекс от:
            <input style="width: 50px" type="number" value="${indexFrom !== null ? indexFrom + 1 : ""}" onblur="handleFromIndexBlur(event)" />
          </label>
        </div>
        <div>
          <label>
            Индекс до:
            <input style="width: 50px" type="number" value="${indexTo !== null ? indexTo + 1 : ""}" onblur="handleToIndexBlur(event)" />
          </label>
        </div>
      </div>
    `

    playlistBox.innerHTML = content

    if (localStorageCurrentSelection) {
      handleSelectDict(localStorageCurrentSelection)
    }
  }

  // Strict before render!
  const localStorageCurrentSelectionIndex = localStorage.getItem("current-selection-index")

  renderAll()
  renderPlaylistBox()

  if (localStorageCurrentSelectionIndex !== undefined) {
    const item = currentList.dict[parseInt(localStorageCurrentSelectionIndex, 10)]

    if (item) {
      handleSelectDictItem(item[0], item[1], true)
    }
  }
})()
