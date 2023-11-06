import LottoGame from '../model/LottoGame.js';
import View from '../view/View.js'

export default class Controller {
  #lottoGame;
  #view;

  constructor() {
    this.#view = new View();
  }

  async run() {
    this.#lottoGame = new LottoGame();

    const money = await this.#view.inputRepeater(this.#view.getMoneyInput);
    const attempts = this.#lottoGame.moneyToAttempts(money);
    const lottos = await this.#lottoGame.buyLottos(attempts);

    this.#view.printLottos(lottos);
  }
}