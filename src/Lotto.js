import { Console } from "@woowacourse/mission-utils";
import { ERROR } from './Constant.js'

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  
  #validate(numbers) {
    const numberArray = Object.values(numbers);
    if (numberArray.length !== 6) {
      throw new Error(ERROR.LOTTO_NUMBER_NOT_SIX);
    }

    numberArray.forEach((number) => {
      number = Number(number);
      if(number < 1 || number > 45) throw new Error(ERROR.LOTTO_NUMBER_NOT_IN_VALID_RANGE);
    });
    
    const numberSet = new Set(numberArray);
    if (numberArray.length !== numberSet.size) {
      throw new Error(ERROR.LOTTO_NUMBER_IS_REDUNDANT);
    }
  }

  getNumbers() {
    return this.#numbers;
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
