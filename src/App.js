import PlayController from './controllers/PlayController.js';

class App {
  #LOTTO_PLAY;

  constructor() {
    this.#LOTTO_PLAY = new PlayController();
  }

  async play() {
    this.#LOTTO_PLAY.test();
  }
}

export default App;
