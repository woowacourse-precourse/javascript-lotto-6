import { errorConstants, magicNumber } from '../constants/index.js';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numbersString = numbers.join(',');
    this.#isGoodForm(numbersString); // 숫자 + 콤마 형태인지 확인(길이 확인도 같이).
    const beforeNum = [];
    numbers.forEach((num) => {
      this.#isNotZero(num); // 0이 입력됐는지 체크
      this.#isInRange(num); // 1~45 의 수만 입력됐는지 체크
      this.#isNotSameNum(num, beforeNum); // 중복되는 수가 있는지 체크
      beforeNum.push(num);
    });
  }

  #isGoodForm(numbers) {
    const regExp = /^[0-9]{1,}([,]{1}[0-9]{1,}){5}$/;
    if (!regExp.test(numbers)) throw new Error(errorConstants.WRONG_INPUT);
  }

  #isNotZero(number) {
    if (number === magicNumber.ZERO) throw new Error(errorConstants.NOT_ZERO);
  }

  #isInRange(number) {
    if (number > magicNumber.END_RANGE)
      throw new Error(errorConstants.NOT_IN_RANGE);
  }

  #isNotSameNum(number, beforeNumArr) {
    if (beforeNumArr.includes(number))
      throw new Error(errorConstants.NOT_SAME_NUMBER);
  }

  getLottoNumber() {
    return this.#numbers;
  }
}
