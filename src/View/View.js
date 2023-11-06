import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/Message.js';
import Validator from '../Validator.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readPurchaseAmount() {
    const userInput = await this.#inputView.inputLine(MESSAGE.PURCHASE_AMOUNT);
    Validator.validatePurchaseAmount(userInput);

    return userInput;
  }
}

export default View;
