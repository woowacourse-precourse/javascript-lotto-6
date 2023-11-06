import { ERROR_MESSAGE } from "../constant/ERROR_MESSAGE";
import { LOTTO_SETTINGS } from "../constant/LOTTO_SETTINGS";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
    this.#validateNumber(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers;
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO_SETTINGS.LOTTO_LENGTH) {
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
      LOTTO_SETTINGS.LOTTO_MIN_NUMBER <= number &&
      number <= LOTTO_SETTINGS.LOTTO_MAX_NUMBER
    );

    if (!isSatisfyRange) {
      throw new Error("[ERROR] 범위에러") // 나중에 에러 메시지로 빼기
    }
  }

  #validateNumber(numbers) {
    const check = /^[0-9]+$/;

    for (let number of numbers){
        if (!check.test(number)) {
          throw new Error("[ERROR] 양수만 입력하세요") // // 나중에 에러 메시지로 빼기
      }
    }
  }

  getLotto() {
    return this.#numbers
  }
}

export default Lotto;
