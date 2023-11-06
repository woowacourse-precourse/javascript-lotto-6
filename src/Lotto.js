import { MissionUtils } from "@woowacourse/mission-utils";
import { model } from "./Model.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers;
    model.lottoNumbers.push(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicate(numbers) {
    for (let i = 0; i < numbers.length-1; i++) {
      if (numbers[i] === numbers[i+1]) {
        throw new Error("[ERROR] 로또 번호가 중복되었습니다.")
      }
    }
  }
  #validateRange(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      this.#validateRangeEachNumber(numbers[i]);
    }
  }

  #validateRangeEachNumber(number) {
    if (number > 45 || number < 1) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
    }
  }

  numberSort() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }

  printNumbers() {
    this.numberSort();

    MissionUtils.Console.print(`[${this.#numbers.join(', ')}]`);
  }
}

export default Lotto;
