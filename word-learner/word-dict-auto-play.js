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
    dict: engDictNotKnownIndexes2000,
  },{
    name: "Популярные 3000",
    dict: engDictNotKnownIndexes3000,
  },{
    name: "Популярные 5000",
    dict: engDictNotKnownIndexes5000,
  },{
    name: "Популярные 7000",
    dict: engDictNotKnownIndexes7000,
  },{
    name: "Популярные остаток",
    dict: engDictNotKnownIndexesAll,
  }]

  const DEFAULT_TRANSLATION_DELAY = 350
  let TRANSLATION_DELAY = 350
  let currentList = null
  let currentWord = null
  let currentDescription = null
  let currentSelection = null
  let isPlaying = false
  let handleAudioPlay = () => {}

  let firstAudioReady = false
  let secondAudioReady = false

  let audioEng = null
  let audioRu = null

  let isWordPlaying = false
  let switchToNext = false

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
          switchPlaying(false)
        }
      }
    }
  }

  const playPauseButton = document.querySelector(".play-pause-button")
  const wordBox = document.querySelector(".word-box")
  const playlistBox = document.querySelector(".playlist-controls")
  const currentPlaylist = document.querySelector(".current-playlist")
  const currentAudioBox = document.querySelector(".audio-box")

  function switchPlaying(nextIsPlaying) {
    isPlaying = nextIsPlaying !== undefined ? nextIsPlaying : !isPlaying

    playAudio(afterPlayAudio)
  }

  playPauseButton.onclick = () => switchPlaying()

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
        <div class="word-translations">${currentDescription.blocks.map((item) => {
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

        audioEng = new Howl({
          src: [engSrc],
          volume: 1,
          speed: 2,
          onend: function() {
            setTimeout(() => {
              audioRu.play()
            }, TRANSLATION_DELAY)
          }
        });

        audioRu = new Howl({
          src: [ruSrc],
          volume: 1,
          speed: 2,
          onend: function() {
            setTimeout(() => {
              isWordPlaying = false
              callback()
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

    const firstItem = currentList.dict[0]

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
          <option value="DEFAULT">DEFAULT</option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
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
