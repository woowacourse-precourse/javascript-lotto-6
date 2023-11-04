import { MATCHED_COUNT } from "../static/Static.js";
class Lotto {
  #numbers;
  // 필드 추가 불가

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkResult(winningNums, bonusNum) {
    const matchedCount = this.countMatchedNums(winningNums);
    const isBonusNumIncluded = this.isBonusNumIncluded(bonusNum);
    const result = this.getResult(matchedCount, isBonusNumIncluded);
    return result;
  }

  countMatchedNums(winningNums) {
    const matchedNums = this.#numbers.filter((num) =>
      winningNums.includes(num)
    );
    const matchedCount = matchedNums.length;
    return matchedCount;
  }

  isBonusNumIncluded(bonusNum) {
    return this.#numbers.includes(bonusNum) ? true : false;
  }

  getResult(matchedCount, isBonusNumIncluded) {
    switch (matchedCount) {
      case 6:
        return MATCHED_COUNT.six;
      case 5:
        return isBonusNumIncluded
          ? MATCHED_COUNT.fiveAndBonus
          : MATCHED_COUNT.five;
      case 4:
        return MATCHED_COUNT.four;
      case 3:
        return MATCHED_COUNT.three;
      default:
        return null;
    }
  }
}

export default Lotto;
