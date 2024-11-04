



class SomeProcess {
  step1Descriptor = null

  step2Descriptor = null

  step1Reject = null

  step2Reject = null

  timeout = 3000

  constructor() {

  }

  awaitForTimeout(timeout, descriptorSetter) {
    return new Promise((resolve, reject) => {
      const timeoutDescriptor =  setTimeout(() => {
        resolve()
      }, timeout)

      descriptorSetter(timeoutDescriptor, reject)
    })
  }

  start = async () => {
    const data = []

    await this.awaitForTimeout(this.timeout, (timeoutDescriptor, reject) => {
      this.step1Descriptor = timeoutDescriptor
      this.step1Reject = reject
    })

    console.log("step 1 ready")
    data.push(1)

    await this.awaitForTimeout(this.timeout, (timeoutDescriptor, reject) => {
      this.step2Descriptor = timeoutDescriptor
      this.step2Reject = reject
    })

    console.log("step 2 ready")
    data.push(2)

    return data
  }

  interrupt() {
    if (this.step2Reject) {
      this.step2Reject(new Error("Interrupted"))
      clearTimeout(this.step2Descriptor)

      return
    }

    if (this.step1Reject) {
      this.step1Reject(new Error("Interrupted"))
      clearTimeout(this.step1Descriptor)

      return
    }
  }

}


(() => {
  let currentProcess
  const buttonStart = document.querySelector(".button-start");
  const buttonInterrupt = document.querySelector(".button-interrupt");
  const spanStatus = document.querySelector(".span-status");

  buttonStart.onclick = async () => {
    currentProcess = new SomeProcess()

    spanStatus.innerHTML = "processing"
    try {
      const data = await currentProcess.start()
      spanStatus.innerHTML = "finished: " + JSON.stringify(data)
    } catch (error) {
      spanStatus.innerHTML = "error: " + error.message
    }

  }

  buttonInterrupt.onclick = () => {
    currentProcess.interrupt()
  }

})()
