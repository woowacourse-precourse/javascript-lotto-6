import ConsoleInput from '../console/ConsoleInput.js';
import MESSAGE from '../constants/Message.js';
import GameUtils from '../utils/GameUtils.js';

class LottoGameInput {
  static async purchaseAmount() {
    const userInput = await ConsoleInput.input(MESSAGE.INPUT_PURCHASE_AMOUNT);
    const amount = Number(userInput);

    return amount;
  }

  static async inputSixWinningNumbers() {
    const userInput = await ConsoleInput.input(MESSAGE.INPUT_WINNING_NUMBERS);
    const sixNumbers = GameUtils.seperateNumbersByComma(userInput);

    return sixNumbers;
  }
}

export default LottoGameInput;
