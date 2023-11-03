import { MissionUtils } from "@woowacourse/mission-utils";

export class Lotto {
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

  printNumbers() {
    MissionUtils.Console.print(this.#numbers.sort((a, b) => a - b));
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
