import {MissionUtils} from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  static PRICE = 1000;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const isNotInRange = number => number < 1 || number > 45;
    if (numbers.some(isNaN)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (numbers.some(isNotInRange)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
    }
  }
}

export default Lotto;
