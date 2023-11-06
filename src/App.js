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
    const { rankingList, rateOfReturn } = this.#getWinningResult(
      purchaseLotto,
      this.#winningLotto.getLotto(),
      this.#bonus.getBonus(),
    );
    OutputView.printLotteryResultsSummary(rankingList, rateOfReturn);
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
      return new Lotto(answer.split(','));
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

  #getWinningResult(purchaseLotto, winningLotto, bonus) {
    this.#lottoGame = new LottoGame(purchaseLotto, winningLotto, bonus);
    return this.#lottoGame.getWinningResult();
  }
}

export default App;
