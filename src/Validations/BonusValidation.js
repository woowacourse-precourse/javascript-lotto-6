import validationUtils from '../utils/validationUtils.js';
import MESSAGE from '../constants/message.js';

class BonusValidation {
  #answer;

  constructor(answer) {
    this.#answer = answer;
  }

  #checkDuplicateNumber(lotto) {
    const number = Number(this.#answer);

    if (lotto.includes(number)) {
      throw new Error(MESSAGE.error.duplicateNumber);
    }
  }

  finishValidation(lotto) {
    validationUtils.checkNumberRegExp(this.#answer);

    this.#checkDuplicateNumber(lotto);
  }
}

export default BonusValidation;
