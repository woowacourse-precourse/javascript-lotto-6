import { ERROR_MESSAGE } from "../constant/ERROR_MESSAGE";
import { NUMBERS } from "../constant/NUMBERS";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers;
  }

  #validateLength(numbers) {
    if (numbers.length !== NUMBERS.LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.LOTTO_LENGTH_ERROR);
    }
  }

  #validateDuplicate(numbers) {
    const setNumbers = new Set(numbers);
    if (setNumbers.length !== numbers.length) {
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE_ERROR);
    }
  }

  #validateRange(numbers) {
    const isSatisfyRange = numbers.every( 
      (number) =>  
      NUMBERS.LOTTO_MIN_NUMBER <= number &&
      number <= NUMBERS.LOTTO_MAX_NUMBER
    );

    if (!isSatisfyRange) {
      throw new Error("[ERROR] 범위에러")
    }
  }

  getLotto() {
    return this.#numbers
  }
}

export default Lotto;
