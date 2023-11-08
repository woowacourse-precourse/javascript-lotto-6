import { Random } from "@woowacourse/mission-utils";

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

    if (!this.#isValidNumberRange(numbers)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.");
    }
  }

  #isValidNumberRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateRandomLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }
}

export default Lotto;
