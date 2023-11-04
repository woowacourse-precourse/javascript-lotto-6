import { MissionUtils } from "@woowacourse/mission-utils";

const PRIZE_VALUES = {
  3: 5000,
  4: 50000,
  5: 1500000,
  "5+1": 30000000,
  6: 2000000000,
};

class Lotto {
  #numbers;

  constructor(numbers, shouldSort = true) {
    this.#validate(numbers);
    this.#numbers = shouldSort ? numbers.sort((a, b) => a - b) : [...numbers];
  }

  #validate(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 6개여야 합니다.");
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이여야 합니다.");
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
    if (matchCount === 5 && isBonusMatched) {
      return PRIZE_VALUES["5+1"];
    } else {
      return PRIZE_VALUES[matchCount] || 0;
    }
  }
}

export default Lotto;
