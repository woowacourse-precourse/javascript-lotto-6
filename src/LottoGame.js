import InputView from './InputView';

class LottoGame {
  #purchaseAmount;

  async gameStart() {
    this.#purchaseAmount = InputView.readPurchaseAmount();
  }
}

export default LottoGame;
