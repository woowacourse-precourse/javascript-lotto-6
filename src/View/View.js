import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/message.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readPurchaseAmount() {
    const userInput = await this.#inputView.readPositiveIntegerAsync(
      MESSAGE.read.purchaseAmount,
    );

    return userInput;
  }

  print(message) {
    this.#outputView.print(message);
  }
}

export default View;
