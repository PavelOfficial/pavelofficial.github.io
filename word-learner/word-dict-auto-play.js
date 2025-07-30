(() => {
  const excludeSublist = (words, exclusion) => {
    const exclusionSet = new Set([
      ...exclusion,
    ].map(([playListIndex, wordIndex]) => {
      return String(playListIndex) + '-' + String(wordIndex)
    }))

    const result = words.filter((word) => {
      return !exclusionSet.has(String(word[0]) + '-' + String(word[1]))
    })

    return result
  }

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

  const autoSkipOnCheckCheckboxOption = document.querySelector(".js-auto-skip-on-check");
  const reversedWordDescription = document.querySelector(".js-reversed-word-description");

  reversedWordDescription.onchange = (event) => {
    const target = event.target;

    if (target.checked) {
      document.querySelector(".word-box-inner").setAttribute("class", "word-box-inner word-box-inner_reversed");
    } else {
      document.querySelector(".word-box-inner").setAttribute("class", "word-box-inner");
    }
  };

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
    20001: enWords20000ExtraDelta,
  };

  const dictMapSamples = {
    12000: enWords12000DeltaSamples,
  };

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

  const shortEngAll20001 = excludeSublist(engAll20001, [
    ...engAll20001Exclude1IrregularVerbs,
    ...engAll20001Exclude2PhrasalVerbs,
    ...engAll20001ExcludeRest,
    ...wrongAll20001,
  ]);

  console.log("shortEngAll20001.slice(1019) : ", JSON.stringify(shortEngAll20001.slice(1019)));

  const mixItems = (array) => {
    for (let i = 0; i < array.length; i++) {
      const aIndex = Math.floor(Math.random() * array.length, 10);
      const bIndex = Math.floor(Math.random() * array.length, 10);

      let a = array[aIndex];
      let b = array[bIndex];

      array[aIndex] = b;
      array[bIndex] = a;
    }

    return array
  };

  /*
    console.log("ч1", shortEngAll20001.slice(0, 1019).slice(920, 1018));
    console.log("ч2",  shortEngAll20001.slice(0, 1019).slice(796, 919));

    const filterAllSameItems = (list, overList) => {
      const listReadySet = new Set([]);
      const wordSet = new Set([]);
      const resultList = [];

      overList.forEach(([listIndex, index]) => {
        const newKey = `${listIndex}-${index}`;
        if (listReadySet.has(newKey)) {
          return;
        }

        const word = dictMap[listIndex][index];
        if (wordSet.has(word)) {
          return;
        }

        listReadySet.add(newKey);
        wordSet.add(word);
      });

      // list.map(([listIndex, index]) => `${listIndex}-${index}`)
      list.forEach(([listIndex, index]) => {
        const newKey = `${listIndex}-${index}`;

        if (listReadySet.has(newKey)) {
          return;
        }

        const word = dictMap[listIndex][index];

        if (wordSet.has(word)) {
          return;
        }

        listReadySet.add(newKey);
        wordSet.add(word);

        resultList.push([listIndex, index]);
      });

      overList.forEach((item) => {
        resultList.push(item);
      });

      return resultList;
    };

    console.log("!: ", JSON.stringify(filterAllSameItems([
      ...engDictAllIndexes2000,
      ...engDictAllIndexes3000,
      ...engDictAllIndexes5000,
      ...engDictAllIndexes7000,
      ...engDictAllIndexesAll,

      ...engDictNotKnownIndexes2000,
      ...engDictNotKnownIndexes3000,
      ...engDictNotKnownIndexes5000,
      ...engDictNotKnownIndexes7000,
      ...engDictNotKnownIndexes12000Names, // 12000
      ...engDictNotKnownIndexes12000Common, // 12000
      ...engDictNotKnownIndexes12000Understood, // 12000
      ...shortEngAll20001.slice(0, 1019).slice(0, 796), // 20001
      // ...shortEngAll20001.slice(0, 1019).slice(920, 1018), // ч. 1
      // ...shortEngAll20001.slice(0, 1019).slice(796, 919), // ч. 2
      ...restOf20001_AllMixed,

    ], [
      //
      ...engDictAllIndexes170, // фразовые глаголы
      ...engDictAllIndexes900, // фразовые глаголы
      ...engAll20001Exclude2PhrasalVerbs, // фразовые глаголы
      ...shortEngAll20001.slice(0, 1019).slice(920, 1019), // ч. 1 // фразовые глаголы

      //
      ...engAll20001Exclude1IrregularVerbs,
      ...shortEngAll20001.slice(0, 1019).slice(796, 920), // ч. 2 // Irregular Verbs
    ])));

   */
  //
  // console.log("result 3: ", JSON.stringify(mixItems(mixItems(shortEngPart20001Recollection_1))));;
/*
  const list_set = new Set(shortEngAll20001.slice(0, 1019).slice(796, 920).map(([index, word]) => {
    return `${index}-${word}`;
  }));

  const wrongWordList = fullPackOfAllLists20001.slice(18175, 18348).filter(([index, indexWord]) => {
    return !list_set.has(`${index}-${indexWord}`);
  });

  const fullPackOfAllListsCheckedWords_1_set = new Set(fullPackOfAllListsCheckedWords_1.concat(wrongWordList).map(([index, word]) => {
    return `${index}-${word}`;
  }));

  const fullPackOfAllLists20001ExcludedRep_1 = fullPackOfAllLists20001.filter(([index, wordIndex]) => {
    return !fullPackOfAllListsCheckedWords_1_set.has(`${index}-${wordIndex}`);
  });

  // console.log("fullPackOfAllLists20001: ", JSON.stringify(fullPackOfAllLists20001));
  console.log("fullPackOfAllLists20001ExcludedRep_1: ", JSON.stringify(fullPackOfAllLists20001ExcludedRep_1));
*/
  // Исключить что по фразовым глаголам: shortEngAll20001.slice(0, 1019)


  const playLists = [ {
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
    name: "Популярные сокращенный все 12000. Имена.",
    dict: engDictNotKnownIndexes12000Names,
  }, {
    name: "Популярные сокращенный все 12000. Специфические.",
    dict: engDictNotKnownIndexes12000Specific,
  }, {
    name: "Популярные сокращенный все 12000. Понятные.",
    dict: engDictNotKnownIndexes12000Understood,
  }, {
    name: "Популярные сокращенный все 12000. Новые.",
    dict: engDictNotKnownIndexes12000Common,
  }, {
    name: "Популярные сокращенный все 12000. Суперспецифические.",
    dict: engDictNotKnownIndexes12000SuperSpecific,
  }, {
    name: "Популярные сокращенный 20001 все.",
    dict: engAll20001,
  }, {
    name: "Популярные сокращенный 20001 все. Сокращенный.",
    dict: shortEngAll20001,
  }, {
    name: "Популярные сокращенный 20001 все. Сокращенный. Часть 1.",
    dict: shortEngAll20001.slice(0, 1019),
  }, {
    name: "Популярные сокращенный 20001 все. Сокращенный. Часть 2.",
    dict: restOf20001_AllMixed,
  }, playlistSeparator, {
    name: "Часть 1.",
    dict: shortEngAll20001.slice(0, 1019).slice(920, 1019),
  }, {
    name: "Часть 2.",
    dict: shortEngAll20001.slice(0, 1019).slice(796, 920),
  }, {
    name: "Часть 3.",
    dict: shortEngAll20001.slice(0, 1019).slice(0, 796),
  },   {
    name: "Полный 20001 срез.",
    dict: fullPackOfAllLists20001,
  }, {
    name: "Полный 20001 срез. 1",
    dict: fullPackOfAllLists20001.slice(0, 4500),
  }, {
    name: "Полный 20001 срез. 2",
    dict: fullPackOfAllLists20001.slice(4500, 9000),
  }, {
    name: "Полный 20001 срез. 3",
    dict: fullPackOfAllLists20001.slice(9000, 13500),
  }, {
    name: "Полный 20001 срез. 4",
    dict: fullPackOfAllLists20001.slice(13500),
  }, playlistSeparator, {
    name: "Полный 20001 срез. повторение 1",
    dict: fullPackOfAllLists_Repeat_1,
  },/* {
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
  }, {
    name: "Повторение 8000/пачка(1650) 3",
    dict: cleanDuplications(engDictRecollection8000_part1650_3),
  }, {
    name: "Повторение 8000/пачка(1650) 4 (фразовые глаголы)",
    dict: cleanDuplications(engDictRecollection8000_part1650_4),
  }, {
    name: "Повторение 8000/пачка(1650) 5",
    dict: cleanDuplications(engDictRecollection8000_part1650_5),
  }, {
    name: "Повторение 8000/пачка(1650) все",
    dict: cleanDuplications([...engDictRecollection8000_part1650_1, ...engDictRecollection8000_part1650_2, ...engDictRecollection8000_part1650_3, ...engDictRecollection8000_part1650_4, ...engDictRecollection8000_part1650_5]),
  }, {
    name: "Повторение 8000/пачка(1650) все (сокращенный 1)",
    dict: excludeSublist(
      cleanDuplications([
        ...engDictRecollection8000_part1650_1,
        ...engDictRecollection8000_part1650_2,
        ...engDictRecollection8000_part1650_3,
        ...engDictRecollection8000_part1650_4,
        ...engDictRecollection8000_part1650_5,
      ]),
      engDictRecollection8000_part1650_5_exclution_1,
    ),
  }, {
    name: "Повторение 8000/пачка(1650) все (сокращенный 2)",
    dict: excludeSublist(
      cleanDuplications([
        ...engDictRecollection8000_part1650_1,
        ...engDictRecollection8000_part1650_2,
        ...engDictRecollection8000_part1650_3,
        ...engDictRecollection8000_part1650_4,
        ...engDictRecollection8000_part1650_5,
      ]),
      engDictRecollection8000_part1650_5_exclution_2,
    ),
  }, playlistSeparator, {
    name: "Повторение 2ое - 8000/пачка(1650) 1",
    dict: cleanDuplications(engDictRecollection_2_8000_part1650_1),
  }, {
    name: "Повторение 2ое - 8000/пачка(1650) 2",
    dict: cleanDuplications(engDictRecollection_2_8000_part1650_2),
  }, {
    name: "Повторение 2ое - 8000/пачка(1650) 3",
    dict: cleanDuplications(engDictRecollection_2_8000_part1650_3),
  }, {
    name: "Повторение 2ое - 8000/пачка(1650) 4 (фразовые глаголы)",
    dict: cleanDuplications(engDictRecollection_2_8000_part1650_4),
  }, {
    name: "Повторение 2ое - 8000/пачка(1650) 5",
    dict: cleanDuplications(engDictRecollection_2_8000_part1650_5),
  }, {
    name: "Повторение 2ое - 8000/пачка(1650) все (сокращенный 1)",
    dict: cleanDuplications(engDictRecollection_2_8000_part1650_exclution_1),
  }, {
    name: "Повторение 2ое - 8000/пачка(1650) все (сокращенный 2)",
    dict: cleanDuplications(engDictRecollection_2_8000_part1650_exclution_2),
  }, playlistSeparator, {
    name: "Все по повторениям",
    dict: cleanDuplications([
      ...engDictRecollection_2_8000_part1650_exclution_2,
      ...engDictRecollection_2_8000_part1650_exclution_1,
      ...engDictRecollection_2_8000_part1650_5,
      ...engDictRecollection_2_8000_part1650_4,
      ...engDictRecollection_2_8000_part1650_3,
      ...engDictRecollection_2_8000_part1650_2,
      ...engDictRecollection_2_8000_part1650_1,
      ...engDictRecollection8000_part1650_1,
      ...engDictRecollection8000_part1650_2,
      ...engDictRecollection8000_part1650_3,
      ...engDictRecollection8000_part1650_4,
      ...engDictRecollection8000_part1650_5,
    ]),
  }, playlistSeparator, {
    name: "Повторение 1 пачки 12000",
    dict: cleanDuplications(engDictRecollection_1_12000),
  }, {
    name: "Повторение 2 пачки 12000",
    dict: cleanDuplications(engDictRecollection_2_12000),
  }, {
    name: "Повторение 3 пачки 12000",
    dict: cleanDuplications(engDictRecollection_3_12000),
  }, {
    name: "Повторение 1. Популярные 20001 все. Сокр. ч1.",
    dict: shortEngAll20001Recollection_1,
  }, {
    name: "Повторение 2. Популярные 20001 все. Сокр. ч1.",
    dict: shortEngAll20001Recollection_2,
  }, {
    name: "Повторение 1. Популярные 20001 все. Сокр. ч2.",
    dict: shortEngPart20001Recollection_1,
  }, {
    name: "Повторение 2. Популярные 20001 все. Сокр. ч2.",
    dict: shortEngPart20001Recollection_2,
  }, {
    name: "Повторение 3. Популярные 20001 все. Сокр. ч2.",
    dict: shortEngPart20001Recollection_3,
  }*/];

  const all12000 = engDictNotKnownIndexes12000Common;
  const all8000 = cleanDuplications([
    ...engDictRecollection_2_8000_part1650_exclution_2,
    ...engDictRecollection_2_8000_part1650_exclution_1,
    ...engDictRecollection_2_8000_part1650_5,
    ...engDictRecollection_2_8000_part1650_4,
    ...engDictRecollection_2_8000_part1650_3,
    ...engDictRecollection_2_8000_part1650_2,
    ...engDictRecollection_2_8000_part1650_1,
    ...engDictRecollection8000_part1650_1,
    ...engDictRecollection8000_part1650_2,
    ...engDictRecollection8000_part1650_3,
    ...engDictRecollection8000_part1650_4,
    ...engDictRecollection8000_part1650_5,
  ]);

  const all12000En = all12000.map((item) => {
    return dictMap[item[0]][item[1]];
  });

  console.log("all12000En: ", JSON.stringify(all12000En));

  const all8000En = all8000.map((item) => {
    return dictMap[item[0]][item[1]];
  });

  console.log("all8000En: ", JSON.stringify(all8000En));


  let isPrevMassWord = false;
  let isPrevWord = false;
  let isNextWord = false;
  let isNextMassWord = false;
  let currentSamples = null;
  let audioExamples = null;

  const DEFAULT_TRANSLATION_DELAY = 350;
  const DEFAULT_PLAYING_TIME = null;
  const DEFAULT_SELECT_DELAY_AFTER_VALUE = 0;
  const DEFAULT_MASS_JUMP_COUNT = 5;
  let playTime = null;
  let delayAfter = null;
  let TRANSLATION_DELAY = 350;
  let selectDelayValue = localStorage.getItem("selectDelayValue");
  let selectPlayValue = localStorage.getItem("selectPlayValue");
  let selectDelayAfterValue = localStorage.getItem("selectDelayAfterValue");
  let currentPayingAudio = null;
  let currentList = null;
  let currentWord = null;
  let currentDescription = null;
  let currentDescription2 = null;
  let currentDescription3 = null;
  let currentSelection = null;
  let handleFirstAudioEnd = null;
  let handleSecondAudioEnd = null;
  let handleThirdAudioEnd = null;
  let indexFrom = localStorage.getItem("indexFrom") ? parseInt(localStorage.getItem("indexFrom"), 10) - 1 : null
  let indexTo = localStorage.getItem("indexTo") ? parseInt(localStorage.getItem("indexTo") - 1, 10) : null
  let isPlaying = false
  let soundCollection = null
  let playSamples = true
  let playSamplesCount = 3

  let soundValueStoraged
  if (localStorage.getItem("sound-value")) {
    soundValueStoraged = parseFloat(localStorage.getItem("sound-value"))
  }

  let soundValue = soundValueStoraged || 1

  let handleAudioPlay = () => {
  }

  let storedWordIndexes = []
  let storedWordSemiknownIndexes = []
  let storedWordKnownIndexes = []

  try {
    storedWordIndexes = JSON.parse(localStorage.getItem("checked-words-tuples")) ?? []
  } catch (error) {
  }

  let checkedWords = new Map(storedWordIndexes.map((item) => {
    return [`${item[0]}-${item[1]}`, item]
  }));

  try {
    storedWordSemiknownIndexes = JSON.parse(localStorage.getItem("checked-words-semiknown-tuples")) ?? []
  } catch (error) {}

  let checkedWordsSemiknown = new Map(storedWordSemiknownIndexes.map((item) => {
    return [`${item[0]}-${item[1]}`, item]
  }));

  try {
    storedWordKnownIndexes = JSON.parse(localStorage.getItem("checked-words-known-tuples")) ?? []
  } catch (error) {}

  let checkedWordsKnown = new Map(storedWordKnownIndexes.map((item) => {
    return [`${item[0]}-${item[1]}`, item]
  }));

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
      if (window.sprintMode === "RuEn") {
        if (displayWordButton[0].checked) {
          displayWordButton[0].click();
        }
      } else if (window.sprintMode === "EnRu") {
        if (displayTranslationButton[0].checked) {
          displayTranslationButton[0].click();
        }
      }

      playAWord(callback)
    }
  }

  const saveWordCheckboxesForAList = (list, storageName) => {
    let storedWordIndexes = [];

    try {
      storedWordIndexes = JSON.parse(localStorage.getItem("checked-words-tuples")) ?? [];
    } catch (error) {
    }

    const storedWordIndexesMap = new Map(storedWordIndexes.map((item) => {
      return [`${item[0]}-${item[1]}`, item]
    }));

    currentList.dict.forEach((item) => {
      storedWordIndexesMap.delete(`${item[0]}-${item[1]}`)
    });

    localStorage.setItem(storageName, JSON.stringify([
      ...Array.from(list).map(item => item[1]).filter(item => item),
      ...Array.from(storedWordIndexesMap).map((item) => item[1]).filter(item => item),
    ]));
  };

  const saveWordCheckboxes = () => {
    saveWordCheckboxesForAList(checkedWords, "checked-words-tuples");
    saveWordCheckboxesForAList(checkedWordsSemiknown, "checked-words-semiknown-tuples");
    saveWordCheckboxesForAList(checkedWordsKnown, "checked-words-known-tuples");
  };

  window.handleSelectDictItem = handleSelectDictItem

  function handleChangeWordCheckbox(event, index, pack, postfix) {
    const checked = !!event.target.checked;

    // if it is current then change current checkbox
    if (postfix === "") {
      if (String(pack) === String(currentSelection[0]) && String(index) === String(currentSelection[1])) {
        currentCheckbox.checked = checked;
      }
    } else if (postfix === "semiknown") {
      if (String(pack) === String(currentSelection[0]) && String(index) === String(currentSelection[1])) {
        currentCheckboxSemiknown.checked = checked;
      }
    } else if (postfix === "known") {
      if (String(pack) === String(currentSelection[0]) && String(index) === String(currentSelection[1])) {
        currentCheckboxKnown.checked = checked;
      }
    }

    if (postfix === "") {
      if (checked) {
        checkedWords.set(`${pack}-${index}`, [pack, index]);
      } else {
        checkedWords.delete(`${pack}-${index}`);
      }
    } else if (postfix === "semiknown") {
      if (checked) {
        checkedWordsSemiknown.set(`${pack}-${index}`, [pack, index]);
      } else {
        checkedWordsSemiknown.delete(`${pack}-${index}`);
      }
    } else if (postfix === "known") {
      if (checked) {
        checkedWordsKnown.set(`${pack}-${index}`, [pack, index]);
      } else {
        checkedWordsKnown.delete(`${pack}-${index}`);
      }
    }

    saveWordCheckboxes();
    updateCurrentAllCheckbox();
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

  const skipButton = Array.from(document.querySelectorAll(".skip-button"));
  const skipPauseButton = Array.from(document.querySelectorAll(".skip-pause-button"));

  const prevMassWordButton = document.querySelector(".prev-mass-word-button")
  const prevWordButton = document.querySelector(".prev-word-button")
  const nextWordButton = document.querySelector(".next-word-button")
  const nextMassWordButton = document.querySelector(".next-mass-word-button")
  const currentCheckbox = document.querySelector(".current-checkbox.current-checkbox-unknown")
  const currentCheckboxSemiknown = document.querySelector(".current-checkbox.current-checkbox-semiknown")
  const currentCheckboxKnown = document.querySelector(".current-checkbox.current-checkbox-known")

  const displayTranslationButton = Array.from(document.querySelectorAll(".display-translation-button"));
  const displayWordButton = Array.from(document.querySelectorAll(".display-word-button"));
  const transcriptionButton = document.querySelector(".display-transcription-button")
  const playSamplesButton = document.querySelector(".play-samples-button")
  const displayWordSamplesButton = document.querySelector(".display-samples-button")
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

  displayTranslationButton.forEach((item) => {
    item.onchange = (event) => {
      translationDisplaied = !!event.target.checked;

      displayTranslationButton.forEach((item) => {
        item.checked = !!event.target.checked;
      });

      wordBox.querySelector(".word-translations").style.visibility = translationDisplaied ? "visible" : "hidden"
    };
  });

  let displayWordSamples = false;

  try {
    displayWordSamples = JSON.parse(localStorage.getItem("displayWordSamples")) || false;
  } catch (error) {
    //
  }

  displayWordSamplesButton.checked = displayWordSamples;

  displayWordSamplesButton.onchange = (event) => {
    translationDisplaied = !!event.target.checked;

    wordBox.querySelector(".word-samples").style.visibility = translationDisplaied ? "visible" : "hidden";
    localStorage.setItem("displayWordSamples", JSON.stringify(translationDisplaied));
  }

  let wordDisplayed = true;

  displayWordButton.forEach((item) => {
    item.onchange = (event) => {
      wordDisplayed = !!event.target.checked;

      displayWordButton.forEach((item) => {
        item.checked = wordDisplayed;
      });

      wordBox.querySelector(".word-value").style.visibility = wordDisplayed ? "visible" : "hidden";
      wordBox.querySelector(".word-transcription").style.visibility = wordDisplayed && transcriptionDisplayed ? "visible" : "hidden";
    };
  });


  let transcriptionDisplayed = true
  transcriptionButton.onchange = (event) => {
    transcriptionDisplayed = !!event.target.checked

    wordBox.querySelector(".word-transcription").style.visibility = transcriptionDisplayed ? "visible" : "hidden"
  }

  try {
    playSamples = JSON.parse(localStorage.getItem("playSamples"));
  } catch (error) {
    //
  }

  playSamplesButton.checked = playSamples;

  playSamplesButton.onchange = (event) => {
    playSamples = !!event.target.checked;

    localStorage.setItem("playSamples", JSON.stringify(playSamples));
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
      handleFirstAudioEnd();
    } else if (handleSecondAudioEnd) {
      handleSecondAudioEnd();
    } else if (handleThirdAudioEnd) {
      handleThirdAudioEnd();
    } else {
      goToWord();
    }
  }

  const setSkipPauseDisabled = (disabled) => {
    skipPauseButton.forEach((item) => {
      if (disabled) {
        item.setAttribute("disabled", disabled);
      } else {
        item.removeAttribute("disabled");
      }
    });
  };

  skipButton.forEach((item) => {
    item.onclick = () => {
      goToWord();
    };
  });

  skipPauseButton.forEach((item) => {
    item.onclick = () => {
      console.log("skipPauseButton !!!")

      skipPause();
    };
  });

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
      const word = dict[index];
      const samplesDict = dictMapSamples[packName];
      const fullDescription = allWordsMap[word];
      const fullDescription2 = enMap[word];
      const heightPriorityDescription3 = heightPriorityWordsMap[word];

      if (samplesDict) {
        currentSamples = samplesDict[index];
      } else {
        currentSamples = null;
      }

      console.log("heightPriorityDescription3: ", heightPriorityDescription3)

      currentWord = word;
      currentDescription = fullDescription;
      currentDescription2 = fullDescription2;
      currentDescription3 = heightPriorityDescription3;
    }

    const listItemIndex = currentList.dict.findIndex((item) => {
      return item[0] === currentSelection[0] && item[1] === currentSelection[1]
    })

    localStorage.setItem("current-selection-index", String(listItemIndex))

    const li = Array.from(document.querySelectorAll(".current-playlist ul li"))[listItemIndex]
    const currentSelectedLI = document.querySelector(".playlist-item-selected")

    const currentSelectedLIUnknownChecked = li.querySelector("input.word-checkbox-unknown").checked
    const currentSelectedLIKnownChecked = li.querySelector("input.word-checkbox-known").checked
    const currentSelectedLISemiknownChecked = li.querySelector("input.word-checkbox-semiknown").checked

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

    currentCheckbox.checked = currentSelectedLIUnknownChecked;
    currentCheckboxSemiknown.checked = currentSelectedLISemiknownChecked;
    currentCheckboxKnown.checked = currentSelectedLIKnownChecked;

    renderAll()

    playAudio(afterPlayAudio)
  }

  const currentCheckboxClick = (selector) => {
    const index = currentList.dict.findIndex((item) => {
      return item[0] === currentSelection[0] && item[1] === currentSelection[1]
    });

    const li = Array.from(document.querySelectorAll(".current-playlist ul li"))[index];

    li.querySelector(`input${selector}`).click();

    if (autoSkipOnCheckCheckboxOption.checked) {
      skipButton[0].click();
    }
  };

  currentCheckboxSemiknown.onclick = () => {
    currentCheckboxClick(".word-checkbox-semiknown");
  };

  currentCheckboxKnown.onclick = () => {
    currentCheckboxClick(".word-checkbox-known");
  };

  currentCheckbox.onclick = () => {
    currentCheckboxClick(".word-checkbox-unknown");
  };

  // currentSamples

  function renderСurrentPlaylist() {
    const content = currentList ? `
      <ul>
        ${currentList.dict.map((item, arrayIndex) => {
      const pack = item[0]
      const index = item[1]
      const dict = dictMap[pack]
      let word = ""

      word = dict[index]

      return `
        <li>
          <div>
            <input class="word-checkbox-item word-checkbox-unknown" id="word-checkbox-${pack}-${index}" ${checkedWords.has(`${pack}-${index}`) ? 'checked="checked"' : ''} type="checkbox" onchange="handleChangeWordCheckbox(event, ${index}, '${pack}', '')" />
            <input class="word-checkbox-item word-checkbox-semiknown" style="display: none;" id="word-checkbox-semiknown-${pack}-${index}" ${checkedWordsSemiknown.has(`${pack}-${index}`) ? 'checked="checked"' : ''} type="checkbox" onchange="handleChangeWordCheckbox(event, ${index}, '${pack}', 'semiknown')" />
            <input class="word-checkbox-item word-checkbox-known" style="display: none;" id="word-checkbox-known-${pack}-${index}" ${checkedWordsKnown.has(`${pack}-${index}`) ? 'checked="checked"' : ''} type="checkbox" onchange="handleChangeWordCheckbox(event, ${index}, '${pack}', 'known')" />     
          </div>
          <div class="list-item-caption" onclick="handleSelectDictItem('${pack}', ${index})"><div class="list-item-caption__index">${leadingZeros(arrayIndex + 1)}</div>${word}</div>
        </li>
      `
    }).join('')}
      </ul>
    ` : ''

    currentPlaylist.innerHTML = content
  }

  function renderCurrentDescription() {
    let content

    const trimUselessSample = (text) => {
      return text.replace(/[^A-Za-z]+$/, "")
    }

    if (currentDescription || currentDescription3) {
      const clearTranscription = (text, word) => {
        text = text.replace(/\[(?:[^\n]*)\]/gi, "");

        if (word) {
          text = text.replace(new RegExp(word, "gi"), "———");
        }

        return text;
      };

      /*
          "blimey": {
            "en": "blimey",
              "transcription": "['blaɪmɪ]",
              "translations": [
              {
                "translations": [
                  "межд.; разг.; уст.",
                  "чтоб мне провалиться!, иди ты!"
                ],
                "examples": []
              }
            ]
          },
      */

      console.log("currentDescription3: ", currentDescription3);

      content = `
        <div class="word-box-inner ${reversedWordDescription.checked ? `word-box-inner_reversed` : ""}" >
          <div class="word-value-box">
            <div class="word-value" style="${wordDisplayed ? 'visibility: visible;' : 'visibility: hidden;'}">
              ${currentDescription3 ? currentDescription3.displayEn : currentDescription.en}
            </div>
            <div class="word-transcription" style="${wordDisplayed && transcriptionDisplayed ? 'visibility: visible;' : 'visibility: hidden;'}">${(currentDescription && currentDescription.transcription) || (currentDescription2 ? currentDescription2.transcription : "")}</div>
          </div>
          <div class="word-translations" style="${translationDisplaied ? 'visibility: visible;' : 'visibility: hidden;'}">
            ${currentDescription3 ? `<div>&#x2022; ${currentDescription3.ru}</div>` : ""}
            ${currentDescription ? currentDescription.blocks.map((item) => {
              const result = item.translations.filter((item) => item).map((itemWord) => itemWord.split(",").join(", ")).join("; ").trim();
              
              if (result === ",") {
                return "";
              }
              
              return `<div>&#x2022; ${result}</div>`;
            }).join("") : ""}
            ${(currentDescription && currentDescription.yaTranslation) ?  `<div>&#x2022; ${currentDescription.yaTranslation}</div>` : ""}
            ${currentDescription2 ? currentDescription2.translations.map((item) => {
              return `<div>&#x2022; ${clearTranscription(item.translations.join("; "), (currentDescription && currentDescription.en) || (currentDescription3 && currentDescription3.displayEn))}</div>`;      
            }).join("") : ""}
          </div>
          <div class="word-samples" style="visibility: ${displayWordSamples ? "visible" : "hidden"};">
            ${currentSamples ? currentSamples.map((item) => {
              const trimmed = trimUselessSample(item);

              return trimmed.trim().length ? `<div>- ${trimmed}</div>` : "";
            }).join("") : ""}
          </div>
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
          setSkipPauseDisabled("disabled");

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

            setSkipPauseDisabled(null);
            handleFirstAudioEnd = () => {
              setSkipPauseDisabled("disabled");

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

            setSkipPauseDisabled(null);

            handleSecondAudioEnd = () => {
              handleSecondAudioEnd = null;
              setSkipPauseDisabled("disabled");
              translationDescriptor = null;

              thirdEnd();
            };

            translationDescriptor = setTimeout(handleSecondAudioEnd, audioExamples ? 500 : (delayAfter || 750))
          }

          const thirdEnd = () => {
            if (audioExamples) {
              currentPayingAudio = audioExamples

              setSkipPauseDisabled("disabled");
              audioExamples.play(() => {
                finish()
              }, (delayAfter || 750), () => {
                setSkipPauseDisabled(null);
              });

              handleThirdAudioEnd = () => {
                handleThirdAudioEnd = null;

                audioExamples.stop();
                finish()
              };
            } else {
              finish()
            }
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

          if (currentSelection && currentSamples && currentSamples.length && playSamples) {
            const packIndex = currentSelection[0];
            const wordIndex = currentSelection[1];

            const wordSamples = dictMapSamples[packIndex][wordIndex]

            if (wordSamples && wordSamples.length) {
              const fileNames = wordSamples.map((item) => (!item || !/[A-Za-z]/.test(item)) ? "" : item).map((item, index) => {
                if (!item) {
                  return null;
                } else {
                  return `./${packIndex}/samples/${leadingZeros(wordIndex)}_${leadingZeros(index + 1)}.mp3`;
                }
              }).filter(item => item).slice(0, playSamplesCount);

              if (fileNames && fileNames.length) {
                audioExamples = new AudioPackPlayer(fileNames, soundValue);
              } else {
                audioExamples = null;
              }
            } else {
              audioExamples = null;
            }
          } else {
            audioExamples = null;
          }

          currentPayingAudio = (currentAudioBackwardTranslationDirection ? audioRu : audioEng);

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
      handleSelectDelayAfterValueChange({target: {value: selectDelayAfterValue}})
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

    currentList = (localStorageCurrentSelection ? getListByName(localStorageCurrentSelection) : null) || null
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

  if (localStorageCurrentSelectionIndex !== undefined && !!currentList) {
    const item = currentList.dict[parseInt(localStorageCurrentSelectionIndex, 10)]

    if (item) {
      handleSelectDictItem(item[0], item[1], true)
    }
  }

  document.querySelector(".sound-volume").value = soundValue

  function downloadAsFile(data, fileName) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  window.handleSaveChecked = () => {
    const checkedWords = localStorage.getItem("checked-words-tuples") ?? [];
    const checkedWordsSemiknown = localStorage.getItem("checked-words-semiknown-tuples") ?? [];
    const checkedWordsKnown = localStorage.getItem("checked-words-known-tuples") ?? [];

    downloadAsFile(checkedWords, "checked-words-tuples.json");
    downloadAsFile(checkedWordsSemiknown, "checked-words-semiknown-tuples.json");
    downloadAsFile(checkedWordsKnown, "checked-words-known-tuples.json");
  }

  document.addEventListener("keydown", (event) => {
    const key = event.key;

    console.log("key: ", key);

    if (key === "w") {
      displayWordButton[0].click();

      return;
    }

    if (key === "t" || key === "2") {
      displayTranslationButton[0].click();

      return;
    }

    if (key === "ArrowRight" || key === "3") {
      nextWordButton.click();

      return;
    }

    if (key === "ArrowLeft") {
      prevWordButton.click();

      return;
    }

    if (key === "p" || key === "6") {
      playPauseButton.click();

      return;
    }

    if (event.code === "Space" || key === "1") {
      currentCheckbox.click();

      return;
    }
  });


  // Checked in range
  (() => {
    const refreshCheckedCountBtt = document.querySelector(".js-refresh-checked-count");
    const reverseCheckedInRangeBtt = document.querySelector(".js-reverse-checked-in-range");
    const checkedCountText = document.querySelector(".js-checked-count");

    refreshCheckedCountBtt.addEventListener("click", (event) => {
      const checkboxes = Array.from(document.querySelectorAll(".word-checkbox-item"));
      const targetCheckboxes = checkboxes.slice(indexFrom, indexTo + 1);
      const checkedCount = targetCheckboxes.reduce((result, item) => {
        result += item.checked ? 1 : 0;

        return result;
      }, 0);

      checkedCountText.innerHTML = `${checkedCount} / ${(indexTo - indexFrom) + 1}`
    });

    reverseCheckedInRangeBtt.addEventListener("click", (event) => {
      const checkboxes = Array.from(document.querySelectorAll(".word-checkbox-item"));
      const targetCheckboxes = checkboxes.slice(indexFrom, indexTo + 1);

      targetCheckboxes.forEach((item) => {
        item.click();
      });
    });

  })();

})()

// extract a word feature
const extractAWordFeature = () => {
  const searchInput = document.querySelector(".js-search-a-word__search")
  const enText = document.querySelector(".js-search-a-word__en")
  const transText = document.querySelector(".js-search-a-word__trans")
  const transRu = document.querySelector(".js-search-a-word__ru")
  const currentWord = document.querySelector(".js-search-a-word__current-word")
  const getWord = document.querySelector(".js-search-a-word__get")

  const fetchWordFromStore = () => {
    const item = allWordsMap[searchInput.value]

    if (!item) {
      enText.innerHTML = "";
      transText.innerHTML = "";
      transRu.innerHTML = "";

      return
    }

    enText.innerHTML = item.en;
    transText.innerHTML = item.transcription;
    transRu.innerHTML = (item.ru ? item.ru + "; " : "") + item.blocks.map((item) => {
      return `${item.translations.filter((item) => item).map((itemWord) => itemWord.split(",").join(", ")).join("; ")}</div>`
    }).join(";");
  }

  searchInput.onblur = () => {
    fetchWordFromStore();
  }

  currentWord.onclick = () => {
    const wordValue = document.querySelector(".word-value");

    searchInput.value = wordValue.innerHTML;

    fetchWordFromStore();
  }

  getWord.onclick = () => {
    fetchWordFromStore();
  }
}

extractAWordFeature();


document.querySelector(".switch-word-list-display").onclick = () => {
  const currentPlaylistBox = document.querySelector(".current-playlist-box");

  currentPlaylistBox.style.visibility = currentPlaylistBox.style.visibility === "hidden" ? "" : "hidden";
};

window.sprintMode = "Simple";

// Sprint modes
(() => {
  const sprintSimple = document.querySelector("#sprint-simple");
  const sprintRuEn = document.querySelector("#sprint-ru-en");
  const sprintEnRu = document.querySelector("#sprint-en-ru");

  const modeSimpleBox = document.querySelector(".js-fast-mode-simple");
  const modeRuEnBox = document.querySelector(".js-fast-mode-ru-en");

  const modeRuEnBoxWord = modeRuEnBox.querySelector(".js-word");
  const modeRuEnBoxTranslation = modeRuEnBox.querySelector(".js-translation");

  sprintSimple.addEventListener("click", () => {
    sprintSimple.checked = true;
    sprintRuEn.checked = false;
    sprintEnRu.checked = false;

    modeSimpleBox.style.display = "flex";
    modeRuEnBox.style.display = "none";

    window.sprintMode = "Simple";
  });

  sprintRuEn.addEventListener("click", () => {
    sprintSimple.checked = false;
    sprintRuEn.checked = true;
    sprintEnRu.checked = false;

    modeSimpleBox.style.display = "none";
    modeRuEnBox.style.display = "flex";

    modeRuEnBoxWord.style.display = "block";
    modeRuEnBoxTranslation.style.display = "none";

    window.sprintMode = "RuEn";
  });

  sprintEnRu.addEventListener("click", () => {
    sprintSimple.checked = false;
    sprintRuEn.checked = false;
    sprintEnRu.checked = true;

    modeSimpleBox.style.display = "none";
    modeRuEnBox.style.display = "flex";

    modeRuEnBoxWord.style.display = "none";
    modeRuEnBoxTranslation.style.display = "block";

    window.sprintMode = "EnRu";
  });

})();

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

