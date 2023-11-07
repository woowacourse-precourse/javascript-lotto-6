import { Console } from "@woowacourse/mission-utils";
import { ERROR, LOTTO_SCOPE } from './Constant.js'

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  
  #validate(numbers) {
    const numberArray = Object.values(numbers);
    if (numberArray.length !== LOTTO_SCOPE.LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBER_NOT_SIX);
    }

    numberArray.forEach((number) => {
      number = Number(number);
      if(number < LOTTO_SCOPE.MIN || number > LOTTO_SCOPE.MAX) throw new Error(ERROR.LOTTO_NUMBER_NOT_IN_VALID_RANGE);
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
