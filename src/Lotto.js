import { MissionUtils } from "@woowacourse/mission-utils";
import CONSTANT from "./constant/constants";

class Lotto {
  #numbers;

  constructor(numbers, shouldSort = true) {
    this.#validate(numbers);
    this.#numbers = shouldSort ? numbers.sort((a, b) => a - b) : [...numbers];
  }

  #validate(numbers) {
    const { ERR_LOG } = CONSTANT;

    if (new Set(numbers).size !== 6) {
      throw new Error(`${ERR_LOG.WRONG_LENGTH}`);
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(`${ERR_LOG.OUT_OF_RANGE}`);
    }
  }

  get numbers() {
    return this.#numbers;
  }

  static generateRandom() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  checkWinning(winningNumbers, bonusNumber) {
    let matchCount = this.numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;
    let isBonusMatched = this.numbers.includes(bonusNumber);
    let prize = this.calculatePrize(matchCount, isBonusMatched);

    return {
      matchCount,
      isBonusMatched,
      prize,
    };
  }

  calculatePrize(matchCount, isBonusMatched) {
    const { PRIZE_VALUES } = CONSTANT;

    if (matchCount === 5 && isBonusMatched) {
      return PRIZE_VALUES["5+1"];
    } else {
      return PRIZE_VALUES[matchCount] || 0;
    }
  }
}

export default Lotto;
