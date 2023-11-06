import InputView from './InputView.js';
import OutputView from './OutputView.js';
import message from '../constants/message.js';
import MessageFormat from '../utils/messageFormat.js';

const { PURCHASE_PRICE, WINNING_NUMBER, BONUS_NUMBER } = message;

export default class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readPurchasePrice() {
    const userInput = await this.#inputView.readLineAsync(PURCHASE_PRICE);
    return Number(userInput);
  }

  async readWinningNumber() {
    const userInput = await this.#inputView.readLineAsync(WINNING_NUMBER);
    const winningNumbers = userInput.split(',');
    return winningNumbers;
  }

  printError(error) {
    this.#outputView.print(MessageFormat.error(error.message));
  }

  async readBonusNumber() {
    const userInput = await this.#inputView.readLineAsync(BONUS_NUMBER);
    return Number(userInput);
  }

  printPurchaseCount(purchaseCount) {
    this.#outputView.print(MessageFormat.purchaseCount(purchaseCount));
  }

  printLottoTicket(ticket) {
    const stringTicket = MessageFormat.stringTicket(ticket);
    this.#outputView.print(stringTicket);
  }

  printRankResult(rankBoard) {
    this.#outputView.print(MessageFormat.rankResult(rankBoard));
  }

  printProfitAbility(profitAbility) {
    this.#outputView.print(MessageFormat.profitAbilityResult(profitAbility));
  }
}
