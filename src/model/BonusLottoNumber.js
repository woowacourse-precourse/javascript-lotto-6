import ERRORMESSAGES from '../constants/errorMessages.js';
import NUMBERS from '../constants/numbers.js';

class BonusLottoNumber {
  static validate(userBonusNumberInput, userLottoNumberInput) {
    if (userBonusNumberInput.length === 0) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.inputOneNumber}`,
      );
    }

    if (Number.isNaN(Number(userBonusNumberInput))) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.inputNumber}`,
      );
    }

    if (
      userBonusNumberInput < NUMBERS.minLottoNumber ||
      userBonusNumberInput > NUMBERS.maxLottoNumber
    ) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.invalidRange}`,
      );
    }

    if (userLottoNumberInput.includes(userBonusNumberInput)) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.duplicatedNumber}`,
      );
    }
  }
}

export default BonusLottoNumber;
