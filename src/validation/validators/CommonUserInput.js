import { CustomError } from '../../error/CustomError.js';

export const CommonUserInput = {
  validate(input) {
    if (this.conditions.isEmpty(input)) {
      throw CustomError.CommonUserInput('입력값이 없습니다.');
    }

    if (this.conditions.isIncludedSpace(input)) {
      throw CustomError.CommonUserInput('입력값에 공백이 포함되어 있습니다.');
    }
  },
  conditions: {
    isEmpty(input) {
      return input.split('').every((char) => char === ' ');
    },
    isIncludedSpace(input) {
      return !this.isEmpty(input) && input.includes(' ');
    },
  },

  integerValue: {
    validate(input) {
      if (this.conditions.isNotNumber(input)) {
        throw CustomError.CommonUserInput('숫자가 아닌 값이 입력되었습니다.');
      }
    },
    conditions: {
      isNotNumber(input) {
        return Number.isNaN(input);
      },
    },
  },
};
