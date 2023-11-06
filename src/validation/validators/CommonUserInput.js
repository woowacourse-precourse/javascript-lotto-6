import { CustomError } from '../../error/CustomError.js';

export const CommonUserInput = {
  multipleValue: {
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
        return input[0] === '';
      },
      isIncludedSpace(input) {
        return input.some((char) => char.includes(' ') || char === '');
      },
    },
  },
  integerValue: {
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
        return input === 0;
      },
      isIncludedSpace(input) {
        console.log('isIncludedSDpace', input);
        return Number.isNaN(input);
      },
    },
  },
};
