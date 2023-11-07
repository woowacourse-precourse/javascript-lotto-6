import { CustomError } from '../../error/CustomError.js';

class MoneyValidator {
  isNotDivisible(input) {
    return input % 1000 !== 0;
  }

  validate(input) {
    if (this.isNotDivisible(input)) {
      throw CustomError.Money('1000원 단위로 떨어지지 않는 값 입니다.');
    }
  }
}

const Money = new MoneyValidator();
export { Money };
