import { ERRORMESSAGE } from '../constants/constants.js';

class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getLottoNumber() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setBonusNumber(bonusNumber) {
    this.#bonusValidate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    this.#numberTypeCheck(numbers);
    this.#numberLengthCheck(numbers);
    this.#numberRangeCheck(numbers);
    this.#numberDuplicateCheck(numbers);
  }

  #bonusValidate(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error(ERRORMESSAGE.bonusType);
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERRORMESSAGE.bonusInput);
    }

    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(ERRORMESSAGE.bonusDuplicate);
    }
  }

  #numberTypeCheck(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw new Error(ERRORMESSAGE.lottoType);
      }
    });
  }

  #numberLengthCheck(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERRORMESSAGE.lottoLength);
    }
  }

  #numberRangeCheck(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERRORMESSAGE.lottoInput);
      }
    });
  }

  #numberDuplicateCheck(numbers) {
    const duplicateChecker = new Set(numbers);
    if (duplicateChecker.size !== 6) {
      throw new Error(ERRORMESSAGE.lottoDuplicate);
    }
  }
}

export default Lotto;
