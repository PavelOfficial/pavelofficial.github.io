const auditionUrlsA1EnglishCounsel = [
  "/audition/texts/0001.json",
  "/audition/texts/0002.json",
  "/audition/texts/0003.json",
  "/audition/texts/0004.json",
  "/audition/texts/0005.json",
  "/audition/texts/0006.json",
  "/audition/texts/0007.json",
  "/audition/texts/0008.json",
  "/audition/texts/0009.json",
  "/audition/texts/0010.json",
  "/audition/texts/0011.json",
  "/audition/texts/0012.json",
  "/audition/texts/0013.json",
  "/audition/texts/0014.json",
  "/audition/texts/0015.json",
]

const auditionUrlsA2EnglishCounsel = [
  "/audition/texts/0018.json",
  "/audition/texts/0019.json",
  "/audition/texts/0020.json",
  "/audition/texts/0021.json",
  "/audition/texts/0022.json",
  "/audition/texts/0023.json",
  "/audition/texts/0024.json",
  "/audition/texts/0025.json",
  "/audition/texts/0026.json",
  "/audition/texts/0027.json",
  "/audition/texts/0028.json",
  "/audition/texts/0029.json",
  "/audition/texts/0030.json",
]

const auditionUrlsB1EnglishCounsel = [
  "/audition/texts/0031.json",
  "/audition/texts/0032.json",
  "/audition/texts/0033.json",
  "/audition/texts/0034.json",
  "/audition/texts/0035.json",
  "/audition/texts/0036.json",
  "/audition/texts/0037.json",
  "/audition/texts/0038.json",
  "/audition/texts/0039.json",
  "/audition/texts/0040.json",
  "/audition/texts/0041.json",
  "/audition/texts/0042.json",
]

const auditionUrlsC1EnglishCounsel = [
  "/audition/texts/0043.json",
  "/audition/texts/0044.json",
  "/audition/texts/0045.json",
  "/audition/texts/0046.json",
  "/audition/texts/0047.json",
  "/audition/texts/0048.json",
  "/audition/texts/0049.json",
  "/audition/texts/0050.json",
  "/audition/texts/0051.json",
  "/audition/texts/0052.json",
]

const auditionUrlsC1EnglishCounselGreen = [
  "/audition/texts/0053.json",
  "/audition/texts/0054.json",
  "/audition/texts/0055.json",
  "/audition/texts/0056.json",
  "/audition/texts/0057.json",
  "/audition/texts/0058.json",
  "/audition/texts/0059.json",
  "/audition/texts/0060.json",
  "/audition/texts/0061.json",
  "/audition/texts/0062.json",
  "/audition/texts/0063.json",
  "/audition/texts/0064.json",
];

const auditionUrlsTales = [
  "/audition/texts/1001.json",
  "/audition/texts/1002.json",
  "/audition/texts/1003.json",
  "/audition/texts/1004.json",
  "/audition/texts/1005.json",
  "/audition/texts/1006.json",
  "/audition/texts/1007.json",
  "/audition/texts/1008.json",
];

const auditionUrlsTaleTexts = [
  "/audition/texts/2001.json",
  "/audition/texts/2002.json",
  "/audition/texts/2003.json",
  "/audition/texts/2004.json",
  "/audition/texts/2005.json",
  "/audition/texts/2006.json",
  "/audition/texts/2007.json",
];

const leadingZeros = (num, count) => {
  return String('0000000000000' + num).slice(-count)
}

const createJSONList = (from, to) => {
  const list = []

  for (let j = from; j <= to; j++) {
    list.push(`/audition/texts/${leadingZeros(j, 4)}.json`)
  }

  return list
}

const eslCyberListeningLabDifficult = createJSONList(65, 98);

console.log("eslCyberListeningLabDifficult: ", eslCyberListeningLabDifficult)

const categories = [
  {
    title: "A1 English Counsel",
    auditions: auditionUrlsA1EnglishCounsel,
  },
  {
    title: "A2 English Counsel",
    auditions: auditionUrlsA2EnglishCounsel,
  },
  {
    title: "B1 English Counsel",
    auditions: auditionUrlsB1EnglishCounsel,
  },
  {
    title: "C1 English Counsel",
    auditions: auditionUrlsC1EnglishCounsel,
  },
  {
    title: "C1 English Counsel Green",
    auditions: auditionUrlsC1EnglishCounselGreen,
  },
  {
    title: "ESL Cyber Listening Lab (Difficult)",
    auditions: eslCyberListeningLabDifficult,
  },
  {
    title: "Tales",
    auditions: auditionUrlsTales,
  },
  {
    title: "Tale texts",
    auditions: auditionUrlsTaleTexts,
  },
]
