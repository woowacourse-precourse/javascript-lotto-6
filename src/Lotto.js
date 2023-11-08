import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error("[ERROR] 중복된 로또번호는 있을 수 없습니다.");
    }
  }

  printLottoNum() {
    let str = this.#numbers.join(", ");
    MissionUtils.Console.print("[" + str + "]");
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
