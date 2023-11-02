import InputValidator from './utils/InputValidator.js';
import autoLottoGenerator from './utils/autoLottoGenerator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #purchaseLotto;

  async play() {
    const purchaseAmount = await this.#getPurchaseAmount();
    this.#purchaseLotto = this.#getAutoLotto(purchaseAmount);
    OutputView.printAutoLotto(this.#purchaseLotto, purchaseAmount);
  }

  async #getPurchaseAmount() {
    try {
      const answer = await InputView.getLottoPurchaseAmount();
      if (InputValidator.validatePurchaseAmount(answer)) {
        return answer / 1000;
      }
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getPurchaseAmount();
    }
  }

  #getAutoLotto(purchaseAmount) {
    try {
      return autoLottoGenerator(purchaseAmount);
    } catch (error) {
      OutputView.printError(error.message);
      this.#getAutoLotto();
    }
  }
}

export default App;
