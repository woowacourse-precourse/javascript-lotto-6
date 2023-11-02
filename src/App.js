import InputValidator from './utils/InputValidator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    const purchaseAmount = this.#getPurchaseAmount();
  }

  async #getPurchaseAmount() {
    try {
      const answer = await InputView.getLottoPurchaseAmount();
      if (InputValidator.validatePurchaseAmount(answer)) {
        return answer;
      }
    } catch (error) {
      OutputView.printError(error.message);
      this.#getPurchaseAmount();
    }
  }
}

export default App;
