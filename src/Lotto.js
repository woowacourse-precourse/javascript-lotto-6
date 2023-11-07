import { LOTTO } from "./Constants/Constant";
import { ERROR } from "./Constants/Message";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.sort((a,b) => a - b);
    this.#checkLotto(numbers)
  }

  #validateLen(numbers) {
    if(numbers.length !== LOTTO.MAX_COUNT) {
      throw new Error(ERROR.NUM_LENGTH)
    }
  }

  #validateDuplicate(numbers) {
    if(new Set(numbers).size !== numbers.length){
      throw new Error(ERROR.NUM_DUPLICATION)
    }
  }

  #isNum(numbers){
    if(numbers.every(num => typeof num !== 'number' && isNaN(num))){
      throw new Error(ERROR.NOT_NUM)
    }
  }

  #numRange(numbers){
    if(numbers.some(num => num < 1 || num > 45)){
      throw new Error(ERROR.NUM_RANGE)
    }
  }

  #checkLotto(numbers) {
    this.#validateLen(numbers);
    this.#validateDuplicate(numbers);
    this.#isNum(numbers);
    this.#numRange(numbers);
  }

  // 보너스 넘버

  #checkBonusDuplicate(number) {
    if(this.#numbers.includes(number)){
      throw new Error(ERROR.BONUS_NUM_DUPLICATION)
    }
  }

  #validateBonusNum(number) {
    this.#isNum(number);
    this.#numRange(number);
    this.#checkBonusDuplicate(number);
  }

}

export default Lotto;
