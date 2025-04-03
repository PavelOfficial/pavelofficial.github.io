
const PAUSE_TIME = 500;

class AudioPackPlayer {

  afterTimeout = 500;

  fileNames = null;

  pauseDescriptor = null;

  afterFinishHandler = null;

  lastPauseHandler = null;

  currentPlayingSound = null;

  isPlaying = false;

  constructor(fileNames, soundValue) {
    this.fileNames = fileNames;
    this.sounds = fileNames.map((fileName, index) => {
      return new Howl({
        src: [fileName],
        volume: soundValue,
        onend: () => {
          this.startNext(index + 1)
        },
      });
    });
  }

  play(afterFinishHandler, afterTimeout, lastPauseHandler) {
    this.lastPauseHandler = lastPauseHandler;
    this.afterTimeout = afterTimeout;
    this.isPlaying = true;
    this.afterFinishHandler = afterFinishHandler;
    this.sounds[0].play();
    this.currentPlayingSound = this.sounds[0];
  }

  startNext(nextIndex) {
    const sound = this.sounds[nextIndex];

    if (sound) {
      this.currentPlayingSound = null;
      this.pauseDescriptor = setTimeout(() => {
        sound.play();
        this.currentPlayingSound = sound;
      }, PAUSE_TIME);
    } else {
      this.lastPauseHandler();
      this.pauseDescriptor = setTimeout(() => {
        this.isPlaying = false;
        this.afterFinishHandler();
      }, this.afterTimeout || PAUSE_TIME);
    }
  }

  playing() {
    return this.isPlaying;
  }

  stop() {
    clearTimeout(this.pauseDescriptor);

    if (this.currentPlayingSound) {
      this.currentPlayingSound.stop();
    }

    // this.afterFinishHandler();
  }

}
