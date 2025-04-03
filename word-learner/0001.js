(() => {
  const leadingZeros = (num) => {
    return `00000000000${num}`.slice(-4)
  }

  function downloadAsFile(data, name, index) {
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'audio/mpeg'});
    a.href = URL.createObjectURL(file);
    a.download = `${leadingZeros(index)}-${name}.mp3`;
    a.click();
  }

  const a1 = async function (name, index) {
    const res = await fetch(`/audio/mp3/${name}.mp3?_=1`)
    const res2 = await res.blob()

    downloadAsFile(res2, name, index)
    console.log("res2: ", res2)
  }

  // a1()
  const urls = [
    "emergencykit",
    "cell",
    "usedcar",
    "universitydegree",
    "alcoholics",
    "assistedliving",
    "expense",
    "car-accident",
    "repairs",
    "cyberbullying",
    "datingviolence",
    "trouble",
    "dietplan",
    "night",
    "divorcelawyer",
    "drive",
    "drugaddiction",
    "petcare",
    "zoo",
    "bank2",
    "fishing",
    "flowershop",
    "dental",
    "insurance",
    "cm2",
    "gardeningshow",
    "problem",
    "fastfood",
    "cleaningservice",
    "home",
    "homesecurity",
    "listening",
    "hospitalstay",
    "checkin",
  ]

  const cycle =  async (prevIndex) => {
    const nextIndex = prevIndex + 1

    await a1(urls[nextIndex], nextIndex)

    if (nextIndex < urls.length - 1) {
      cycle(nextIndex)
    }
  }

  cycle(-1)
})()


