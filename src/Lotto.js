import { ERROR, NUMBERS, LOTTO_NUMBER_RANGE } from './util/constant.js';

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

  notNumberElement() {
    this.#numbers.forEach(number => {
      return this.notNumber(number);
    });
  }

  notNumber(number) {
    if (/[\D]/g.test(number)) {
      throw ERROR.notNumberic;
    }
  }

  notSixNumber() {
    if (this.#numbers.length !== NUMBERS.lottoLength) {
      throw ERROR.notSixNumber;
    }
  }

  notRangeNumber() {
    this.#numbers.forEach(number => {
      return this.numberListRangeCheck(Number(number));
    });
  }

  numberListRangeCheck(number) {
    if (number < LOTTO_NUMBER_RANGE[0] || number > LOTTO_NUMBER_RANGE[1]) {
      throw ERROR.rangeOverInput;
    }
  }

  sameNumber() {
    const deleteSameNumber = new Set(this.#numbers).size;

    if (this.#numbers.length !== deleteSameNumber) {
      throw ERROR.sameNumber;
    }
  }
}

export default Lotto;
