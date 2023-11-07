import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    this.#numbers.sort((a, b) => a - b);
    this.#validate(this.#numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  printLottoNum() {
    MissionUtils.Console.print(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
