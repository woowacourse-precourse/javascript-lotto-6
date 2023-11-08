import EXCEPTION from '../constant/Exception';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateOfNonNumber(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(EXCEPTION.lottoLengthError);
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error(EXCEPTION.duplicateError);
    }
    if (numbers.every(x => x >= 1 && x <= 45) === false) {
      throw new Error(EXCEPTION.outOfRangeError);
    }
  }

  #validateOfNonNumber(numbers) {
    const SPECIAL_PATTERN = /[\{\}\\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (SPECIAL_PATTERN.test(numbers.join(',')) === true) {
      throw new Error(EXCEPTION.specialCharacterError);
    }
  }

  compareWithRandomLotto(lotto) {
    const WINNING_NUMBER_SPLIT = this.#numbers.map(Number);
    const resultArray = lotto.map(
      numbers => numbers.filter(x => WINNING_NUMBER_SPLIT.includes(x)).length,
    );

    return resultArray;
  }

  getCompareResult(lotto) {
    return this.compareWithRandomLotto(lotto);
  }
}

export default Lotto;
