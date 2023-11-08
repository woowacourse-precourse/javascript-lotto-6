import ERRORMESSAGES from '../constants/errorMessages';
import NUMBERS from '../constants/numbers';

class BonusLottoNumber {
  static validate(userBonusNumber, userLottoNumber) {
    if (userBonusNumber.length === 0) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.inputOneNumber}`,
      );
    }

    if (Number.isNaN(Number(userBonusNumber))) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.inputNumber}`,
      );
    }

    if (userBonusNumber < NUMBERS.minLottoNumber) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.inputUnderMaxNumber}`,
      );
    }

    if (userBonusNumber > NUMBERS.maxLottoNumber) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.inputOverMinNumber}`,
      );
    }

    if (userLottoNumber.includes(userBonusNumber)) {
      throw new Error(
        `${ERRORMESSAGES.errorHeader}${ERRORMESSAGES.duplicatedNumber}`,
      );
    }
  }
}

export default BonusLottoNumber;
