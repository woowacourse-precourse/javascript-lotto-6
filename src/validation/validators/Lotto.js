import { CustomError } from '../../error/CustomError.js';

export const Lotto = {
  validate(numbers) {
    if (this.conditions.isNumbersCountNotInRange(numbers)) {
      throw CustomError.Lotto('숫자의 개수가 6 개 미만 혹은 초과입니다.');
    }

    if (this.conditions.isIncludedNotInRangeNumber(numbers)) {
      throw CustomError.Lotto('1 미만 혹은 45 를 초과하는 숫자가 포함되어 있습니다.');
    }

    if (this.conditions.isDuplicated(numbers)) {
      throw CustomError.Lotto('중복된 숫자가 포함되어 있습니다.');
    }
  },

  conditions: {
    isNumbersCountNotInRange(numbers) {
      return numbers.length !== 6;
    },

    isIncludedNotInRangeNumber(numbers) {
      return numbers.find((number) => number < 1 || number > 45);
    },

    isDuplicated(numbers) {
      return new Set(numbers).size !== 6;
    },
  },
};
