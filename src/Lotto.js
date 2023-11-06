import { Console } from "@woowacourse/mission-utils";
import { ERROR } from './Constant.js'

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_NUMBER_NOT_SIX);
    }

    const numberSet = new Set(numbers);
    if (numbers.length !== numberSet.length) {
      throw new Error(ERROR.LOTTO_NUMBER_IS_REDUNDANT);
    }
  }

  sortNumbers() {
    this.#numbers.sort(function(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    });
  }

  printNumbers() {
    const numberString = this.#numbers.join(', ');
    Console.print(`[${numberString}]`); 
  }
}

export default Lotto;
