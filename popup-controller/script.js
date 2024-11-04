const popupContent = document.querySelector(".popup-content")

class Popup {
  isOpened = false

  content = ""

  closeResolve = null

  constructor(newContent) {
    this.content = newContent
  }

  awaitClose() {
    return new Promise((resolve) => {
      this.closeResolve = resolve
    })
  }

  open = async () => {
    this.isOpened = true

    popupContent.innerHTML = this.content

    await this.awaitClose()


    this.isOpened = false

    const data = "popup data: " + this.content

    return data
  }

  close() {
    popupContent.innerHTML = ""

    this.closeResolve()
  }

}

(() => {
  let currentPopup = null

  const popup1button = document.querySelector(".button-popup-1")
  const popup2button = document.querySelector(".button-popup-2")
  const closePopup = document.querySelector(".close-popup")

  const canOpen = () => {
    return !currentPopup || !currentPopup.isOpened
  }

  popup1button.onclick = () => {
    if (!canOpen()) {
      return
    }

    currentPopup = new Popup("Popup 1 CONTENT")

    currentPopup.open()
  }

  popup2button.onclick = () => {
    if (!canOpen()) {
      return
    }

    currentPopup = new Popup("Popup 2 CONTENT")
    currentPopup.open()
  }

  closePopup.onclick = () => {
    currentPopup.close()
  }

  // Popup: <span class="popup-content"

})()

