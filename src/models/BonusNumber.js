import { ERROR_MESSAGE, ERROR_SCOPE } from '../utils/constants.js';
import { validate } from '../utils/validate.js';

class BonusNumber {
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#validate(ERROR_SCOPE.BOUNUS, winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(scope, winningNumber, bonusNumber) {
    validate.isInteger(scope, bonusNumber);
    validate.startZero(scope, bonusNumber);
    validate.isNumberRange(scope, bonusNumber);

    if (winningNumber.includes(Number(bonusNumber))) {
      throw new Error(
        `${ERROR_MESSAGE.LOGO} 당첨번호와 ${scope} ${ERROR_MESSAGE.NO_DUPLICATION}`
      );
    }
  }

  getBonusNumber() {
    return Number(this.#bonusNumber);
  }
}

export default BonusNumber;
