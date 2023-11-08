import Constant from "./utils/Constant.js";
import Validator from "./utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.lottoNumCount(numbers);
    Validator.lottoNumHasRedundancy(numbers);
    numbers.forEach((number) => {
      Validator.isNum(number);
      Validator.checkRange(number);
    });
  }

  returnNumbers() {
    return this.#numbers;
  }

  findMatchCount(nums, winningNums) {
    let matchCount = 0;
    nums.forEach((num) => {
      if (winningNums.includes(num)) {
        matchCount++;
      }
    });
    return matchCount;
  }

  // TODO: 추가 기능 구현
  checkRank(nums, winningNums, bonusNum) {
    const matchCount = this.findMatchCount(nums, winningNums);

    if (this.checkFirstRank(matchCount)) {
      return 1;
    }
    if (this.checkSecondRank(matchCount, nums, bonusNum)) {
      return 2;
    }
    if (this.checkThirdRank(matchCount)) {
      return 3;
    }
    if (this.checkFourthRank(matchCount)) {
      return 4;
    }
    if (this.checkFifthRank(matchCount)) {
      return 5;
    }
    return false;
  }

  checkFirstRank(count) {
    if (count === Constant.FIRST) {
      return 1;
    }
  }
  checkSecondRank(count, nums, bonusNum) {
    if (count === Constant.THIRD && nums.includes(bonusNum)) {
      return 2;
    }
  }
  checkThirdRank(count) {
    if (count === Constant.THIRD) {
      return 3;
    }
  }
  checkFourthRank(count) {
    if (count === Constant.FOURTH) {
      return 4;
    }
  }
  checkFifthRank(count) {
    if (count === Constant.FIFTH) {
      return 5;
    }
  }
}

export default Lotto;
