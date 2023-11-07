import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';
import { printErrorMessage } from '../utils/printMessage.js';

class BonusLottoNumber {
  static validate(userBonusNumberInput, userLottoNumberInput) {
    if (userBonusNumberInput.length > 1 || userBonusNumberInput.length === 0) {
      printErrorMessage(MESSAGES.inputOneNumber);
      return;
    }
    if (
      userBonusNumberInput < NUMBERS.minLottoNumber ||
      userBonusNumberInput > NUMBERS.maxLottoNumber
    ) {
      printErrorMessage(MESSAGES.invalidRange);
      return;
    }
    if (userLottoNumberInput.includes(userBonusNumberInput)) {
      printErrorMessage(MESSAGES.duplicatedNumber);
    }
  }
}

export default BonusLottoNumber;
