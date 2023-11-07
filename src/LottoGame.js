import LOTTO_INFO from './constants/lottoInfo.js';
import InputView from './view/InputView.js';

class LottoGame {
  #purchaseAmount;

  async play() {
    await this.inputPurchaseAmount();
    this.purchaseLotto();
  }

  async inputPurchaseAmount() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
  }

  purchaseLotto() {
    const lottoCount = this.#purchaseAmount / LOTTO_INFO.purchase.unit;
  }
}

export default LottoGame;
