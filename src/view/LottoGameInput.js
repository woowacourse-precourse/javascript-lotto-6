import ConsoleInput from '../console/ConsoleInput.js';
import MESSAGE from '../constants/Message.js';
import ERROR_MESSAGE from '../constants/ErrorMessage.js';

class LottoGameInput {
  static async purchaseAmount() {
    const amount = await ConsoleInput.input(MESSAGE.INPUT_PURCHASE_AMOUNT);
    this.#validateIsNumber(amount);
    return amount;
  }

  static #validateIsNumber(amount) {
    const typeCasting = Number(amount);

    if (Number.isNaN(typeCasting)) {
      throw TypeError(ERROR_MESSAGE.IS_NOT_NUMBER);
    }
  }
}

export default LottoGameInput;
