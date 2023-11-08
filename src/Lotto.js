import { Console } from "@woowacourse/mission-utils";

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
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  print() {
    this.#numbers.sort((a, b) => a - b);
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getNumbers() {
    return this.#numbers;
  }

  checkWinningNumber(lotto, bonusNumber) {
    const winningNumber = lotto.getNumbers();
    const matchCount = this.#numbers.filter((number) =>
      winningNumber.includes(number)
    ).length;
    const isBonusNumber = winningNumber.includes(bonusNumber);
    return { matchCount, isBonusNumber };
  }
}

export default Lotto;
