import { ERRORMESSAGE } from '../constants/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getLottoNumber() {
    return this.#numbers;
  }

  #validate(numbers) {
    this.#numberTypeCheck(numbers);
    this.#numberLengthCheck(numbers);
    this.#numberRangeCheck(numbers);
    this.#numberDuplicateCheck(numbers);
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
