import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  //유효성검사
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개 여야 합니다.");
    }

    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
      }
    }
    //로또 번호 중복 방지
    const set = new Set(numbers);
    if (set.size < 6) {
      throw new Error("[ERROR] 숫자가 중복됩니다.");
    }
  }

  answerCount(answer) {
    let count = 0;
    for (const n of this.#numbers) {
      if (answer.includes(n)) {
        count++;
      }
    }
    return count;
  }

  bonusMatch(bonus) {
    if (this.#numbers.includes(bonus)) {
      return true;
    }
    return false;
  }
}
// TODO: 추가 기능 구현

export default Lotto;
