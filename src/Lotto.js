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

    if(numbers.filter((num, idx)=>numbers.indexOf(num)===idx).length !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 수가 존재해선 안됩니다.");
    }
  }

  // TODO: 추가 기능 구현
  printLotto() {
    Console.print(`[${this.#numbers.join(", ")}]`);
    return `[${this.#numbers.join(", ")}]`;
  }
}

export default Lotto;
