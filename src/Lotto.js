import { LOTTO_ERROR_MSG } from "./Utils/Constants";

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

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(LOTTO_ERROR_MSG.DUPLICATE_NUM);
    }

    if (numbers < 1 || numbers > 45) {
      throw new Error(LOTTO_ERROR_MSG.NUM_RANGE_1TO45);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
