import { MissionUtils } from "@woowacourse/mission-utils";

const Random = MissionUtils.Random;
const Console = MissionUtils.Console;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.COUNT = 0;
    this.BONUS = false;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const setArray = new Set(numbers);
    if (setArray.size !== 6) {
      throw new Error("[ERROR] 로또 번호가 중복되었습니다.");
    }
  }

  static createNumber() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  static sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  printNumber() {
    const sortNumbers = Lotto.sortNumbers(this.#numbers);
    return Console.print(`[${sortNumbers.join(", ")}]`);
  }

  compareNumber(winningNumbers) {
    this.#numbers.forEach((number) =>
      this.qulificationWinNumber(winningNumbers, number)
    );
  }

  qulificationWinNumber(winningNumber, number) {
    if (winningNumber.includes(number)) {
      this.COUNT++;
    }
  }

  compareBonusNumber(bonusNumber) {
    if (this.#numbers.includes(+bonusNumber)) {
      this.BONUS = true;
    }
  }
}

export default Lotto;
