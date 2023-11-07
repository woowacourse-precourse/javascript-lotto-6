import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  // # prefix를 변경할 수 없다.
  // 필드를 추가할 수 없다.
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
