;(() => {
  const newList = new Set([
    // ...profishencyList10000,
    // ...COCAabridged,
    // ...coca20000,
    ...listTOEFL,
    ...wordlistNPEE,
    // ...listOALD8,
    // ...listSUMOfSomeDicts,
  ]);

  const prevList = new Set([
    ...first2000,
    ...first3000,
    ...first5000,
    ...first8000,
    ...first12000,
    // ...first20000_1,
  ]);

  console.log(Array.from(newList));
  console.log(Array.from(prevList));

  const diff = newList.difference(prevList);

  console.log(Array.from(diff));

})();
