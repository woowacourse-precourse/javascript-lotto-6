import ConsoleInput from '../console/ConsoleInput.js';
import MESSAGE from '../constants/Message.js';

class LottoGameInput {
  static async purchaseAmount() {
    const userInput = await ConsoleInput.input(MESSAGE.INPUT_PURCHASE_AMOUNT);
    const amount = Number(userInput);

    return amount;
  }
}

export default LottoGameInput;
