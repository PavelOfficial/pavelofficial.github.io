
(() => {
  const contentDiv = document.querySelector("#content")

  // console.log("allMeanings", allMeanings)

  // 0 25000 -
  const list = allMeanings.map((meaning, index) => {
    if (!(index >= 10001 && index <= 20000)) {
      return "";
    }

    if (meaning === null) {
      return `<tr><td colspan="5">-----------------------------------------------------------------------</td></tr>`
    }

    return `<tr><td><input type="checkbox" data-use="true" name="use-${index}" /></td><td>${meaning.en}</td><td>${meaning.transcription}</td><td>${meaning.ru}</td><td>
      <input type="checkbox" data-color="#ffaaaa" name="group-${index}-1" value="" />
      <input type="checkbox" data-color="#ffffaa" name="group-${index}-2" value="" />
      <input type="checkbox" data-color="#ffaaff" name="group-${index}-3" value="" />
      <input type="checkbox" data-color="#aaffaa" name="group-${index}-4" value="" />
      <input type="checkbox" data-color="#aaffff" name="group-${index}-5" value="" />
      <input type="checkbox" data-color="#aaaaff" name="group-${index}-6" value="" />
      <input type="checkbox" data-color="#aaaaaa" name="group-${index}-7" value="" />
      <input type="checkbox" data-color="#77aa77" name="group-${index}-8" value="" />
      <input type="checkbox" data-color="#aa7777" name="group-${index}-9" value="" />
      <input type="checkbox" data-color="#7777aa" name="group-${index}-10" value="" />
    </td></tr>`
  }).join("")


  contentDiv.innerHTML = "<table><tbody>" + list + "</tbody></table>"

  const localStorageStore = localStorage.getItem("store")
  const store = localStorageStore ? JSON.parse(localStorageStore) : {}

  const applyInputChange = (input) => {

  }

  const applyTrColor = (input) => {
    const color = input.getAttribute("data-color")

    if (color) {
      if (input.checked) {
        input.closest(`tr`).style.backgroundColor = color
      } else {
        input.closest(`tr`).style.backgroundColor = ""
      }

      const useInput = input.closest(`tr`).querySelector("input[data-use]")
      if (useInput.checked !== input.checked) {
        useInput.click()
      }
    }
  }

  Object.entries(store).forEach(([key, item]) => {
    const input = document.querySelector(`[name=${key}]`)

    if (input.type === "checkbox") {
      input.setAttribute("checked", item)
    } else {
      input.setAttribute("value", item)
    }

    applyTrColor(input)
  })

  document.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
      if (event.target.checked) {
        store[event.target.name] = true
      } else {
        delete store[event.target.name]
      }
    } else {
      store[event.target.name] = event.target.value
    }

    applyTrColor(event.target)
    try {
      localStorage.setItem("store", JSON.stringify(store))
    } catch (error) {
      alert("!!!!!!")
    }
  })

  window.addEventListener("scroll", () => {
    localStorage.setItem("window.pageYOffset", String(window.pageYOffset))
  })

  const scrollTop = localStorage.getItem("scrollTop") || "0"

  window.scrollTo({ top: parseInt(scrollTop, 10) })

  window.handleSaveResult = () => {
    const allSelected = new Set()
    const groups = new Map()

    Object.entries(store).forEach(([item, index]) => {
      if (/^use\-/.test(item)) {
        const index = parseInt(item.replace(/^use\-/, ""), 10)
        allSelected.add(index)
      }

      if (/^group\-/.test(item)) {
        const numbers = item.replace(/^group\-/, "")
        const [index, groupIndex] = numbers.split("-").map((item) => parseInt(item, 10))

        groups.set(index, groupIndex)
      }
    })

    const result = []

    allMeanings.forEach((meaning, index) => {
      if (allSelected.has(index)) {
        const groupIndex = groups.get(index)

        if (groupIndex !== undefined) {
          const groupMeaning = result.find((item) => {
            return item.groupIndex === groupIndex && item.en === meaning.en
          })

          if (groupMeaning) {
            groupMeaning.ru += "; " + meaning.ru
          } else {
            result.push({ ...meaning, groupIndex })
          }
        } else {
          result.push({ ...meaning, groupIndex: null })
        }
      }
    })

    console.log("result", JSON.stringify(result))
  }

})();
