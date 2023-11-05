import LottoGame from '../model/LottoGame';

export default class Controller {
  #LottoGame;

  constructor() {
  }

  run() {
    this.#LottoGame = new LottoGame();
  }
}