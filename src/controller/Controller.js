import View from '../view/View.js';
import Validator from '../validator/Validator.js';
import { INPUT_MESSAGE } from '../constant/InputMessage.js';
import { repeat } from '../util/repeat.js'

export default class Controller {
  #view
  #validator

  constructor() {
    this.#view = new View();
    this.#validator = new Validator();
  }

  async run() {
    const money = this.getMoney();
  }

  async getMoney() {
    const moneyString = await repeat(
      this.#view.readMoney,
      INPUT_MESSAGE.money,
      [
        this.#validator.checkIsNumber,
        this.#validator.checkIsGreaterThanThousand,
        this.#validator.checkIsThousandMultiple
      ]
    );

    return parseInt(moneyString);
  }
}