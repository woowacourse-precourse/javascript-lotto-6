import { Console } from '@woowacourse/mission-utils';

class Result {
  static getWinningResult(resultArray) {
    this.winningThird = resultArray.filter(x => x !== 0 && x % 3 === 0).length;
    this.winningForth = resultArray.filter(x => x !== 0 && x % 4 === 0).length;
    this.winningSix = resultArray.filter(x => x !== 0 && x % 6 === 0).length;
  }

  static calculateWinningMoney(winningInFive) {
    const winThird = 5000 * this.winningThird;
    const winForth = 50000 * this.winningForth;
    const winFive = 1500000 * winningInFive[0];
    const winBonus = 30000000 * winningInFive[1];
    const winSix = 2000000000 * this.winningSix;
    this.winMoney = winThird + winForth + winFive + winBonus + winSix;
    return this.winMoney;
  }

  static calculrateRateOfReturn(userPurchaseAmount) {
    this.RateOfReturn = ((this.winMoney - userPurchaseAmount) / userPurchaseAmount) * 100;
  }

  static printWinningStastics(winningInFive) {
    Console.print(`
당첨통계
---
3개 일치 (5,000원) - ${this.winningThird}개
4개 일치 (50,000원) - ${this.winningForth}개
5개 일치 (1,500,000원) - ${winningInFive[0]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningInFive[1]}개
6개 일치 (2,000,000,000원) - ${this.winningSix}개
총 수익률은 ${(100 - -this.RateOfReturn).toFixed(1)}%입니다.`);
  }
}

export default Result;
