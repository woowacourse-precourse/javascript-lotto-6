import Bonus from './Bonus.js';
import Lotto from './Lotto.js';
import LottoGame from './LottoGame.js';
import InputValidator from './utils/InputValidator.js';
import autoLottoGenerator from './utils/autoLottoGenerator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #purchaseLotto;

  #winningLotto;

  #bonus;

  #lottoGame;

  async play() {
    const { purchaseLotto, purchaseAmount } = await this.#getPurchaseLotto();
    this.#purchaseLotto = purchaseLotto;
    OutputView.printAutoLotto(this.#purchaseLotto, purchaseAmount);

    this.#winningLotto = await this.#generateWinningLotto();
    this.#bonus = await this.#generateBonus();
    const { winningResult, income } = this.#getlotteryResultsSummary(
      this.#purchaseLotto,
      this.#winningLotto.getLotto(),
      this.#bonus.getBonus(),
    );
    const rateOfReturn = this.#getRateOfReturn(purchaseAmount, income);
    OutputView.printLotteryResultsSummary(winningResult, rateOfReturn);
  }

  async #getPurchaseLotto() {
    try {
      const answer = await InputView.getLottoPurchaseAmount();
      if (InputValidator.validatePurchaseAmount(answer)) {
        const purchaseAmount = answer / 1000;
        return {
          purchaseLotto: autoLottoGenerator(purchaseAmount),
          purchaseAmount,
        };
      }
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getPurchaseLotto();
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

  #getRateOfReturn(purchaseAmount, income) {
    const inputMoney = purchaseAmount * 1000;
    const rateOfReturn = (income / inputMoney) * 100;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  #getlotteryResultsSummary(purchaseLotto, winningLotto, bonus) {
    this.#lottoGame = new LottoGame(purchaseLotto, winningLotto, bonus);
    return {
      winningResult: this.#lottoGame.getWinningResult(),
      income: this.#lottoGame.getIncome(),
    };
  }

  /* 
  🐛FIX: DI로 구현할 것
  */
  async #generateBonus() {
    try {
      const answer = await InputView.getBonus();
      return new Bonus(answer, this.#winningLotto.getLotto());
    } catch (error) {
      OutputView.printError(error.message);
      return this.#generateBonus();
    }
  }
}

export default App;
