import Bonus from './Bonus.js';
import Lotto from './Lotto.js';
import InputValidator from './utils/InputValidator.js';
import autoLottoGenerator from './utils/autoLottoGenerator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #purchaseLotto;

  #winningLotto;

  #bonus;

  async play() {
    const purchaseAmount = await this.#getPurchaseAmount();
    this.#purchaseLotto = this.#getAutoLotto(purchaseAmount);
    OutputView.printAutoLotto(this.#purchaseLotto, purchaseAmount);
    this.#winningLotto = await this.#generateWinningLotto();
    this.#bonus = await this.#generateBonus();
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
      return this.#getAutoLotto();
    }
  }

  /* 
  🐛FIX: DI로 구현할 것
  */
  async #generateWinningLotto() {
    try {
      const answer = await InputView.getWinningLotto();
      return new Lotto(answer.split(',').map((lottoNum) => Number(lottoNum)));
    } catch (error) {
      OutputView.printError(error.message);
      return this.#generateWinningLotto();
    }
  }

  /* 
  🐛FIX: DI로 구현할 것
  */
  async #generateBonus() {
    try {
      const answer = await InputView.getBonus();
      return new Bonus(answer);
    } catch (error) {
      OutputView.printError(error.message);
      return this.#generateBonus();
    }
  }
}

export default App;
