import View from '../view/View.js';
import Validator from '../validator/Validator.js';
import LottoGame from '../model/LottoGame.js';
import { INPUT_MESSAGE } from '../constant/InputMessage.js'
import { repeat } from '../util/repeat.js'

export default class Controller {
  #view
  #validator

  constructor() {
    this.#view = new View();
    this.#validator = new Validator();
  }

  async run() {
    const lottoGame = new LottoGame();

    const money = await this.getMoney();

    const lottos = await lottoGame.buyLottos(money);

    this.#view.printLottos(lottos);

    const win = await this.getWin();

    const bonus = await this.getBonus(win);
  }

  async getMoney() {
    const moneyString = await repeat(
      this.#view.readLine,
      INPUT_MESSAGE.money,
      [
        this.#validator.checkIsNumber,
        this.#validator.checkIsGreaterThanThousand,
        this.#validator.checkIsThousandMultiple
      ]
    );

    return parseInt(moneyString);
  }
  
  async getWin() {
    const winString = await repeat(
      this.#view.readLine,
      INPUT_MESSAGE.win,
      [
        this.#validator.checkIsCommaSeparatedNumber,
        this.#validator.checkIsSixNumbers,
        this.#validator.checkIsCommaSeparatedNumberBetween1And45,
        this.#validator.checkIsUnique
      ]
    );

    return winString.split(',');
  }

  async getBonus(win) {
    const bonusString = await repeat(
      this.#view.readLine,
      INPUT_MESSAGE.bonus,
      [
        this.#validator.checkIsNumberBonus,
        this.#validator.checkIsBetween1And45,
        this.#validator.checkIsNotInWin
      ],
      win
    );

    return parseInt(bonusString);
  }
}