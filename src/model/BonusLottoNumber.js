import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';

class BonusLottoNumber {
  static validate(userBonusNumberInput, userLottoNumberInput) {
    if (userBonusNumberInput.length === 0) {
      throw new Error(`${MESSAGES.errorHeader}${MESSAGES.inputOneNumber}`);
    }

    if (isNaN(userBonusNumberInput)) {
      throw new Error(`${MESSAGES.errorHeader}${MESSAGES.inputOneNumber}`);
    }

    if (
      userBonusNumberInput < NUMBERS.minLottoNumber ||
      userBonusNumberInput > NUMBERS.maxLottoNumber
    ) {
      throw new Error(`${MESSAGES.errorHeader}${MESSAGES.invalidRange}`);
    }

    if (userLottoNumberInput.includes(userBonusNumberInput)) {
      throw new Error(`${MESSAGES.errorHeader}${MESSAGES.duplicatedNumber}`);
    }
  }
}

export default BonusLottoNumber;
