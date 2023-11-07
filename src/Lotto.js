/* eslint-disable class-methods-use-this */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { getRank } from "./utils/loterry.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if ([...new Set(numbers)].length !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 없어야 합니다.");
    }
  }

  match(winningNumbers, bonusNumber) {
    const matchingCount = winningNumbers.filter((number) =>
      this.#numbers.includes(number),
    ).length;
    const matchingBonus = this.#numbers.includes(bonusNumber);

    return getRank(matchingCount, matchingBonus);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
