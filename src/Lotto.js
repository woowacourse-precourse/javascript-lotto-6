import { ERROR_MESSAGE } from "./constants/constant";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const numbersSet = new Set(numbers);
    
    if (numbersSet.size !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_ERROR)
    }
  }

  getNumbers() {
    return this.#numbers;
  }

}

export default Lotto;
