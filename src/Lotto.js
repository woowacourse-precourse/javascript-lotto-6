import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    Lotto.#validateLength(numbers);
    Lotto.#validateRedundancy(numbers);
    Lotto.#validateNumericRange(numbers);
  }

  getMatchingCountWith(otherLotto) {
    return otherLotto.getNumbers().filter((num) => this.has(num)).length;
  }

  has(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }

  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
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

  static #validateNumericRange(numbers) {
    if (!numbers.every((num) => num >= 1 && num <= 45))
      throw new Error("[ERROR] 로또 번호의 범위는 1~45 이어야 합니다.");
  }
}

export default Lotto;
