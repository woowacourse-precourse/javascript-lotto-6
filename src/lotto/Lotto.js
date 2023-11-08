import { print } from '../utility/console.js';
import {
  LOTTO_CONSTANT,
  LOTTO_RANK,
  ERROR_MESSAGE,
  FORMATTER,
} from '../constant/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateNumbers(numbers) {
    if (numbers.length !== LOTTO_CONSTANT.numberCount) {
      throw new Error(ERROR_MESSAGE.wrongLottoNumberCount);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.wrongLottoNumberInput);
    }
  }

  #countMatchedNumber(winningNumbers) {
    let matchedNumberCount = 0;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) matchedNumberCount += 1;
    });

    return matchedNumberCount;
  }

  #hasBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) return true;
    return false;
  }

  printNumbers() {
    print(FORMATTER.lottoPrintFormatter(this.#numbers));
  }

  getRank(winningNumbers, bonusNumber) {
    const matchedNumberCount = this.#countMatchedNumber(winningNumbers);

    if (matchedNumberCount === LOTTO_RANK.first.matchedNumber) {
      return LOTTO_RANK.first.rank;
    }
    if (
      this.#hasBonusNumber(bonusNumber) &&
      matchedNumberCount === LOTTO_RANK.second.matchedNumber
    ) {
      return LOTTO_RANK.second.rank;
    }
    if (matchedNumberCount === LOTTO_RANK.third.matchedNumber) {
      return LOTTO_RANK.third.rank;
    }
    if (matchedNumberCount === LOTTO_RANK.fourth.matchedNumber) {
      return LOTTO_RANK.fourth.rank;
    }
    if (matchedNumberCount === LOTTO_RANK.fifth.matchedNumber) {
      return LOTTO_RANK.fifth.rank;
    }
  }
}

export default Lotto;