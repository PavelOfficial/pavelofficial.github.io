(() => {
  $$(".open-settings-button").onclick = () => {
    $$(".settings-popup").style.display = ""
  }

  $$(".close-settings-button").onclick = () => {
    $$(".settings-popup").style.display = "none"
  }

  $$(".open-help-button").onclick = () => {
    $$(".help-popup").style.display = ""
  }

  $$(".close-help-button").onclick = () => {
    $$(".help-popup").style.display = "none"
  }

})()
