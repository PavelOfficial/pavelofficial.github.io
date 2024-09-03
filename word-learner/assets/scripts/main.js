(() => {
  $$(".open-settings-button").onclick = () => {
    $$(".settings-popup").style.display = ""
  }

  $$(".close-settings-button").onclick = () => {
    $$(".settings-popup").style.display = "none"
  }

})()
