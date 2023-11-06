import { ERROR } from './util/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    this.notNumberElement();
    this.notSixNumber();
    this.notRangeNumber();
    this.sameNumber();
  }

  // 쉼표 외의 문자가 들어간 경우
  notNumberElement() {
    this.#numbers.forEach(number => {
      return this.notNumber(number);
    });
  }

  notNumber(number) {
    if (/[^0-9]/g.test(number)) {
      throw ERROR.notNumberic;
    }
  }

  // 6개가 아닌 경우
  notSixNumber() {
    if (this.#numbers.length !== 6) {
      throw ERROR.notSixNumber;
    }
  }

  // 1~45사이의 정수가 아닌 경우
  notRangeNumber() {
    this.#numbers.forEach(number => {
      return this.numberListRangeCheck(number);
    });
  }

  numberListRangeCheck(number) {
    if (Number(number) < 1 || Number(number) > 45) {
      throw ERROR.rangeOverInput;
    }
  }

  // 중복되는 숫자가 있는 경우
  sameNumber() {
    const deleteSameNumber = new Set(this.#numbers).size;

    if (this.#numbers.length !== deleteSameNumber) {
      throw ERROR.sameNumber;
    }
  }
}

export default Lotto;
