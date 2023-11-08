import ErrorMessage from "../constants/ErrorMessage.js";
import Constants from "../constants/Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== Constants.LOTTO_LENGTH) {
      throw new Error(ErrorMessage.LENGTH);
    }
    const SET_NUM = new Set([...numbers]);
    if (SET_NUM.size !== Constants.LOTTO_LENGTH) {
      throw new Error(ErrorMessage.DUPLICATE);
    }
    numbers.forEach(v => {
      if (isNaN(v)) throw new Error(ErrorMessage.ONLY_NUMBER);
      if (v < Constants.LOTTO_START && v>Constants.LOTTO_END) throw new Error(ErrorMessage.OUT_RANGE);
    });
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}
export default Lotto;
