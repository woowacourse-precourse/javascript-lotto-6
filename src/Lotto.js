import { ERROR } from "./constants/messages";
import { Console } from "@woowacourse/mission-utils";

class Lotto {
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
      if (this.#numbers.length < 6) throw new Error(ERROR.LOTTO_LENGTH);
    }
    catch (error) {
      Console.print(error.message);
    } 
    finally {
      //숫자를 재입력할 Console.readLine()함수 
    }
  }

  checkRange() {
    try {
      if (this.#numbers.filter(v => v < 1 || v > 45).length > 0) throw new Error(ERROR.LOTTO_RANGE);
    }
    catch (error) {
      Console.print(error.message);
    } 
    finally {
      //숫자를 재입력할 Console.readLine()함수 
    }
  }

  checkDuplicate() {
    try {
      if (this.#numbers.length !== new Set(input).size) throw new Error(ERROR.LOTTO_DUPILICATE);
    }
    catch (error) {
      Console.print(error.message);
    }
    finally {
      //숫자를 재입력할 Console.readLine()함수 
    }
  }

  checkDivision() {
    try {
      if (this.#numbers.filter(v => isNaN(v)).length > 0) throw new Error(ERROR.LOTTO_DIVISION);
    }
    catch (error) {
      Console.print(error.message);
    }
    finally {
      //숫자를 재입력할 Console.readLine()함수 
    }
  }

}

export default Lotto;
