import { ERROR } from "../constants/messages";
import { LOTTO } from '../constants/values';
import { Console } from "@woowacourse/mission-utils";

class Lotto { //예외처리 및 값 저장
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.split(',').map(Number);
    this.#validate();
  }

  #validate() {
    this.checkLength();
    this.checkRange();
    this.checkDuplicate();
    this.checkDivision();
  }

  checkLength() {
    try {
      if (this.#numbers.length < LOTTO.LEN) throw new Error(ERROR.LOTTO_LENGTH);
    }
    catch (error) {
      Console.print(error.message);
      //숫자를 재입력할 Console.readLine()함수 
    } 
  }

  checkRange() {
    try {
      if (this.#numbers.filter(v => v < LOTTO.MIN || v > LOTTO.MAX).length > 0) throw new Error(ERROR.LOTTO_RANGE);
    }
    catch (error) {
      Console.print(error.message);
      //숫자를 재입력할 Console.readLine()함수 
    } 
  }

  checkDuplicate() {
    try {
      if (this.#numbers.length !== new Set(this.#numbers).size) throw new Error(ERROR.LOTTO_DUPILICATE);
    }
    catch (error) {
      Console.print(error.message);
      //숫자를 재입력할 Console.readLine()함수 
    }
  }

  checkDivision() {
    try {
      if (this.#numbers.filter(v => isNaN(v)).length > 0) throw new Error(ERROR.LOTTO_DIVISION);
    }
    catch (error) {
      Console.print(error.message);
      //숫자를 재입력할 Console.readLine()함수 
    }
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
