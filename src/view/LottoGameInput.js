import ConsoleInput from '../console/ConsoleInput.js';
import MESSAGE from '../constants/Message.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';
import PURCHASE_UNIT from '../constants/PurchaseUnit.js';
import InvalidNumberError from '../error/InvalidNumberError.js';

class LottoGameInput {
  static async purchaseAmount() {
    const userInput = await ConsoleInput.input(MESSAGE.INPUT_PURCHASE_AMOUNT);
    const amount = Number(userInput);

    this.#validate(amount);
    return amount;
  }

  static #validate(amount) {
    this.#validateIsNumber(amount);
    this.#validateIsDividedByThousand(amount);
  }

  static #validateIsNumber(amount) {
    if (Number.isNaN(amount)) {
      throw new TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }

  static #validateIsDividedByThousand(amount) {
    if (amount % PURCHASE_UNIT !== 0) {
      throw new InvalidNumberError(ERROR_MESSAGE.IS_NOT_DIVIDED_THOUSAND);
    }
  }
}

export default LottoGameInput;
