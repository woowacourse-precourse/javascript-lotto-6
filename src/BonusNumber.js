import MESSAGES from './constants/messages.js';
import NUMBERS from './constants/numbers.js';
import { printErrorMessage } from './utils/printMessage.js';

class BonusNumber {
  constructor(userBonusNumberInput, userLottoNumberInput) {
    this.#validate(userBonusNumberInput, userLottoNumberInput);
  }

  #validate(userBonusNumberInput, userLottoNumberInput) {
    if (
      userBonusNumberInput < NUMBERS.minLottoNumber ||
      userBonusNumberInput > NUMBERS.maxLottoNumber
    ) {
      printErrorMessage(MESSAGES.errorHeader, MESSAGES.invalidRange);
      return;
    }
    if (userLottoNumberInput.includes(userBonusNumberInput)) {
      printErrorMessage(MESSAGES.errorHeader, MESSAGES.duplicatedNumber);
    }
  }
}

export default BonusNumber;
