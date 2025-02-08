(() => {

  let soundValue = 1
  let auditions = null
  let currentAudio = null

  const fetchAuditions = async () => {
    const auditionPromises = auditionUrls.map((url) => {
      return fetch(url)
    })

    const allSettledResult = await Promise.allSettled(auditionPromises)
    const allSettledResultJSONs = await Promise.allSettled(allSettledResult.map((response) => response.value.json()))

    console.log("allSettledResultJSONs all: ", allSettledResultJSONs.map(result => result.value))

    return allSettledResultJSONs.map(result => result.value)
  }

  const render = () => {
    const audioListHtml = `<ul class="themes">${auditions.map((audition) => audition.title).map((item, index) => `<li data-index="${index}" class="themes-li">${item}</li>`).join("")}</ul>`

    document.querySelector('.theme-list-inner').innerHTML = audioListHtml
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
    });
  }

  window.playAudio = () => {
    if (currentAudio.state() === "loaded") {
      currentAudio.play()
    }
  }

  window.pauseAudio = () => {
    if (currentAudio.state() === "loaded") {
      currentAudio.pause()

      console.log("currentAudio.duration(): ", currentAudio.duration())
      console.log("currentAudio.seek(): ", currentAudio.seek())
    }

    console.log("currentAudio: ", currentAudio)
  }

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

  window.onRewindBack5Sec = () =>  rewind(-5);
  window.onRewindBack10Sec = () => rewind(-10);
  window.onRewindBack15Sec = () => rewind(-15);
  window.onRewindNext5Sec = () =>  rewind(5);
  window.onRewindNext10Sec = () => rewind(10);
  window.onRewindNext15Sec = () => rewind(15);

  const initFeatures = () => {
    document.addEventListener("click", (event) => {
      const closestThemesLi = event.target.closest(".themes-li")
      if (closestThemesLi) {
        const index = parseInt(closestThemesLi.getAttribute("data-index"), 10)

        selectThemeItem(closestThemesLi, index)
      }


    })
  }

  const initApp = async () => {
    auditions = await fetchAuditions()
    render()
    initFeatures()
  }

  initApp()

})()
