import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (
      numbers.filter((num, idx) => numbers.indexOf(num) === idx).length !== 6
    ) {
      throw new Error("[ERROR] 로또 번호에 중복된 수가 존재해선 안됩니다.");
    }

    numbers.forEach((number) => {
      this.#validateNumber(number);
    });
  }

  #validateNumber(number) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  printLotto() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  compare(numbers, bonus) {
    const same = numbers.filter((num) => this.#numbers.includes(num)).length;
    switch (same) {
      case 6:
        return 1;
      case 5:
        return this.#numbers.includes(bonus) ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 6;
    }
  }
}

export default Lotto;
