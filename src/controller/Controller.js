import View from '../view/View.js'
import LottoGame from '../model/LottoGame.js';
import LottoCalculator from '../model/LottoCalculator.js';

export default class Controller {
  #view;

  constructor() {
    this.#view = new View();
  }

  async run() {
    const lottoGame = new LottoGame();

    const money = await this.#view.inputRepeater(this.#view.getMoneyInput);
    const attempts = lottoGame.moneyToAttempts(money);
    const lottos = await lottoGame.buyLottos(attempts);

    this.#view.printLottos(lottos);

    const win = await this.#view.inputRepeater(this.#view.getWinInput);
  }
}