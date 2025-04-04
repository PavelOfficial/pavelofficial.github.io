;(() => {
  const mapper = (name) => {
    const index = enWords12000Delta.indexOf(name);

    if (index === -1) {
      console.log("ALERT INDEX -1");
    }

    return ["12000", index];
  };

  const names = data.names.map(mapper);
  const specific = data.specific.map(mapper);
  const understood = data.understood.map(mapper);
  const common = data.common.map(mapper);
  const superSpecific = data.superSpecific.map(mapper);

  console.log("names: ,", JSON.stringify(names));
  console.log("specific: ", JSON.stringify(specific));
  console.log("understood: ", JSON.stringify(understood));
  console.log("common: ", JSON.stringify(common));
  console.log("superSpecific: ", JSON.stringify(superSpecific));

})();
