import ConsoleInput from '../console/ConsoleInput.js';
import MESSAGE from '../constants/Message.js';
import GameUtils from '../utils/GameUtils.js';

class LottoGameInput {
  static async purchaseAmount() {
    const userInput = await ConsoleInput.input(MESSAGE.INPUT_PURCHASE_AMOUNT);
    const amount = userInput.trim();

    return amount;
  }

  static async inputSixWinningNumbers() {
    const userInput = await ConsoleInput.input(MESSAGE.INPUT_WINNING_NUMBERS);
    const sixNumbers = GameUtils.seperateNumbersByComma(userInput);

    return sixNumbers;
  }

  static async inputBonusNumber() {
    const userInput = await ConsoleInput.input(MESSAGE.INPUT_BONUS_NUMBER);
    const bonusNumber = userInput.trim();

    return bonusNumber;
  }
}

export default LottoGameInput;
