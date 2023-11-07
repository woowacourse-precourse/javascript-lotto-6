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

  checkLottoLank(winningNumbers, bonusNum) {
    const sameCnt = winningNumbers.reduce(
      (a, c) => (this.#numbers.includes(c) ? a + 1 : a),
      0
    );
    switch (sameCnt) {
      case 6:
        return 1;
      case 5:
        if (this.#numbers.includes(bonusNum)) return 2;
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 6;
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
