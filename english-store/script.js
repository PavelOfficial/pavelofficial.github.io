const box = document.querySelector("#root")
const renderList = () => {
      return dict2000.map((item) => {
            return `<tr><td><input class="abstract" style="width: 20px; height: 20px" type="checkbox" /></td><td><input class="socio" style="width: 20px; height: 20px" type="checkbox" /></td><td><input class="unknown" style="width: 20px; height: 20px" type="checkbox" /></td><td>${item.en}</td><td>${item.ru}</td><td>${item.transcription}</td></tr>`
      }).join("")
}

box.innerHTML = `
  <table style="font-size: 18px; font-family: Arial;">
    <tbody>
      ${renderList()}
    </tbody>
  </table>
  <button id="extract">
    Extract
  </button>
  <div id="result"></div>
`

document.addEventListener("click", (event) => {
      if (event.target.id === "extract") {
            const all = Array.from(document.querySelectorAll("tr"))
            const selectedAbsctract = Array.from(document.querySelectorAll("tr[style='background: #eeffee;']"))
            const selectedSocio = Array.from(document.querySelectorAll("tr[style='background: #eeeeff;']"))
            const selectedUnknown = Array.from(document.querySelectorAll("tr[style='background: #eefefe;']"))
            // console.log("selected: ", selected)
            const resultAbstract = all.reduce((semiResult, item, index) => {
                  if (selectedAbsctract.indexOf(item) !== -1) {
                        semiResult.push(dict2000[index])
                  }

                  return semiResult
            }, [])

            const resultSocio = all.reduce((semiResult, item, index) => {
                  if (selectedSocio.indexOf(item) !== -1) {
                        semiResult.push(dict2000[index])
                  }

                  return semiResult
            }, [])

            const resultUnknown = all.reduce((semiResult, item, index) => {
                  if (selectedUnknown.indexOf(item) !== -1) {
                        semiResult.push(dict2000[index])
                  }

                  return semiResult
            }, [])

            document.querySelector("#result").innerHTML = JSON.stringify(resultAbstract) + "<br /><br />" + JSON.stringify(resultSocio) + "<br /><br />" + JSON.stringify(resultUnknown)
      }
})

document.addEventListener("change", (event) => {
      const target = event.target

      if (target.className === "abstract") {
            if (target.checked) {
                  target.parentNode.parentNode.setAttribute("style", "background: #eeffee;")
            } else {
                  target.parentNode.parentNode.setAttribute("style", "")
            }
      }

      if (target.className === "socio") {
            if (target.checked) {
                  target.parentNode.parentNode.setAttribute("style", "background: #eeeeff;")
            } else {
                  target.parentNode.parentNode.setAttribute("style", "")
            }
      }

      if (target.className === "unknown") {
            if (target.checked) {
                  target.parentNode.parentNode.setAttribute("style", "background: #eefefe;")
            } else {
                  target.parentNode.parentNode.setAttribute("style", "")
            }
      }

})


