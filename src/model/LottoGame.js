import View from '../view/View.js';
import { REGEX } from '../constants/REGEX.js';

export default class LottoGame {
  #view

  constructor() {
    this.#view = new View();
  }

  async getMoney() {
    const money = await this.#view.getMoneyInput();
    if (!REGEX.isGreaterThanThousand.test(money)) {
      throw new Error("[ERROR] 금액은 1000원 이상이어야 합니다.");
    }

    if (!REGEX.isThousandMultiple.test(money)) {
      throw new Error("[ERROR] 금액은 1000원의 배수여야 합니다.");
    }

    return money;
  }
  }
}