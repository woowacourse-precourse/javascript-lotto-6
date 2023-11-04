import Money from '../model/Money.js';
import InputValidator from '../validator/InputValidator.js';
import convertType from '../utils/convertType.js';
import { MESSAGE } from '../constants/messages.js';

class LottoGameController {
  #moneyInstance;

  constructor({ randomNumberGeneration, inputView, outputView }) {
    this.randomNumberGeneration = randomNumberGeneration;
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    while (true) {
      try {
        this.#moneyInstance = await this.createMoneyInstance();
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }

    this.printPurchaseCount();
  }

  async getPurchaseAmount() {
    const money = convertType(
      await this.inputView.getUserInputAsync(MESSAGE.INPUT),
    );
    InputValidator.validateMoney(money);
    return money;
  }

  async createMoneyInstance() {
    const money = await this.getPurchaseAmount();
    return new Money(money);
  }

  printPurchaseCount() {
    const purchaseCount = this.#moneyInstance.getPurchaseCount();
    this.outputView.print(`${purchaseCount}${MESSAGE.BUY}`);
  }
}

export default LottoGameController;
