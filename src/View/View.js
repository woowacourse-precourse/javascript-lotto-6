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

const resultMessages = {
  match3: RESULT_RANK_3,
  match4: RESULT_RANK_4,
  match5: RESULT_RANK_5,
  match5Bonus: RESULT_RANK_5_BONUS,
  match6: RESULT_RANK_6,
};

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
    this.#printQuantity(purchaseLotto.length);
    this.#printLotto(purchaseLotto);
  }

  #printQuantity(quantity) {
    this.#outputView.printLine(`\n${quantity}${MESSAGE.LOTTO_AMOUNT}`);
  }

  #printLotto(purchaseLotto) {
    this.#outputView.printLine(
      purchaseLotto.map((lotto) => lotto.getNumbersToString()).join('\n'),
    );
  }

  printWinningStatistics({ matchResult, rateOfReturn }) {
    this.#printStatisticMessage();
    this.#printStatisticContents(matchResult);
    this.#printRateOfReturn(rateOfReturn);
  }

  #printStatisticContents(matchResult) {
    Object.entries(matchResult).forEach(([key, count]) => {
      const message = resultMessages[key];
      this.#outputView.printLine(`${message}${COUNT(count)}`);
    });
  }

  #printStatisticMessage() {
    this.#outputView.printLine(RESULT_MESSAGE);
  }

  #printRateOfReturn(rateOfReturn) {
    this.#outputView.printLine(RATE_OF_RETURN(rateOfReturn));
  }

  printErrorMessage(error) {
    this.#outputView.printLine(error.message);
  }
}

export default View;
