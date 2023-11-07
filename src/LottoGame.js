import LOTTO_INFO from './constants/lottoInfo.js';
import InputView from './view/InputView.js';

class LottoGame {
  #lottoCount;

  play() {
    this.purchaseLotto();
  }

  async purchaseLotto() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    this.#lottoCount = purchaseAmount / LOTTO_INFO.purchase.unit;
  }
}

export default LottoGame;
