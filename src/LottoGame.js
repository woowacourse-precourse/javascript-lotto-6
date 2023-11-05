import InputView from './View/InputView.js';

class LottoGame {
  async play() {
    await this.getPurchaseAmount();
  }

  async getPurchaseAmount() {
    return await InputView.readPurchaseAmount();
  }
}

export default LottoGame;
