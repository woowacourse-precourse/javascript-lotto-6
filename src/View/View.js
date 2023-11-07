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

  printGameResult({ prizes, profitRate }) {
    this.#printResultTitle();
    this.#printPrizes(prizes);
    this.#printProfitRate(profitRate);
  }

  printError(error) {
    this.#outputView.print(error.message);
  }

  #printProfitRate(profitRate) {
    const message = MessageFormat.profitRate(profitRate);

    this.#outputView.print(message);
  }

  #printResultTitle() {
    this.#outputView.print(MESSAGE.resultTitle);
  }

  #printPrizes(prizes) {
    this.#outputView.print(MessageFormat.totalPrize(prizes));
  }

  #printPurchasedQuantity(purchaseQuantity) {
    const message = MessageFormat.purchasedQuantity(purchaseQuantity);

    this.#outputView.print(message);
  }

  #printPurchasedLotto(purchasedLottos) {
    const message = purchasedLottos.map((lotto) => lotto.toString()).join('\n');

    this.#outputView.print(message);
  }
}

export default View;
