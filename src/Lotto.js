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
  }

  printLottoNumbers() {
    MissionUtils.Console.print("[" + this.#numbers.join(", ") + "]");
  }

  compareNumbers(winningNumbers, bonusNumber) {
    let winningCount = 0;
    let bonusCount = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) winningCount += 1;
    });
    if (winningCount === 5 && this.#numbers.includes(bonusNumber))
      bonusCount += 1;

    return [winningCount >= 3 ? winningCount : 0, bonusCount];
  }
}

export default Lotto;
