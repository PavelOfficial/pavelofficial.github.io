const words = known.rest.slice(0, 10000)

words.forEach((word) => {
  const shakeCount = words.length * 10

  for (let i = 0; i < shakeCount; i += 1) {
    const index1 = Math.floor(Math.random() * words.length);
    const index2 = Math.floor(Math.random() * words.length);
    const tempItem = words[index1]
    words[index1] = words[index2]
    words[index2] = tempItem
  }

})

function extractUnkown() {
  const all = Array.from(document.querySelectorAll("tr"))
  const selected = Array.from(
    document.querySelectorAll("tr input")
  )

  const selectedResult = Array.from(selected).filter((input) => {
    return input.checked
  }).map((input) => {
    return input.parentNode.parentNode
  })

  const result = all.reduce((result, item, index) => {
    if (selectedResult.indexOf(item) !== -1) {
      result.unknown.push(words[index])
    } else {
      result.known.push(words[index])
    }

    return result
  }, {
    known: [],
    unknown: [],
  })

  document.querySelector("#root").innerHTML = document.querySelector("#root").innerHTML + '<br /><br /><br />known: ' + JSON.stringify(result.known) + '<br /><br /><br /><br />unknown: ' + JSON.stringify(result.unknown)
}

let content = ""
content += `<h3>Фильтрация</h3>`
content += `
  <div>
    <table style="border-collapse: collapse;">
        ${(() => {
  const results = words.map((item, index) => {
    return `
              <tr>
                <td>${index+1}</td>
                <td>${item.ru}</td>
                <td>${item.transcription}</td>
                <td>${item.en}</td>
              </tr>
            `
  })

  // console.log("results: ", results)

  return results.join("")
})()}
    </table>
  </div>
`;

document.querySelector("#root").innerHTML = content
