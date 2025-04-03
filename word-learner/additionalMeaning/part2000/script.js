(() => {
  const contentBox = document.querySelector("#content")
  const map = new Map([])
  let html = ""
  const data = [d1,d2,d3,d4,d5,d6,d7]

  data.forEach((itemArr, ) => {
    itemArr.forEach((item) => {
      const index = item.en + "-" + item.groupIndex

      if (map.has(index)) {
        const prevRu = map.get(index).ru
        const nextRu = Array.isArray(item.ru) ? item.ru : [item.ru]

        if (Array.isArray(prevRu)) {
          map.get(index).ru = [...prevRu, ...nextRu]
        } else {
          map.get(index).ru = [prevRu, ...nextRu]
        }
      } else {
        map.set(index, item)
      }
    })
  })

  const array = Array.from(map).map((item) => item[1])

  array.map((item) => {
    if (Array.isArray(item.ru)) {
      const result = item.ru.reduce((res, item) => {
        res.add(item)

        return res
      }, new Set([]))

      item.ru = Array.from(result)
    } else {
      item.ru = [item.ru]
    }
  })

  const resHTML = array.map((item) => {
    return `<tr><td>${item.en}</td><td>${item.transcription}</td><td>${Array.isArray(item.ru) ? item.ru.join(", ") : item.ru}</td></tr>`
  }).join("");

  contentBox.innerHTML = `<table class="tbl">${resHTML}</table>`;
})();
