import { MissionUtils } from "@woowacourse/mission-utils";
import { errorMessage, gameConstant } from "./Constant.js";

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
    if (numbers.length !== gameConstant.LOTTO_LENGTH) {
      throw new Error(errorMessage.NUMBER_LENGTH);
    }
    const setArray = new Set(numbers);
    if (setArray.size !== gameConstant.LOTTO_LENGTH) {
      throw new Error(errorMessage.NUMBER_OVERLAP);
    }
  }

  static createNumber() {
    const numbers = Random.pickUniqueNumbersInRange(
      gameConstant.LOTTO_MIN,
      gameConstant.LOTTO_MAX,
      gameConstant.LOTTO_LENGTH
    );
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
