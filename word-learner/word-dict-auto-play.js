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

  // allWordsMap
  const dictMap = {
    8000: enWords8000,
    2700: engWords2700,
    170: engWords170,
    900: engWords900,
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
    dict: engDictNotKnownIndexes7000,
  }, {
    name: "Популярные сокращенный все",
    dict: engDictNotKnownIndexesAll,
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
    name: "Самые сложные из 2000",
    dict: cleanDuplications(mostDifficult),
  }, {
    name: "Выборка из 5000 сокращенных тяжелых",
    dict: cleanDuplications(engDict5000unlearned),
  }]

  const DEFAULT_TRANSLATION_DELAY = 350
  let TRANSLATION_DELAY = 350
  let selectDelayValue = localStorage.getItem("selectDelayValue")
  let currentPayingAudio = null
  let currentList = null
  let currentWord = null
  let currentDescription = null
  let currentSelection = null
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
  } catch (error) {}

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
    } catch (error) {}

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
          if (indexTo !== null && nextIndex > indexTo) {
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

          while (nextIndex < currentList.dict.length) {
            const item = currentList.dict[nextIndex]

            if (!checkedWords.has(`${item[0]}-${item[1]}`)) {
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
  const displayTranslationButton = document.querySelector(".display-translation-button")
  const displayWordButton = document.querySelector(".display-word-button")
  const playPauseButton = document.querySelector(".play-pause-button")
  const playListButton = document.querySelector(".play-list-button")
  const wordBox = document.querySelector(".word-box")
  const playlistBox = document.querySelector(".playlist-controls")
  const currentPlaylist = document.querySelector(".current-playlist")
  const currentAudioBox = document.querySelector(".audio-box")
  const loaderLayer = document.querySelector(".loader-layer")

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

  playPauseButton.onclick = () => switchPlaying(undefined, true)

  playListButton.onclick = () => switchPlaying()

  displayTranslationButton.onclick = () => {
    translationDisplaied = !translationDisplaied

    wordBox.querySelector(".word-translations").style.visibility = translationDisplaied ? "visible" : "hidden"
  }

  let wordDisplayed = true
  displayWordButton.onclick = () => {
    wordDisplayed = !wordDisplayed

    wordBox.querySelector(".word-value").style.visibility = wordDisplayed ? "visible" : "hidden"
    wordBox.querySelector(".word-transcription").style.visibility = wordDisplayed ? "visible" : "hidden"
  }

  skipButton.onclick = () => {
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

    if (interrupted) {
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

      return `<li><div><input id="word-checkbox-${pack}-${index}" ${checkedWords.has(`${pack}-${index}`) ? 'checked="checked"' : ''} type="checkbox" onchange="handleChangeWordCheckbox(event, ${index}, '${pack}')" /></div><div class="list-item-caption" onclick="handleSelectDictItem('${pack}', ${index})">${leadingZeros(arrayIndex + 1)}. ${word}</div></li>`
    }).join('')}
      </ul>
    ` : ''

    currentPlaylist.innerHTML = content
  }

  function renderCurrentDescription() {
    let content
    if (currentDescription) {
      content = `
        <div class="word-value" style="${wordDisplayed ? 'visibility: visible;' : 'visibility: hidden;'}">${currentDescription.en}</div>
        <div class="word-transcription" style="${wordDisplayed ? 'visibility: visible;' : 'visibility: hidden;'}">${currentDescription.transcription}</div>
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
        const currentAudioBackwardTranslationDirection = backwardTranslationDirection

        isWordPlaying = true
        let finished = false

        const finish = () => {
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
          const firstEnd = () => {
            if (skipTranslation) {
              finish()
              return
            }

            translationDescriptor = setTimeout(() => {
              translationDescriptor = null
              if (skipTranslation) {
                finish()
              } else {
                currentPayingAudio = (currentAudioBackwardTranslationDirection ? audioEng : audioRu)

                currentPayingAudio.play()
              }
            }, TRANSLATION_DELAY)
          }

          const secondEnd = () => {
            if (skipTranslation) {
              finish()
              return
            }

            translationDescriptor = setTimeout(() => {
              translationDescriptor = null

              finish()
            }, 750)
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

          currentPayingAudio.play()
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

      if (value === "DEFAULT DELAY") {
        TRANSLATION_DELAY = DEFAULT_TRANSLATION_DELAY
      } else {
        TRANSLATION_DELAY = parseFloat(value) * 1000
      }

      localStorage.setItem("selectDelayValue", value)
    }

    if (selectDelayValue !== undefined) {
      handleSelectDelayChange({target: {value: selectDelayValue}})
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
          <option ${selectDelayValue === "7" ? "selected=\"selected\"" : ""} value="7">7</option>
          <option ${selectDelayValue === "10" ? "selected=\"selected\"" : ""} value="10">10</option>
          <option ${selectDelayValue === "15" ? "selected=\"selected\"" : ""} value="15">15</option>
          <option ${selectDelayValue === "20" ? "selected=\"selected\"" : ""} value="20">20</option>
          <option ${selectDelayValue === "30" ? "selected=\"selected\"" : ""} value="30">30</option>
        </select>
      </div>
      <div>
        <div>
          <label>
            Индекс от:
            <input style="width: 100px" type="number" value="${indexFrom !== null ? indexFrom + 1 : ""}" onblur="handleFromIndexBlur(event)" />
          </label>
        </div>
        <div>
          <label>
            Индекс до:
            <input style="width: 100px" type="number" value="${indexTo !== null ? indexTo + 1 : ""}" onblur="handleToIndexBlur(event)" />
          </label>
        </div>
        <div>
          <label><input id="word-all" type="checkbox" onchange="handleCheckAllWords(event)" ${allChecked ? 'checked="checked"' : ''} /><div class="text">Все</div></label>
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
