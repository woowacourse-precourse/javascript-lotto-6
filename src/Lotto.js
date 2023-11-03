import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    Lotto.#validateLength(numbers);
    Lotto.#validateRedundancy(numbers);
  }

  static #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  static #validateRedundancy(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }
  }

  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }
}

export default Lotto;
