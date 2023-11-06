import Lotto from '../Lotto.js'
import View from '../view/View.js';
import { generateNumbers } from '../utils/LottoUtils.js'

export default class LottoGame {
  #view

  constructor() {
    this.#view = new View();
  }

  async getMoney() {
    const money = await this.#view.getMoneyInput();

    return money;
  }

  moneyToAttempts(money) {
    return money / 1000;
  }
  
  async buyLottos(attempts) {
    const lottos = [];
    for (let i = 0; i < attempts; i++) {
      const randomNumbers = await generateNumbers();
      const lotto = new Lotto(randomNumbers);
      lottos.push(lotto);
    }
  
    return lottos;
  }
}