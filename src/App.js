import Bonus from './Bonus';
import Lotto from './Lotto';
import InputValidator from './utils/InputValidator';
import AutoLottoGenerator from './utils/AutoLottoGenerator';
import InputView from './view/InputView';
import OutputView from './view/OutputView';
import {
  COUNT,
  DEFAULT_NUM,
  LOTTO_TICKET_PRICE,
  MATCH_COUNTS,
} from './constants/conditions';
import WinningResult from './WinningResult';
import getRateOfReturn from './utils/getRateOfReturn';

class App {
  #winningLotto;

  #bonus;

  async play() {
    const { purchaseLotto, purchaseAmount } = await this.#getPurchaseLotto();
    OutputView.printPurchaseLotto(purchaseLotto, purchaseAmount);

    this.#winningLotto = await this.#generateWinningLotto();
    this.#bonus = await this.#generateBonus();
    const matchCountList = this.#countMatchingNumbers(purchaseLotto);
    const matchingTable = new WinningResult(matchCountList).getResult();
    const rateOfReturn = getRateOfReturn(matchingTable, purchaseAmount);
    OutputView.printLotteryResultsSummary(matchingTable, rateOfReturn);
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

  #countMatchingNumbers(purchaseLotto) {
    const matchCountList = [];
    purchaseLotto.reduce((acc, autoLotto) => {
      let count = DEFAULT_NUM;
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) count += COUNT.plus;
      });
      this.#updateMatchCountList(matchCountList, count, autoLotto);
      return acc;
    }, this.#winningLotto.getLotto());

    return matchCountList;
  }

  #updateMatchCountList(matchCountList, count, autoLotto) {
    if (count === MATCH_COUNTS.five) {
      matchCountList.push(
        autoLotto.includes(this.#bonus.getBonus())
          ? [count, true]
          : [count, false],
      );
    }
    matchCountList.push(count);
  }
}

export default App;
