import InputView from './View/InputView.js';
import LottoArray from './LottoArray.js';

class LottoGame {
  #lottoArray;

  constructor() {
    this.#lottoArray = new LottoArray();
  }

  async play() {
    this.buyLottos(await this.getPurchaseAmount());
  }

  buyLottos(money) {
    this.#lottoArray.set(money);
  }

  async getPurchaseAmount() {
    return await InputView.readPurchaseAmount();
  }
}

export default LottoGame;
