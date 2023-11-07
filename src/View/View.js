import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/Message.js';
import RESULT from '../constants/Result.js';

const {
  RESULT_MESSAGE,
  RESULT_RANK_3,
  RESULT_RANK_4,
  RESULT_RANK_5,
  RESULT_RANK_5_BONUS,
  RESULT_RANK_6,
  COUNT,
  RATE_OF_RETURN,
} = RESULT;

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readPurchaseAmount() {
    return await this.#inputView.inputLine(MESSAGE.PURCHASE_AMOUNT);
  }

  async readWinningNumber() {
    const userInput = await this.#inputView.inputLine(MESSAGE.WINNING_NUMBER);

    return userInput.split(',');
  }

  async readBonusNumber() {
    return await this.#inputView.inputLine(MESSAGE.BONUS_NUMBER);
  }

  printPurchaseLotto(purchaseLotto) {
    this.#outputView.printLine(
      `\n${purchaseLotto.length}${MESSAGE.LOTTO_AMOUNT}`,
    );
    this.#outputView.printLine(
      purchaseLotto.map((lotto) => lotto.getNumbersToString()).join('\n'),
    );
  }

  printWinningResult(matchResult) {
    this.#outputView.printLine(RESULT_MESSAGE);
    this.#outputView.printLine(RESULT_RANK_3 + COUNT(matchResult.match3));
    this.#outputView.printLine(RESULT_RANK_4 + COUNT(matchResult.match4));
    this.#outputView.printLine(RESULT_RANK_5 + COUNT(matchResult.match5));
    this.#outputView.printLine(
      RESULT_RANK_5_BONUS + COUNT(matchResult.match5Bonus),
    );
    this.#outputView.printLine(RESULT_RANK_6 + COUNT(matchResult.match6));
  }
}

export default View;
