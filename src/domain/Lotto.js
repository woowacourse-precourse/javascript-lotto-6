import { RANK } from "../static/Static.js";
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
    const rank = this.getRank(matchedCount, isBonusNumIncluded);
    return rank;
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

  getRank(matchedCount, isBonusNumIncluded) {
    switch (matchedCount) {
      case 6:
        return RANK.first;
      case 5:
        return isBonusNumIncluded ? RANK.second : RANK.third;
      case 4:
        return RANK.fourth;
      case 3:
        return RANK.fifth;
      default:
        return null;
    }
  }
}

export default Lotto;
