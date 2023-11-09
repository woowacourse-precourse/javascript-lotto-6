import EXCEPTION from '../constant/Exception';
import Init from '../constant/Init';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateOfNonNumber(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== Number(Init.lottoLength)) {
      throw new Error(EXCEPTION.lottoLengthError);
    }
    if (Number(numbers.length) !== Number([...new Set(numbers)].length)) {
      throw new Error(EXCEPTION.duplicateError);
    }
    if (numbers.every(x => x >= Init.minLottoRange && x <= Init.maxLottoRange) === false) {
      throw new Error(EXCEPTION.outOfRangeError);
    }
  }

  #validateOfNonNumber(numbers) {
    if (Init.specialPattern.test(numbers.join(',')) === true) {
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
