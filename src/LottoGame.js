import InputView from './InputView';

class LottoGame {
  #purchaseAmount;

  async gameStart() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
  }
}

export default LottoGame;
