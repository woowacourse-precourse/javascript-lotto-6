import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#printLottoNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다");
    }
  }
  #printLottoNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getCorrectNumberCount(numbers, bonusNumber) {
    const result = [0, 0];
    for (let i = 0; i < 6; i++) {
      if (this.#numbers.includes(numbers[i])) {
        result[0]++;
      }
    }
    if (this.#numbers.includes(bonusNumber)) {
      result[1]++;
    }
    return result;
  }
}

export default Lotto;
