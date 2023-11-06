import LottoGame from '../model/LottoGame.js';

export default class Controller {
  #LottoGame;

  constructor() {
  }

  run() {
    this.#LottoGame = new LottoGame();
  }
}