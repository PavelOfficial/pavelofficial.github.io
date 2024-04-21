var fs = require('fs');
var path = require('path');

var getFiles = function (dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
};

const list = getFiles('./900/texts').map((name) => {
  return {
    name: name,
    text: fs.readFileSync(name, {encoding: "utf8"}),
  }
}).sort((item1, item2) => {
  if (item1.name > item2.name) {
    return 1
  }

  if (item1.name < item2.name) {
    return -1
  }

  return 0
})

const applyTranscription = (data) => {
  data.transcription = data.blocks.reduce((result, item) => {
    if (result) {
      return result
    }

    return item.transcription
  }, "")

}

const result = JSON.parse(fs.readFileSync("./all-words-map.json", { encoding: "utf8" }))

for (let i = 0; i < list.length - 1; i++) {
  const data = JSON.parse(list[i].text)

  applyTranscription(data)

  result[data.en] = data
}

fs.writeFileSync('./all-words-map-new.json', JSON.stringify(result, null, 2))
