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
    if (
      numbers.some(
        (number) =>
          isNaN(Number(number)) || number < 1 || number > 45 || number % 1 !== 0
      )
    ) {
      throw new Error(
        "[ERROR] 입력한 숫자는 1부터 45 사이의 자연수이어야 합니다."
      );
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 중복된 숫자는 입력하면 안 됩니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
