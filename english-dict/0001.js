(() => {
  document.getElementById("tts_textarea").value = "Карл у Клары украл кораллы"
  document.getElementById("tts_go").click()

  setTimeout(() => {
    document.getElementById("tts_down").click()
  }, 5000)
})()



(() => {
  const triggerKeyboardEvent = () => {
    target.dispatchEvent(new Event('focus'));
    target.dispatchEvent(new KeyboardEvent('keypress',{'key':' '}));
  }

  const target = document.getElementById("fakeArea")

  target.value = "value"
  triggerKeyboardEvent()

  setTimeout(() => {
    target.value = "name"
    triggerKeyboardEvent()
  }, 1000)
})()

(() => {
  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  // Start file download.
  download('hello.txt', 'This is the content of my file ');
})()

(() => {
  Array.from($$("#WordsTable tr.wrow td:nth-child(1) span")).map((item) => {
    const result = String(item.onclick).match(/\'([\s\S]*)\'/)

    return result ? result[1] : null
  })
})()

// Портиями по 100 слов
// Грабить изначальную страницу




