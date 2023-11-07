import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/Message.js';

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
}

export default View;
