// import Validator from './model/Validator.js';
import { ERROR } from './util/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    return this.#numbers;
  }

  #validate(numbers) {
    this.notNumberElement(numbers);
    this.notSixNumber(numbers);
    this.notRangeNumber(numbers);
    this.sameNumber(numbers);
  }

  // 쉼표 외의 문자가 들어간 경우
  notNumberElement(numbers) {
    numbers.forEach(number => {
      return this.notNumber(number);
    });
  }

  notNumber(inputValue) {
    if (/[^0-9]/g.test(inputValue)) {
      throw ERROR.notNumberic;
    }
  }

  // 6개가 아닌 경우
  notSixNumber(numbers) {
    if (numbers.length !== 6) {
      throw ERROR.notSixNumber;
    }
  }

  // 1~45사이의 정수가 아닌 경우
  notRangeNumber(numbers) {
    numbers.forEach(number => {
      return this.numberListRangeCheck(number);
    });
  }

  numberListRangeCheck(number) {
    if (Number(number) < 1 || Number(number) > 45) {
      throw ERROR.rangeOverInput;
    }
  }

  // 중복되는 숫자가 있는 경우
  sameNumber(numbers) {
    const deleteSameNumber = new Set(numbers).size;

    if (numbers.length !== deleteSameNumber) {
      throw ERROR.sameNumber;
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
