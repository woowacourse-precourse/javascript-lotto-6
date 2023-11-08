import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./message.js";
import { typeofNumber,amountUnit } from "./validator/purchaseAmountValidation.js";
import { winningNumberLength, duplicate } from "./validator/winningNumberValidation.js";
import { bonusNumberValidation } from "./validator/bonusNumberValidation.js";

class User {
  static async inputLottoPurchaseAmout() {
    const inputValue = await Console.readLineAsync(MESSAGE.LOTTO_PURCHASE_AMOUNT);
    typeofNumber(inputValue);
    amountUnit(inputValue);
    return inputValue;
  }

  static async inputWinningNumber() {
    const inputValue = await Console.readLineAsync(MESSAGE.WINNING_NUMBER);
    winningNumberLength(inputValue);
    duplicate(inputValue);
    return inputValue.split(',');
  }

  static async inputBonusNumber() {
    const inputValue = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);
    bonusNumberValidation(inputValue);
    return inputValue;
  }
}

export default User;