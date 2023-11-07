import { MissionUtils } from "@woowacourse/mission-utils";

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
    const checkDup = new Set(numbers);
    if (checkDup.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }

  getCorrectNumber(winNumber, winbonus) {
    let correct = 0;
    let bonusCorrect = 0;
    winNumber.forEach((win) => {
      if (this.#numbers.includes(parseInt(win))) {
        correct++;
      }
    });
    if (this.#numbers.includes(winbonus)) {
      bonusCorrect++;
    }
    return { correct: correct, bonusCorrect: bonusCorrect };
  }
}

export default Lotto;
