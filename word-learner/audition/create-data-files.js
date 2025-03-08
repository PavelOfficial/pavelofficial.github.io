var fs = require('fs');
var path = require('path');

var getFiles = function (dir, files_){
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files){
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()){
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
};

const leadingZeros = (num, count) => {
  return String('0000000000000' + num).slice(-count)
}

const getFilesStats = (files) => {
  return files.map((filePath) => {
    const { mtime } = fs.statSync(filePath)

    return {
      filePath,
      birthtime: mtime,
    }
  })
}

const sortFilesByBirthtime = (files) => {
  return files.sort((item1, item2) => {
    if (item1.birthtime.getTime() > item2.birthtime.getTime()) {
      return 1
    }

    if (item1.birthtime.getTime() < item2.birthtime.getTime()) {
      return -1
    }

    return 0
  })
}

const sortFilesByName = (files) => {
  return files.sort((item1, item2) => {
    if (item1.filePath > item2.filePath) {
      return 1
    }

    if (item1.filePath < item2.filePath) {
      return -1
    }

    return 0
  })
}

let startNumber = 65;
const audioFiles = getFiles('./additionalAudio')
const srcFileContent = JSON.parse(fs.readFileSync("./texts/0064.json", { encoding: "utf8" }))

sortFilesByBirthtime(getFilesStats(audioFiles)).forEach((file) => {
  fs.copyFileSync(file.filePath, `./audio/${leadingZeros(startNumber, 4)}.mp3`, fs.constants.COPYFILE_EXCL)
  srcFileContent.audio = `/audition/audio/${leadingZeros(startNumber, 4)}.mp3`
  fs.writeFileSync(`./texts/${leadingZeros(startNumber, 4)}.json`, JSON.stringify(srcFileContent, null, 2), { encoding: "utf8" })

  startNumber++;
})
