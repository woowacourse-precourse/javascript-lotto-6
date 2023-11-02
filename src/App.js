import InputValidator from './utils/InputValidator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

/* 
🛠HOTFIX: 입력값을 재귀로 호출하면 실행되지 않음
*/
class App {
  async play() {
    const purchaseAmount = await this.#getPurchaseAmount();
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
}

export default App;
