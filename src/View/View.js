import InputView from './InputView.js';
import OutputView from './OutputView.js';
import message from '../constants/message.js';

const { PURCHASE_PRICE } = message;

export default class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readPurchasePrice() {
    const userInput = await this.#inputView.readLineAsync(PURCHASE_PRICE);
    const purchasePrice = Number(userInput);
    return purchasePrice;
  }
}
