import { Console } from "@woowacourse/mission-utils";
import LOTTO_CONSTANT from "../utils/constant";

class Result {
  constructor() {
    this.first = 0; // 6개 일치
    this.second = 0; // 5개 일치 + 보너스 번호 일치
    this.third = 0; // 5개 일치
    this.fourth = 0; // 4개 일치
    this.fifth = 0; // 3개 일치
  }

  getMatchingNumbersCount(winning, bonus, myLotto) {
    const winningArray = winning.getLotto();
    const bonusArray = bonus.getBonus();
    const myLottoArray = myLotto.getMyLottoList();
    myLottoArray.forEach((lotto) => {
      this.checkLottoMatch(lotto, winningArray, bonusArray[0]);
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
      ((this.fifth * 5000 +
        this.fourth * 50000 +
        this.third * 1500000 +
        this.second * 30000000 +
        this.first * 2000000000) /
        purchase) *
      100;

    return profit.toFixed(1);
  }
}

export default Result;
