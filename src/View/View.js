import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/Message.js';
import { RESULT, RESULT_MESSAGE } from '../constants/Result.js';

const { RESULT_PREFIX, COUNT, RATE_OF_RETURN } = RESULT;

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
      const message = RESULT_MESSAGE[key];
      this.#outputView.printLine(`${message}${COUNT(count)}`);
    });
  }

  #printStatisticMessage() {
    this.#outputView.printLine(RESULT_PREFIX);
  }

  #printRateOfReturn(rateOfReturn) {
    this.#outputView.printLine(RATE_OF_RETURN(rateOfReturn));
  }

  printErrorMessage(error) {
    this.#outputView.printLine(error.message);
  }
}

export default View;
