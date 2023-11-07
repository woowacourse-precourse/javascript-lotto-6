import Validator from './utils/Validator.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    Validator.checkDifferentNumbers(numbers);
    Validator.checkNumberRange(numbers);
    Validator.checkInteger(numbers);

    return;
  }

  checkSameNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  numberComparison(lottoNumber, bonusNumber) {
    const countResult = lottoNumber.reduce((count, number) => {
      if (this.#numbers.includes(number)) {
        count += 1;
      }

      return count;
    }, 0);

    return this.resultnumberComparison(countResult, lottoNumber, bonusNumber);
  }

  resultnumberComparison(countResult, lottoNumber, bonusNumber) {
    if (countResult === 6) return 'six';
    if (countResult === 5 && lottoNumber.includes(bonusNumber)) return 'fiveAndBonus';
    if (countResult === 5) return 'five';
    if (countResult === 4) return 'four';
    if (countResult === 3) return 'three';

    return;
  }
}

export default Lotto;
