(() => {
  const cleanDuplications = (words) => {
    const nextWords = []

    words.forEach((word) => {
      const foundItem = nextWords.find((item) => {
        return item[0] === word[0] && item[1] === word[1]
      })

      if (!foundItem) {
        nextWords.push(word)
      }
    })

    return nextWords
  }

  const leadingZeros = (num) => {
    return String('0000000000000' + num).slice(-5)
  }

  const allNotKnownIndexesAll = [
    ...engDictNotKnownIndexes2000,
    ...engDictNotKnownIndexes3000,
    ...engDictNotKnownIndexes5000,
    ...engDictNotKnownIndexes7000,
    ...engDictNotKnownIndexesAll,
  ].map(([playListIndex, wordIndex]) => {
    return String(playListIndex) + '-' + String(wordIndex)
  })

  const allNotKnownIndexesAllSet = new Set(allNotKnownIndexesAll)

  const excludePopular = (words) => {
    const result = words.filter((word) => {
      return !allNotKnownIndexesAllSet.has(String(word[0]) + '-' + String(word[1]))
    })

    return result
  }

  const allKnownIndexesAll = [
    ...engDictAllLearnedSimple5,
    ...engDictAllLearnedSimple6,
  ].map(([playListIndex, wordIndex]) => {
    return String(playListIndex) + '-' + String(wordIndex)
  })

  const allKnownIndexesAllSet = new Set(allKnownIndexesAll)

  const excludeKnownIndexesAll = (words) => {
    const result = words.filter((word) => {
      return !allKnownIndexesAllSet.has(String(word[0]) + '-' + String(word[1]))
    })

    return result
  }

  const known2_9000IndexesAll = [
    ...known2_9000,
  ].map(([playListIndex, wordIndex]) => {
    return String(playListIndex) + '-' + String(wordIndex)
  })

  const known2_9000Set = new Set(known2_9000IndexesAll)
  const excludeKnown2 = (words) => {
    const result = words.filter((word) => {
      return !known2_9000Set.has(String(word[0]) + '-' + String(word[1]))
    })

    return result
  }

  const _9000SetIndexesAll = [
    ...engDictNotKnownIndexes9000,
  ].map(([playListIndex, wordIndex]) => {
    return String(playListIndex) + '-' + String(wordIndex)
  })

  const _9000Set = new Set(_9000SetIndexesAll)
  const exclude9000List = (words) => {
    const result = words.filter((word) => {
      return !_9000Set.has(String(word[0]) + '-' + String(word[1]))
    })

    return result
  }

  // allWordsMap
  const dictMap = {
    8000: enWords8000,
    2700: engWords2700,
    170: engWords170,
    900: engWords900,
    12000: enWords12000Delta,
  }

  const shortedListsAll = [
    ...engDictNotKnownIndexes2000,
    ...engDictNotKnownIndexes3000,
    ...engDictNotKnownIndexes5000,
    ...engDictNotKnownIndexes7000,
  ].map(([playListIndex, wordIndex]) => {
    const word = dictMap[playListIndex][wordIndex]
    return word
  })

  const shortedListsAllSet = new Set(shortedListsAll)

  const excludeShortedLists = (words) => {
    const result = words.filter((word) => {
      const engWord = dictMap[word[0]][word[1]]

      return !shortedListsAllSet.has(engWord)
    })

    return result
  }

  const playlistSeparator = {
    name: "----------------------",
    dict: [],
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
  }, playlistSeparator, {
    name: "Популярные сокращенный 2000",
    dict: engDictNotKnownIndexes2000,
  }, {
    name: "Популярные сокращенный 3000",
    dict: engDictNotKnownIndexes3000,
  }, {
    name: "Популярные сокращенный 5000",
    dict: engDictNotKnownIndexes5000,
  }, {
    name: "Популярные сокращенный 7000",
    dict: excludeKnown2(engDictNotKnownIndexes7000),
  }, {
    name: "Популярные сокращенный все после 7000",
    dict: excludeKnownIndexesAll(excludeShortedLists(excludeKnown2(engDictNotKnownIndexesAll))),
  }, {
    name: "Популярные сокращенный все после 7000 (сырой)",
    dict: excludeKnown2(engDictNotKnownIndexesAll),
  }, {
    name: "Популярные сокращенный все 9000",
    dict: engDictNotKnownIndexes9000,
  }, {
    name: "Популярные сокращенный все 12000",
    dict: exclude9000List(engDictNotKnownIndexes12000),
  }, playlistSeparator, {
    name: "Популярные простые 2000",
    dict: excludePopular(engDictAllIndexes2000),
  }, {
    name: "Популярные простые 3000",
    dict: excludePopular(engDictAllIndexes3000),
  }, {
    name: "Популярные простые 5000",
    dict: excludePopular(engDictAllIndexes5000),
  }, {
    name: "Популярные простые 7000",
    dict: excludePopular(engDictAllIndexes7000),
  }, {
    name: "Популярные простые остаток",
    dict: excludePopular(engDictAllIndexesAll),
  }, playlistSeparator, {
    name: "Фразовые глаголы",
    dict: engDictAllIndexes170,
  }, {
    name: "Словосочетания",
    dict: engDictAllIndexes900,
  }, playlistSeparator, {
    name: "Выборка из 2000 сокращенных тяжелых",
    dict: cleanDuplications(engDict2000unlearned),
  }, {
    name: "Выборка из 2000 сокращенных тяжелых 2",
    dict: cleanDuplications(engDict2000unlearned2),
  }, {
    name: "Выборка из 2000 сокращенных тяжелых 3 (круг 2)",
    dict: cleanDuplications(engDict2000unlearned3),
  }, {
    name: "Выборка из 2000 сокращенных тяжелых 4 (круг 2, повтор 2)",
    dict: cleanDuplications(engDict2000unlearned4),
  }, {
    name: "Самые сложные из 2000",
    dict: cleanDuplications(mostDifficult),
  }, {
    name: "Выборка из 5000 сокращенных тяжелых",
    dict: cleanDuplications(engDict5000unlearned),
  }, {
    name: "Выборка из 5000 сокращенных тяжелых 2",
    dict: cleanDuplications(engDict5000unlearned2),
  }, {
    name: "Выборка из cловосочетания 1",
    dict: cleanDuplications(engCollocationsUnlearned1),
  }, {
    name: "Выборка из 7000 сокращенных тяжелых 1",
    dict: cleanDuplications(engDict7000unlearned1),
  }, {
    name: "Выборка из 7000 сокращенных тяжелых 2",
    dict: cleanDuplications(engDict7000unlearned2),
  }, {
    name: "Выборка из 7000 сокращенных тяжелых 3",
    dict: cleanDuplications(engDict7000unlearned3),
  }, {
    name: "Выборка из 2000 3000 5000 сокращенных тяжелых 1",
    dict: cleanDuplications(engDict2000_3000_5000_unlearned1),
  }, {
    name: "Выборка из 5000 сокращенных c 130 тяжелых 1",
    dict: cleanDuplications(engDict_5000_from_130_unlearned1),
  }, {
    name: "Словосочетания невыученные (обе пачки)",
    dict: cleanDuplications(engCollocationsUnlearned2),
  }, {
    name: "Выборка из 7000 сокращенных тяжелых 4",
    dict: cleanDuplications(engDict7000unlearned4),
  }, {
    name: "Выборка из после 7000 все сокращенных тяжелых 1",
    dict: cleanDuplications(engDictAfter7000unlearned4),
  }, {
    name: "Выборка из после 7000 все сокращенных тяжелых 2",
    dict: cleanDuplications(engDictAfter7000unlearned5),
  }, playlistSeparator, {
    name: "Повторение 8000/пачка(1650) 1",
    dict: cleanDuplications(engDictRecollection8000_part1650_1),
  }, {
    name: "Повторение 8000/пачка(1650) 2",
    dict: cleanDuplications(engDictRecollection8000_part1650_2),
  }]

  let isPrevMassWord = false
  let isPrevWord = false
  let isNextWord = false
  let isNextMassWord = false

  const DEFAULT_TRANSLATION_DELAY = 350
  const DEFAULT_PLAYING_TIME = null
  const DEFAULT_SELECT_DELAY_AFTER_VALUE = 0
  const DEFAULT_MASS_JUMP_COUNT = 5
  let playTime = null
  let delayAfter = null
  let TRANSLATION_DELAY = 350
  let selectDelayValue = localStorage.getItem("selectDelayValue")
  let selectPlayValue = localStorage.getItem("selectPlayValue")
  let selectDelayAfterValue = localStorage.getItem("selectDelayAfterValue")
  let currentPayingAudio = null
  let currentList = null
  let currentWord = null
  let currentDescription = null
  let currentSelection = null
  let handleFirstAudioEnd = null
  let indexFrom = localStorage.getItem("indexFrom") ? parseInt(localStorage.getItem("indexFrom"), 10) - 1 : null
  let indexTo = localStorage.getItem("indexTo") ? parseInt(localStorage.getItem("indexTo") - 1, 10) : null
  let isPlaying = false
  let soundCollection = null

  let soundValueStoraged
  if (localStorage.getItem("sound-value")) {
    soundValueStoraged = parseFloat(localStorage.getItem("sound-value"))
  }

  let soundValue = soundValueStoraged || 1

  let handleAudioPlay = () => {
  }

  let storedWordIndexes = []

  try {
    storedWordIndexes = JSON.parse(localStorage.getItem("checked-words-tuples")) ?? []
  } catch (error) {
  }

  let checkedWords = new Map(storedWordIndexes.map((item) => {
    return [`${item[0]}-${item[1]}`, item]
  }))

  let firstAudioReady = false
  let secondAudioReady = false

  let audioEng = null
  let audioRu = null

  let isWordPlaying = false
  let switchToNext = false
  let translationDisplaied = true
  let skipTranslation = false
  let translationDescriptor = null
  let loopPlayback = true
  let lastFinishWordPlaying = () => {
  }

  function getListByName(name) {
    return playLists.find((list) => {
      return list.name === name
    })
  }

  let playAWord = () => {
  }

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


  const saveWordCheckboxes = () => {
    let storedWordIndexes = []

    try {
      storedWordIndexes = JSON.parse(localStorage.getItem("checked-words-tuples")) ?? []
    } catch (error) {
    }

    const storedWordIndexesMap = new Map(storedWordIndexes.map((item) => {
      return [`${item[0]}-${item[1]}`, item]
    }))

    currentList.dict.forEach((item) => {
      storedWordIndexesMap.delete(`${item[0]}-${item[1]}`)
    })

    localStorage.setItem("checked-words-tuples", JSON.stringify([
      ...Array.from(checkedWords).map(item => item[1]).filter(item => item),
      ...Array.from(storedWordIndexesMap).map((item) => item[1]).filter(item => item),
    ]))
  }

  window.handleSelectDictItem = handleSelectDictItem

  function handleChangeWordCheckbox(event, index, pack) {
    const checked = !!event.target.checked

    // if it is current then change current checkbox
    if (String(pack) === String(currentSelection[0]) && String(index) === String(currentSelection[1])) {
      currentCheckbox.checked = checked
    }

    if (checked) {
      checkedWords.set(`${pack}-${index}`, [pack, index])
    } else {
      checkedWords.delete(`${pack}-${index}`)
    }

    saveWordCheckboxes()
    updateCurrentAllCheckbox()
  }

  window.handleChangeWordCheckbox = handleChangeWordCheckbox

  let backwardTranslationStored
  try {
    backwardTranslationStored = JSON.parse(localStorage.getItem("backwardTranslation"))
  } catch (error) {
  }

  let autoChangeTranslationDirectionStored
  try {
    autoChangeTranslationDirectionStored = JSON.parse(localStorage.getItem("autoChangeTranslationDirection"))
  } catch (error) {
  }

  let backwardTranslationDirection = backwardTranslationStored || false
  document.querySelector('.backward-direction').checked = backwardTranslationDirection

  let autoChangeTranslationDirection = autoChangeTranslationDirectionStored || false
  document.querySelector('.auto-play-direction').checked = autoChangeTranslationDirection

  function handleChangeTranslationDirection(event) {
    const checked = !!event.target.checked

    backwardTranslationDirection = checked

    localStorage.setItem("backwardTranslation", JSON.stringify(backwardTranslationDirection))
  }

  window.handleChangeTranslationDirection = handleChangeTranslationDirection

  function handleChangeAutoTranslationDirection(event) {
    const checked = !!event.target.checked

    autoChangeTranslationDirection = checked

    localStorage.setItem("autoChangeTranslationDirection", JSON.stringify(autoChangeTranslationDirection))
  }

  window.handleChangeAutoTranslationDirection = handleChangeAutoTranslationDirection

  const handleCheckAllWords = (event) => {
    const target = event.target
    const allChecked = !!target.checked

    if (allChecked) {
      currentList.dict.forEach((item) => {
        checkedWords.set(`${item[0]}-${item[1]}`, item)

        document.querySelector(`#word-checkbox-${item[0]}-${item[1]}`).checked = 'checked'
      })
    } else {
      currentList.dict.forEach((item) => {
        checkedWords.delete(`${item[0]}-${item[1]}`)

        document.querySelector(`#word-checkbox-${item[0]}-${item[1]}`).checked = ''
      })
    }

    saveWordCheckboxes()
  }

  window.handleCheckAllWords = handleCheckAllWords

  const handleSelectSoundVolume = (event) => {
    const value = parseFloat(event.target.value)

    soundValue = value

    localStorage.setItem("sound-value", String(soundValue))
  }

  window.handleSelectSoundVolume = handleSelectSoundVolume

  function afterPlayAudio(startFromCurrent) {
    if (isPlaying) {
      if (currentList && currentSelection) {
        const index = currentList.dict.findIndex((item) => {
          return item[0] === currentSelection[0] && item[1] === currentSelection[1]
        })

        let nextItem

        const finish = (nextItem, switchToNext) => {
          if (nextItem) {
            handleSelectDictItem(nextItem[0], nextItem[1], switchToNext)
            playAudio(afterPlayAudio)
          } else {
            switchPlaying(false, true)
          }
        }

        const tryToStop = (nextIndex) => {
          if ((indexTo !== null && nextIndex > indexTo) || (indexFrom !== null && nextIndex < indexFrom)) {
            if (loopPlayback) {
              const loopNextIndex = findNextIndex(indexFrom)

              nextItem = currentList.dict[loopNextIndex]
              switchToNext = true

              if (autoChangeTranslationDirection) {
                document.querySelector(".backward-direction").checked = !document.querySelector(".backward-direction").checked
                handleChangeTranslationDirection({
                  target: document.querySelector(".backward-direction")
                })
              }

              finish(nextItem, switchToNext)

              return true
            }

            switchToNext = true
            switchPlaying(false, true)

            return true
          }
        }

        const findNextIndex = (startSearchIndex) => {
          let nextIndex = startSearchIndex
          let direction = "forward"
          let counter = 0

          if (isPrevMassWord) {
            nextIndex -= 2
            direction = "backward"
          }

          if (isPrevWord) {
            nextIndex -= 2
            direction = "backward"
          }

          if (isNextWord) {
            direction = "forward"
          }

          if (isNextMassWord) {
            direction = "forward"
          }


          while (nextIndex < currentList.dict.length && nextIndex >= 0) {
            const item = currentList.dict[nextIndex]
            const nonChecked = !checkedWords.has(`${item[0]}-${item[1]}`)

            if (isPrevWord) {
              if (nonChecked) {
                break
              }

              nextIndex--

              continue
            }

            if (isPrevMassWord) {
              if (nonChecked) {
                counter++
              }

              if (counter === DEFAULT_MASS_JUMP_COUNT) {
                break
              }

              nextIndex--

              continue
            }

            if (isNextMassWord) {
              if (nonChecked) {
                counter++
              }

              if (counter === DEFAULT_MASS_JUMP_COUNT) {
                break
              }

              nextIndex++

              continue
            }

            if (nonChecked) {
              break
            }

            nextIndex++
          }

          if (nextIndex === currentList.dict.length) {
            return null
          }

          return nextIndex
        }


        if (switchToNext && !startFromCurrent) {
          const nextIndex = findNextIndex(index + 1)

          if (tryToStop(nextIndex)) {
            return
          }

          nextItem = currentList.dict[nextIndex]
        } else {
          const nextIndex = findNextIndex(index)

          if (tryToStop(nextIndex)) {
            return
          }

          nextItem = currentList.dict[nextIndex]
          switchToNext = true
        }

        finish(nextItem, switchToNext)
      }
    }
  }

  const skipButton = document.querySelector(".skip-button")
  const skipPauseButton = document.querySelector(".skip-pause-button")

  const prevMassWordButton = document.querySelector(".prev-mass-word-button")
  const prevWordButton = document.querySelector(".prev-word-button")
  const nextWordButton = document.querySelector(".next-word-button")
  const nextMassWordButton = document.querySelector(".next-mass-word-button")
  const currentCheckbox = document.querySelector(".current-checkbox")

  const displayTranslationButton = document.querySelector(".display-translation-button")
  const displayWordButton = document.querySelector(".display-word-button")
  const transcriptionButton = document.querySelector(".display-transcription-button")
  const playPauseButton = document.querySelector(".play-pause-button")
  const playListButton = document.querySelector(".play-list-button")
  const wordBox = document.querySelector(".word-box")
  const playlistBox = document.querySelector(".playlist-controls")
  const currentPlaylist = document.querySelector(".current-playlist")
  const currentAudioBox = document.querySelector(".audio-box")
  const loaderLayer = document.querySelector(".loader-layer")
  const wordPlayingButton = document.querySelector(".word-playing-button")
  const translationPlayingButton = document.querySelector(".translation-playing-button")

  const playIcon = document.querySelector(".play-icon")
  const pauseIcon = document.querySelector(".pause-icon")

  playIcon.style.display = "none"

  const interrupt = () => {
    skipTranslation = true
    let interrupted = false

    if (currentPayingAudio !== null && currentPayingAudio.playing()) {
      currentPayingAudio.stop()
      interrupted = true
    }

    if (translationDescriptor !== null) {
      clearTimeout(translationDescriptor)
      interrupted = true
    }

    return interrupted
  }

  const goToWord = () => {
    const interrupted = interrupt()

    if (interrupted) {
      lastFinishWordPlaying()
    }
  }

  function switchPlaying(nextIsPlaying, noInit) {
    if (!noInit && indexFrom !== null) {
      const firstItem = currentList.dict[indexFrom]

      if (firstItem) {
        handleSelectDictItem(firstItem[0], firstItem[1], true)
      }
    }

    isPlaying = nextIsPlaying !== undefined ? nextIsPlaying : !isPlaying

    if (isPlaying) {
      playIcon.style.display = ""
      pauseIcon.style.display = "none"
      playPauseButton.innerHTML = "pause"
    } else {
      playIcon.style.display = "none"
      pauseIcon.style.display = ""
      playPauseButton.innerHTML = "play"

      goToWord()
    }

    playAudio(afterPlayAudio)
  }

  playPauseButton.onclick = () => switchPlaying(undefined, true)

  playListButton.onclick = () => switchPlaying()

  displayTranslationButton.onchange = (event) => {
    translationDisplaied = !!event.target.checked

    wordBox.querySelector(".word-translations").style.visibility = translationDisplaied ? "visible" : "hidden"
  }

  let wordDisplayed = true
  displayWordButton.onchange = (event) => {
    wordDisplayed = !!event.target.checked

    wordBox.querySelector(".word-value").style.visibility = wordDisplayed ? "visible" : "hidden"
    wordBox.querySelector(".word-transcription").style.visibility = wordDisplayed && transcriptionDisplayed ? "visible" : "hidden"
  }

  let transcriptionDisplayed = true
  transcriptionButton.onchange = (event) => {
    transcriptionDisplayed = !!event.target.checked

    wordBox.querySelector(".word-transcription").style.visibility = transcriptionDisplayed ? "visible" : "hidden"
  }

  let wordPlaying = true
  wordPlayingButton.onchange = (event) => {
    wordPlaying = !!event.target.checked
  }

  let translationPlaying = true
  translationPlayingButton.onchange = (event) => {
    translationPlaying = !!event.target.checked
  }

  const skipPause = () => {
    if (translationDescriptor !== null) {
      clearTimeout(translationDescriptor)
    }

    if (handleFirstAudioEnd) {
      handleFirstAudioEnd()
    } else {
      goToWord()
    }
  }

  skipButton.onclick = () => {
    goToWord()
  }

  skipPauseButton.onclick = () => {
    console.log("skipPauseButton !!!")

    skipPause()
  }

  const switchSelection = (delta) => {
    const index = currentList.dict.findIndex((item) => {
      return item[0] === currentSelection[0] && item[1] === currentSelection[1]
    })

    const nextIndex = index + delta
    const nextItem = currentList.dict[nextIndex]

    if (nextItem) {
      handleSelectDictItem(nextItem[0], nextItem[1], switchToNext)
    }
  }

  prevMassWordButton.onclick = () => {
    if (isPlaying) {
      isPrevMassWord = true
      goToWord()
      isPrevMassWord = false
    } else {
      switchSelection(-DEFAULT_MASS_JUMP_COUNT)
    }
  }

  prevWordButton.onclick = () => {
    if (isPlaying) {
      isPrevWord = true
      goToWord()
      isPrevWord = false
    } else {
      switchSelection(-1)
    }
  }

  nextWordButton.onclick = () => {
    if (isPlaying) {
      isNextWord = true
      goToWord()
      isNextWord = false
    } else {
      switchSelection(1)
    }
  }

  nextMassWordButton.onclick = () => {
    if (isPlaying) {
      isNextMassWord = true
      goToWord()
      isNextMassWord = false
    } else {
      switchSelection(DEFAULT_MASS_JUMP_COUNT)
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
    const currentSelectedLIChecked = li.querySelector("input").checked

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

    currentCheckbox.checked = currentSelectedLIChecked

    renderAll()

    playAudio(afterPlayAudio)
  }

  currentCheckbox.onclick = () => {
    const index = currentList.dict.findIndex((item) => {
      return item[0] === currentSelection[0] && item[1] === currentSelection[1]
    })

    const li = Array.from(document.querySelectorAll(".current-playlist ul li"))[index]

    li.querySelector("input").click()
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

      return `<li><div><input id="word-checkbox-${pack}-${index}" ${checkedWords.has(`${pack}-${index}`) ? 'checked="checked"' : ''} type="checkbox" onchange="handleChangeWordCheckbox(event, ${index}, '${pack}')" /></div><div class="list-item-caption" onclick="handleSelectDictItem('${pack}', ${index})"><div class="list-item-caption__index">${leadingZeros(arrayIndex + 1)}</div>${word}</div></li>`
    }).join('')}
      </ul>
    ` : ''

    currentPlaylist.innerHTML = content
  }

  function renderCurrentDescription() {
    let content
    if (currentDescription) {
      content = `
        <div class="word-box-inner">
          <div class="word-value" style="${wordDisplayed ? 'visibility: visible;' : 'visibility: hidden;'}">${currentDescription.en}</div>
          <div class="word-transcription" style="${wordDisplayed && transcriptionDisplayed ? 'visibility: visible;' : 'visibility: hidden;'}">${currentDescription.transcription}</div>
          <div class="word-translations" style="${translationDisplaied ? 'visibility: visible;' : 'visibility: hidden;'}">${currentDescription.blocks.map((item) => {
            return `<div>${item.translations.filter((item) => item).map((itemWord) => itemWord.split(",").join(", ")).join("; ")}</div>`
          })}</div>
        </div>
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
        /// !!! playTime
        const currentAudioBackwardTranslationDirection = backwardTranslationDirection

        isWordPlaying = true
        let finished = false

        const finish = () => {
          skipPauseButton.setAttribute("disabled", "disabled")

          if (finished) {
            return
          }

          finished = true
          clearTimeout(translationDescriptor)
          translationDescriptor = null
          skipTranslation = false
          isWordPlaying = false
          callback()
        }

        lastFinishWordPlaying = finish

        const play = () => {
          const getIsCurrentAudioPlayingForFirstAudio = () => {
            return (currentAudioBackwardTranslationDirection && translationPlaying) || (!currentAudioBackwardTranslationDirection && wordPlaying)
          }

          const getIsCurrentAudioPlayingForSecondAudio = () => {
            return (!currentAudioBackwardTranslationDirection && translationPlaying) || (currentAudioBackwardTranslationDirection && wordPlaying)
          }

          const stopOnPlayTime = (currentAudio, handler) => {
            if (playTime === null) {
              return
            }

            setTimeout(() => {
              if (!finished && currentAudio.playing()) {
                currentPayingAudio.stop()
                handler()
              }
            }, playTime)
          }

          const firstEnd = () => {
            if (skipTranslation) {
              finish()
              return
            }

            skipPauseButton.removeAttribute("disabled")
            handleFirstAudioEnd = () => {
              skipPauseButton.setAttribute("disabled", "disabled")

              handleFirstAudioEnd = null
              translationDescriptor = null
              if (skipTranslation) {
                finish()
              } else {
                currentPayingAudio = (currentAudioBackwardTranslationDirection ? audioEng : audioRu)

                if (getIsCurrentAudioPlayingForSecondAudio()) {
                  currentPayingAudio.play()
                  stopOnPlayTime(currentPayingAudio, secondEnd)
                } else {
                  secondEnd()
                }
              }
            }

            translationDescriptor = setTimeout(handleFirstAudioEnd, TRANSLATION_DELAY)
          }

          const secondEnd = () => {
            if (skipTranslation) {
              finish()
              return
            }

            skipPauseButton.removeAttribute("disabled")
            translationDescriptor = setTimeout(() => {
              skipPauseButton.setAttribute("disabled", "disabled")
              translationDescriptor = null

              finish()
            }, delayAfter || 750)
          }

          audioEng = new Howl({
            src: [engSrc],
            volume: soundValue,
            onend: currentAudioBackwardTranslationDirection ? secondEnd : firstEnd,
          });

          audioRu = new Howl({
            src: [ruSrc],
            volume: soundValue,
            onend: currentAudioBackwardTranslationDirection ? firstEnd : secondEnd,
          });

          currentPayingAudio = (currentAudioBackwardTranslationDirection ? audioRu : audioEng)

          if (getIsCurrentAudioPlayingForFirstAudio()) {
            currentPayingAudio.play()
            stopOnPlayTime(currentPayingAudio, firstEnd)
          } else {
            firstEnd()
          }
        }

        play()
      }
    }
  }

  function renderAll() {
    renderCurrentDescription()
    renderAudio()
  }

  const loadSounds = async (currentList, targetItem) => {
    loaderLayer.setAttribute("style", "display: block")
    const promises = []

    const indexStart = currentList.dict.findIndex((item) => item[0] === targetItem[0] && item[1] === targetItem[1])
    const removeOldIndexStart = indexStart - 40

    soundCollection = new Map()
    currentList.dict.slice(indexStart, indexStart + 15).forEach((item) => {
      const engSrc = `./${item[0]}/eng-sounds/${leadingZeros(item[1])}.mp3`
      const ruSrc = `./${item[0]}/ru-sounds/${leadingZeros(item[1])}.mp3`

      if (!soundCollection.has(engSrc)) {
        const sound1 = new Howl({
          src: [engSrc],
        });

        soundCollection.set(engSrc, sound1)
      }

      if (!soundCollection.has(ruSrc)) {
        const sound2 = new Howl({
          src: [ruSrc],
        });

        soundCollection.set(ruSrc, sound2)
      }

    })

    currentList.dict.slice(removeOldIndexStart, removeOldIndexStart + 39).reduce((result, item) => {
      const engSrc = `./${item[0]}/eng-sounds/${leadingZeros(item[1])}.mp3`
      const ruSrc = `./${item[0]}/ru-sounds/${leadingZeros(item[1])}.mp3`

      soundCollection.delete(engSrc)
      soundCollection.delete(ruSrc)
    }, new Map())

    await Promise.allSettled(promises)

    loaderLayer.setAttribute("style", "display: none")
  }

  const updateCurrentAllCheckbox = () => {
    const currentListSet = currentList ? new Set(currentList.dict) : null
    const allChecked = currentListSet ? Array.from(currentListSet).every((item) => {
      return checkedWords.has(`${item[0]}-${item[1]}`)
    }) : false

    document.querySelector("#word-all").checked = !!allChecked

  }

  window.handleSelectDict = async (listName) => {
    isPlaying = false
    currentSelection = null

    currentList = getListByName(listName)

    localStorage.setItem("current-list", currentList.name)

    updateCurrentAllCheckbox()
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

      if (value === "DEFAULT") {
        TRANSLATION_DELAY = DEFAULT_TRANSLATION_DELAY
      } else {
        TRANSLATION_DELAY = parseFloat(value) * 1000
      }

      localStorage.setItem("selectDelayValue", value)
    }

    if (selectDelayValue !== undefined) {
      handleSelectDelayChange({target: {value: selectDelayValue}})
    }

    window.handleSelectPlayTimeChange = (event) => {
      const value = event.target.value

      if (value === "DEFAULT") {
        playTime = DEFAULT_PLAYING_TIME
      } else {
        playTime = parseFloat(value) * 1000
      }

      localStorage.setItem("selectPlayValue", value)
    }

    if (selectPlayValue !== undefined) {
      handleSelectPlayTimeChange({target: {value: selectPlayValue}})
    }

    window.handleSelectDelayAfterValueChange = (event) => {
      const value = event.target.value

      if (value === "DEFAULT") {
        delayAfter = DEFAULT_SELECT_DELAY_AFTER_VALUE
      } else {
        delayAfter = parseFloat(value) * 1000
      }

      localStorage.setItem("selectDelayAfterValue", value)
    }

    if (selectDelayAfterValue !== undefined) {
      handleSelectDelayAfterValueChange({ target: { value: selectDelayAfterValue } })
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

    currentList = getListByName(localStorageCurrentSelection) || null
    const currentListSet = currentList ? new Set(currentList.dict) : null
    const allChecked = currentListSet ? Array.from(currentListSet).every((item) => {
      return checkedWords.has(`${item[0]}-${item[1]}`)
    }) : false

    const content = `
      <div class="container no-pads mt-3">
        <div class="row">
          <select class="form-select sound-volume" onchange="handleSelectDictChange(event)">
            <option disabled>Плейлисты</option>
            <option value="">NONE</option>
            ${playLists.map((list) => {
        const selected = list.name === localStorageCurrentSelection
  
        return `<option ${selected ? 'selected="selected"' : ''} value="${list.name}">${list.name}</option>`
      }).join('')}
          </select>
        </div>
      </div>
      <div class="container no-pads mt-3">
        <div class="row">
          <select class="form-select sound-volume" onchange="handleSelectDelayChange(event)">
            <option disabled value="">Задержка до перевода</option>
            <option ${selectDelayValue === "DEFAULT" ? "selected=\"selected\"" : ""} value="DEFAULT">DEFAULT</option>
            <option ${selectDelayValue === "0.5" ? "selected=\"selected\"" : ""} value="0.5">0.5</option>
            <option ${selectDelayValue === "1" ? "selected=\"selected\"" : ""} value="1">1</option>
            <option ${selectDelayValue === "2" ? "selected=\"selected\"" : ""} value="2">2</option>
            <option ${selectDelayValue === "3" ? "selected=\"selected\"" : ""} value="3">3</option>
            <option ${selectDelayValue === "4" ? "selected=\"selected\"" : ""} value="4">4</option>
            <option ${selectDelayValue === "5" ? "selected=\"selected\"" : ""} value="5">5</option>
            <option ${selectDelayValue === "7" ? "selected=\"selected\"" : ""} value="7">7</option>
            <option ${selectDelayValue === "10" ? "selected=\"selected\"" : ""} value="10">10</option>
            <option ${selectDelayValue === "15" ? "selected=\"selected\"" : ""} value="15">15</option>
            <option ${selectDelayValue === "20" ? "selected=\"selected\"" : ""} value="20">20</option>
            <option ${selectDelayValue === "30" ? "selected=\"selected\"" : ""} value="30">30</option>
          </select>
        </div>
      </div>
      <div class="container no-pads mt-3">
        <div class="row">
          <select class="form-select sound-volume" onchange="handleSelectPlayTimeChange(event)">
            <option disabled value="">Время проигрывания</option>
            <option ${selectPlayValue === "DEFAULT" ? "selected=\"selected\"" : ""} value="DEFAULT">DEFAULT</option>
            <option ${selectPlayValue === "0.5" ? "selected=\"selected\"" : ""} value="0.5">0.5</option>
            <option ${selectPlayValue === "1" ? "selected=\"selected\"" : ""} value="1">1</option>
            <option ${selectPlayValue === "1.5" ? "selected=\"selected\"" : ""} value="1.5">1.5</option>
            <option ${selectPlayValue === "2" ? "selected=\"selected\"" : ""} value="2">2</option>
            <option ${selectPlayValue === "2.5" ? "selected=\"selected\"" : ""} value="2.5">2.5</option>
            <option ${selectPlayValue === "3" ? "selected=\"selected\"" : ""} value="3">3</option>
            <option ${selectPlayValue === "3.5" ? "selected=\"selected\"" : ""} value="3.5">3.5</option>
            <option ${selectPlayValue === "4" ? "selected=\"selected\"" : ""} value="4">4</option>
            <option ${selectPlayValue === "4.5" ? "selected=\"selected\"" : ""} value="4.5">4.5</option>
            <option ${selectPlayValue === "5" ? "selected=\"selected\"" : ""} value="5">5</option>
            <option ${selectPlayValue === "5.5" ? "selected=\"selected\"" : ""} value="5.5">5.5</option>
            <option ${selectPlayValue === "6" ? "selected=\"selected\"" : ""} value="6">6</option>
          </select>
        </div>
      </div>
      <div class="container no-pads mt-3">
        <div class="row">
          <select class="form-select sound-volume" onchange="handleSelectDelayAfterValueChange(event)">
            <option disabled value="">Время задержки после проигрывания</option>
            <option ${selectDelayAfterValue === "DEFAULT" ? "selected=\"selected\"" : ""} value="DEFAULT">DEFAULT</option>
            <option ${selectDelayAfterValue === "0.5" ? "selected=\"selected\"" : ""} value="0.5">0.5</option>
            <option ${selectDelayAfterValue === "1" ? "selected=\"selected\"" : ""} value="1">1</option>
            <option ${selectDelayAfterValue === "2" ? "selected=\"selected\"" : ""} value="2">2</option>
            <option ${selectDelayAfterValue === "3" ? "selected=\"selected\"" : ""} value="3">3</option>
            <option ${selectDelayAfterValue === "4" ? "selected=\"selected\"" : ""} value="4">4</option>
            <option ${selectDelayAfterValue === "5" ? "selected=\"selected\"" : ""} value="5">5</option>
            <option ${selectDelayAfterValue === "7" ? "selected=\"selected\"" : ""} value="7">7</option>
            <option ${selectDelayAfterValue === "10" ? "selected=\"selected\"" : ""} value="10">10</option>
            <option ${selectDelayAfterValue === "15" ? "selected=\"selected\"" : ""} value="15">15</option>
            <option ${selectDelayAfterValue === "20" ? "selected=\"selected\"" : ""} value="20">20</option>
            <option ${selectDelayAfterValue === "30" ? "selected=\"selected\"" : ""} value="30">30</option>
          </select>
        </div>
      </div>
      <div>
        <div class="container no-pads mt-3">
          <div class="row">
            <label for="volumeSelect" class="col-5 col-form-label">Индекс от:</label>
            <div class="col-7">
              <input class="form-control form-control-lg" type="number" value="${indexFrom !== null ? indexFrom + 1 : ""}" onblur="handleFromIndexBlur(event)" />
            </div>
          </div>
        </div>
        <div class="container no-pads mt-3">
          <div class="row">
            <label for="volumeSelect" class="col-5 col-form-label">Индекс от:</label>
            <div class="col-7">
              <input class="form-control form-control-lg" type="number" value="${indexTo !== null ? indexTo + 1 : ""}" onblur="handleToIndexBlur(event)" />
            </div>
          </div>
        </div>
      </div>
    `

    playlistBox.innerHTML = content

    document.querySelector(".word-all-container").innerHTML = `
      <ul>
        <li><div><input id="word-all" type="checkbox" onchange="handleCheckAllWords(event)" ${allChecked ? 'checked="checked"' : ''} /></div><div class="list-item-caption"><div class="list-item-caption__index"></div>Все</div></li>
      </ul>
    `

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

  document.querySelector(".sound-volume").value = soundValue

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = "checked-words-tuples.json";
    a.click();
  }

  window.handleSaveChecked = () => {
    const checkedWords = localStorage.getItem("checked-words-tuples") ?? []

    downloadAsFile(checkedWords)
  }

})()


/*
  let text = JSON.stringify({hello:'example'});
  downloadAsFile(text);

  function downloadAsFile(data) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = "example.txt";
    a.click();
  }
 */
