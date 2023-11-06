import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  print() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  /**
   * 당첨 결과 확인
   * @param {*} winning: Winning 객체
   * @returns 등수 반환
   */
  checkWinning(winning) {
    const winningNumbers = winning.getWinning();
    const bonusNumber = winning.getBonus();

    let count = 0;
    this.#numbers.forEach((number, index) => {
      if (number === winningNumbers[index]) count++;
    });

    if (count === 3) return 5;
    if (count === 4) return 4;
    if (count === 5 && winningNumbers.includes(bonusNumber)) return 3;
    if (count === 5 && winningNumbers.includes(bonusNumber)) return 2;
    if (count === 6) return 1;
    return 0;
  }
}

export default Lotto;
