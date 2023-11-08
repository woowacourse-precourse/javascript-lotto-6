import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/validation.js';
import UserInputView from '../view/UserInputView.js';
import { MESSAGE, OPTIONS } from '../constants/Constants.js';

class GameController {
  #purchasePrice = 0;

  #ticketCount = 0;

  async inputPurchasePrice() {
    const price = Number(await UserInputView.inputPrice());
    try {
      Validator.purchasePrice(price);
      this.#purchasePrice = price;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.inputPurchasePrice();
    }
  }

  calculateTicketCount() {
    this.#ticketCount = this.#purchasePrice / OPTIONS.priceUnit;
    MissionUtils.Console.print(`${this.#ticketCount}${MESSAGE.purchaseAmount}`);
  }

  async startGame() {
    await this.inputPurchasePrice();
    this.calculateTicketCount();
  }
}

export default GameController;
