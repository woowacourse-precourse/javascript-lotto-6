import LOTTO_INFO from './constants/lottoInfo.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class LottoGame {
  #purchaseAmount;

  async play() {
    await this.inputPurchaseAmount();
    OutputView.printNewLine();
    this.purchaseLotto();
  }

  async inputPurchaseAmount() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
  }

  purchaseLotto() {
    const lottoCount = this.#purchaseAmount / LOTTO_INFO.purchase.unit;
    OutputView.printPurchaseLottoCount(lottoCount);
  }
}

export default LottoGame;
