import { Console } from '@woowacourse/mission-utils';
import Init from '../constant/Init';

class Result {
  static getWinningResult(resultArray) {
    this.winningThird = resultArray.filter(x => x !== 0 && x % 3 === 0).length;
    this.winningForth = resultArray.filter(x => x !== 0 && x % 4 === 0).length;
    this.winningSix = resultArray.filter(x => x !== 0 && x % 6 === 0).length;
  }

  static calculateWinningMoney(winningInFive) {
    const winThird = Number(Init.winningThirtAmount) * this.winningThird;
    const winForth = Number(Init.winningForthAmount) * this.winningForth;
    const winFive = Number(Init.winningFiveAmount) * winningInFive[0];
    const winBonus = Number(Init.winningBonusAmount) * winningInFive[1];
    const winSix = Number(Init.winingSixAmount) * this.winningSix;
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
