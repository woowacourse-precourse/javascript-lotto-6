import { ERROR } from "./constants/messages";
import { LOTTO } from './constants/values';

class Lotto { //예외처리 및 값 저장
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
  }

  validate(numbers) {
    this.validateLength(numbers);
    this.validateRange(numbers);
    this.validateDuplicate(numbers);
    this.validateNumber(numbers);
  }

  validateLength(numbers) {
    const isRightLength = numbers.length !== LOTTO.LEN;
    try {
      if (isRightLength) throw new Error(ERROR.LOTTO);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isRightLength;
  }
  
  validateRange(numbers) {
    const isRightRange = numbers.filter(v => v < LOTTO.MIN || v > LOTTO.MAX).length > 0;
    try {
      if (isRightRange) throw new Error(ERROR.LOTTO);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isRightRange;
  }
  
  validateDuplicate(numbers) {
    const isDuplicate = new Set(numbers).size !== numbers.length;
    try {
      if (isDuplicate) throw new Error(ERROR.LOTTO);
    }
    catch (error) {
      Console.print(error.message);
    }
  }
  
  validateNumber(numbers) {
    const isNumber = numbers.filter(v => isNaN(v)).length > 0;
    try {
      if (isNumber) throw new Error(ERROR.LOTTO);
    }
    catch (error) {
      Console.print(error.message);
    }
    return isNumber;
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
