import { RANK } from "../static/Static.js";
import Validator from "../utils/validator/Validator.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLength(numbers);
    Validator.validateDuplication(numbers);
  }

  checkResult(winningNums, bonusNum) {
    const matchedCount = this.countMatchedNums(winningNums);
    const isBonusNumIncluded = this.isBonusNumIncluded(bonusNum);
    const rank = this.getRank(matchedCount, isBonusNumIncluded);
    return rank;
  }

  countMatchedNums(winningNumArr) {
    const matchedNums = this.#numbers.filter((num) =>
      winningNumArr.includes(num)
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
