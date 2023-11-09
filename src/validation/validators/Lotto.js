import { RANDOM_NUMBERS_RANGE } from '../../constants.js';
import { CustomError } from '../../error/CustomError.js';

export class LottoValidator {
  isNumbersCountNotInRange(numbers) {
    return numbers.length !== RANDOM_NUMBERS_RANGE.size;
  }

  isIncludedNotInRangeNumber(numbers) {
    return numbers.find((number) => this.isNumberNotInRangeNumber(number));
  }

  isNumberNotInRangeNumber(number) {
    return number < 1 || number > 45;
  }

  isDuplicated(numbers) {
    return new Set(numbers).size !== RANDOM_NUMBERS_RANGE.size;
  }

  validate(numbers) {
    if (this.isIncludedNotInRangeNumber(numbers)) {
      throw CustomError.Lotto('1 미만 혹은 45 를 초과하는 숫자가 포함되어 있습니다.');
    }

    if (this.isNumbersCountNotInRange(numbers)) {
      throw CustomError.Lotto('숫자의 개수가 6 개 미만 혹은 초과입니다.');
    }

    if (this.isDuplicated(numbers)) {
      throw CustomError.Lotto('중복된 숫자가 포함되어 있습니다.');
    }
  }
}

const Lotto = new LottoValidator();

export { Lotto };
