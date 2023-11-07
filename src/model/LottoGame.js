import Lotto from '../Lotto.js'
import View from '../view/View.js';
import LottoUtils from './LottoUtils.js'

export default class LottoGame {
  #view;
  #lottoUtils;

  constructor() {
    this.#view = new View();
    this.#lottoUtils = new LottoUtils();
  }

  moneyToAttempts(money) {
    return money / 1000;
  }
  
  async buyLottos(attempts) {
    const lottos = [];
    for (let i = 0; i < attempts; i++) {
      const randomNumbers = await this.#lottoUtils.generateNumbers();
      const lotto = new Lotto(randomNumbers);
      lottos.push(lotto);
    }
  
    return lottos;
  }
}