import { ERROR, LOTTO } from "./constant";

class Lotto { //예외처리 및 값 저장
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.LEN) throw new Error(ERROR.LOTTO);
    if (numbers.filter(v => v < LOTTO.MIN || v > LOTTO.MAX).length > 0) throw new Error(ERROR.LOTTO);
    if (new Set(numbers).size !== numbers.length) throw new Error(ERROR.LOTTO);
    if (numbers.filter(v => isNaN(v)).length > 0) throw new Error(ERROR.LOTTO);
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
