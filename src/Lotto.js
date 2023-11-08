import Validate from "./Validate.js";
import ErrorMessages from "./Error.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ErrorMessages.invalidInput("로또 번호는 6개여야 합니다."));
    }
    if (!Validate.isLottoNumbersFormat(numbers)) {
      throw new Error(ErrorMessages.lottoFormatError);
    }
  }

  #sortNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }

  printLottoNumbers() {
    const str = this.#numbers.join(", ");
    MissionUtils.Console.print(`[${str}]`);
  }

  calculateLottoRank(winningNumbers, bonusNumber) {
    const matchingCount = winningNumbers.reduce(
      (count, number) => this.#numbers.includes(number) ? count + 1 : count,
      0
    );

    if (matchingCount === 6) return 1;
    if (matchingCount === 5 && this.#numbers.includes(bonusNumber)) return 2;
    if (matchingCount === 5) return 3;
    if (matchingCount === 4) return 4;
    if (matchingCount === 3) return 5;
    return 6;
  }
}

export default Lotto;
