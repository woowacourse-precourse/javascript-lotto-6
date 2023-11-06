import View from '../view/View.js';

export default class LottoGame {
  #view

  constructor() {
    this.#view = new View();
  }

  async getMoney() {
    const money = await this.#view.getMoneyInput();

    return money;
  }
  }
}