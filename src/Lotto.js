import { ERROR } from "./constants/messages";
import { LOTTO } from './constants/values';

class Lotto { //예외처리 및 값 저장
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    this.validateLength();
    this.validateRange();
    this.validateDuplicate();
    this.validateNumber();
  }

  validateLength() {
    const isRightLength = this.#numbers.length !== LOTTO.LEN;
    try {
      if (isRightLength) throw new Error(ERROR.LOTTO);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isRightLength;
  }
  
  validateRange() {
    const isRightRange = this.#numbers.filter(v => v < LOTTO.MIN || v > LOTTO.MAX).length > 0;
    try {
      if (isRightRange) throw new Error(ERROR.LOTTO);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isRightRange;
  }
  
  validateDuplicate() {
    try {
      if (this.isDuplicate) throw new Error(ERROR.LOTTO);
    }
    catch (error) {
      Console.print(error.message);
    }
  }
  
  validateNumber() {
    const isNumber = this.#numbers.filter(v => isNaN(v)).length > 0;
    try {
      if (isNumber) throw new Error(ERROR.LOTTO);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isNumber;
  }

}

export default Lotto;
