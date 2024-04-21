const fs = require('fs')
const result = []

new Array(897).fill(null).map((item, index) => {
  result.push(["900", index])
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

const firstPart = result.slice(0, 627)
const secondPart = result.slice(627)

new Array(626).fill(null).forEach(() => {
  singleShuffle(firstPart)
})

fs.writeFileSync('./900.json', JSON.stringify([...firstPart, ...secondPart], null, 2))
