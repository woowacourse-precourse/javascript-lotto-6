import PlayController from './controllers/PlayController.js';

class App {
  #LOTTO_PLAY;

  constructor() {
    this.#LOTTO_PLAY = new PlayController();
  }

  async play() {
    await this.#LOTTO_PLAY.inputPurchaseMoney();
  }
}

export default App;
