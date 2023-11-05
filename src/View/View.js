import InputView from './InputView.js';
import OutputView from './OutputView.js';
import MESSAGE from '../constants/message.js';
import MessageFormat from '../utils/messageFormat.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readPurchaseAmount() {
    const userInput = await this.#inputView.readPositiveIntegerAsync(
      MESSAGE.read.purchaseAmount,
    );

    return userInput;
  }

  async readWinningNumber() {
    const userInput = await this.#inputView.readLineAsync(
      MESSAGE.read.winningNumber,
    );

    return userInput.split(',');
  }

  async readBonusNumber() {
    const userInput = await this.#inputView.readPositiveIntegerAsync(
      MESSAGE.read.bonusNumber,
    );

    return userInput;
  }

  printPurchasedResult(purchasedLottos) {
    this.#printPurchasedQuantity(purchasedLottos.length);
    this.#printPurchasedLotto(purchasedLottos);
  }

  #printPurchasedQuantity(purchaseQuantity) {
    const message = MessageFormat.purchasedQuantity(purchaseQuantity);

    this.#outputView.print(message);
  }

  #printPurchasedLotto(purchasedLottos) {
    const message = MessageFormat.purchasedLotto(purchasedLottos);

    this.#outputView.print(message);
  }

  print(userInput) {
    this.#outputView.print(userInput);
  }
}

export default View;
