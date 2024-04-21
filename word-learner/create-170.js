const fs = require('fs')
const result = []

new Array(170).fill(null).map((item, index) => {
  result.push(["170", index])
})

const singleShuffle = (shuffled) => {
  const shuffledLength = shuffled.length

  if (shuffledLength > 0) {
    shuffled.forEach((item, index) => {
      const replaceIndex = Math.floor(Math.random() * shuffledLength)

      const temp = shuffled[index]
      shuffled[index] = shuffled[replaceIndex]
      shuffled[replaceIndex] = temp
    }, [])
  }
}

new Array(170).fill(null).forEach(() => {
  singleShuffle(result)
})

fs.writeFileSync('./170.json', JSON.stringify(result, null, 2))
