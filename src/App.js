import Bonus from './Bonus.js';
import Lotto from './Lotto.js';
import LottoGame from './LottoGame.js';
import InputValidator from './utils/InputValidator.js';
import AutoLottoGenerator from './utils/AutoLottoGenerator.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import { LOTTO_TICKET_PRICE } from './constants/conditions.js';

class App {
  #winningLotto;

  #bonus;

  #lottoGame;

  async play() {
    const { purchaseLotto, purchaseAmount } = await this.#getPurchaseLotto();
    OutputView.printAutoLotto(purchaseLotto, purchaseAmount);

    this.#winningLotto = await this.#generateWinningLotto();
    this.#bonus = await this.#generateBonus();
    const { winningResult, rateOfReturn } = this.#getlotteryResultsSummary(
      purchaseLotto,
      this.#winningLotto.getLotto(),
      this.#bonus.getBonus(),
    );
    OutputView.printLotteryResultsSummary(winningResult, rateOfReturn);
  }

  async #getPurchaseLotto() {
    try {
      const answer = await InputView.getLottoPurchaseAmount();
      if (InputValidator.validatePurchaseAmount(answer)) {
        const purchaseAmount = answer / LOTTO_TICKET_PRICE;
        return {
          purchaseLotto: AutoLottoGenerator.getLotto(purchaseAmount),
          purchaseAmount,
        };
      }
    } catch (error) {
      OutputView.printError(error.message);
      return this.#getPurchaseLotto();
    }
  }

  async #generateWinningLotto() {
    try {
      const answer = await InputView.getWinningLotto();
      return new Lotto(answer.split(',').map((lottoNum) => lottoNum));
    } catch (error) {
      OutputView.printError(error.message);
      return this.#generateWinningLotto();
    }
  }

  async #generateBonus() {
    try {
      const answer = await InputView.getBonus();
      return new Bonus(answer, this.#winningLotto.getLotto());
    } catch (error) {
      OutputView.printError(error.message);
      return this.#generateBonus();
    }
  }

  #getlotteryResultsSummary(purchaseLotto, winningLotto, bonus) {
    this.#lottoGame = new LottoGame(purchaseLotto, winningLotto, bonus);
    return {
      winningResult: this.#lottoGame.getWinningResult(),
      rateOfReturn: this.#lottoGame.getRateOfReturn(),
    };
  }
}

export default App;
