import LOTTO_CONSTANT from "../utils/constant";

class Result {
  constructor() {
    this.first = 0; // 1등: 6개 일치
    this.second = 0; // 2등: 5개 일치 + 보너스 번호 일치
    this.third = 0; // 3등: 5개 일치
    this.fourth = 0; // 4등: 4개 일치
    this.fifth = 0; // 5등: 3개 일치
  }

  getMatchingNumbersCount(winning, bonus, myLotto) {
    myLotto.forEach((lotto) => {
      this.checkLottoMatch(lotto, winning, bonus[0]);
    });
  }

  checkLottoMatch(myLotto, winning, bonus) {
    const matchNumber = myLotto.filter((num) => winning.includes(num));
    const isbonusMatch = myLotto.includes(bonus);
    if (matchNumber.length >= 3) this.checkLottoRank(matchNumber, isbonusMatch);
  }

  checkLottoRank(matchNumber, isbonusMatch) {
    switch (matchNumber.length) {
      case 6:
        return this.setResult("first");
      case 5:
        if (isbonusMatch) return this.setResult("second");
        return this.setResult("third");
      case 4:
        return this.setResult("fourth");
      default:
        return this.setResult("fifth");
    }
  }

  setResult(rank) {
    this[rank] += 1;
  }

  getProfitMargin(purchase) {
    const profit =
      ((this.fifth * LOTTO_CONSTANT.fifthReward +
        this.fourth * LOTTO_CONSTANT.fourthReward +
        this.third * LOTTO_CONSTANT.thirdReward +
        this.second * LOTTO_CONSTANT.secondReward +
        this.first * LOTTO_CONSTANT.fifthReward) /
        purchase) *
      100;

    return profit.toFixed(1);
  }
}

export default Result;
