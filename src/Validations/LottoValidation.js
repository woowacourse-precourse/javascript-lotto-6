import validationUtils from '../utils/validationUtils.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class LottoValidation {
  #answer;

  constructor(answer) {
    this.#answer = answer;
  }

  #checkDuplicateNumber(string, currentIndex) {
    const lastIndex = this.#answer.lastIndexOf(string);
    if (lastIndex !== currentIndex) {
      throw new Error(MESSAGE.error.duplicateNumber);
    }
  }

  #checkLength() {
    if (this.#answer.length !== VALUE.range.count) {
      throw new Error(MESSAGE.error.lottoLength);
    }
  }

  finishValidation() {
    this.#answer.forEach((string, index) => {
      validationUtils.checkNumberRegExp(string);
      validationUtils.checkRange(Number(string));
      this.#checkDuplicateNumber(string, index);
    });

    this.#checkLength();
  }
}

export default LottoValidation;
