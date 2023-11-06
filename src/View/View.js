import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/Message.js';
import { Validator } from '../Validator.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readPurchaseAmount() {
    const userInput = await this.#inputView.inputLine(MESSAGE.PURCHASE_AMOUNT);
    Validator.validatePurchaseAmount(userInput);

    return userInput;
  }

  async readWinningNumber() {
    const userInput = await this.#inputView.inputLine(MESSAGE.WINNING_NUMBER);

    return userInput.split(',');
  }

  async readBonusNumber() {
    return await this.#inputView.inputLine(MESSAGE.BONUS_NUMBER);
  }
}

export default View;
