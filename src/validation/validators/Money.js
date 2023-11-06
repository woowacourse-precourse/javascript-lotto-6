import { CustomError } from '../../error/CustomError.js';

export const Money = {
  validate(input) {
    if (this.conditions.isNotDivisible(input)) {
      throw CustomError.Money('1000원 단위로 떨어지지 않는 값 입니다.');
    }
  },

  conditions: {
    isNotDivisible(input) {
      return input % 1000 !== 0;
    },
  },
};
