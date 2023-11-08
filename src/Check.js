import { MissionUtils } from '@woowacourse/mission-utils';

class Check {
  countArray = [0, 0, 0, 0, 0];
  totalEarned = 0;
  earnRatio;
  checkCount(checkLotto) {
    switch (checkLotto.win) {
      case 3:
        this.countArray[0] += 1;
        break;
      case 4:
        this.countArray[1] += 1;
        break;
      case 5:
        this.countArray[2] += 1;
        break;
      case 6:
        this.countArray[4] += 1;
        break;
    }
    this.checkFiveBonusCount(checkLotto);
  }

  checkFiveBonusCount(checkLotto) {
    if (checkLotto.win === 5 && checkLotto.bonus) {
      this.countArray[2] -= 1;
      this.countArray[3] += 1;
    }
  }
  threeCorrect(count) {
    const THREE_CORRECT = `3개 일치 (5,000원) - ${count}개`;
    return THREE_CORRECT;
  }
  fourCorrect(count) {
    const FOUR_CORRECT = `4개 일치 (50,000원) - ${count}개`;
    return FOUR_CORRECT;
  }
  fiveCorrect(count) {
    const FIVE_CORRECT = `5개 일치 (1,500,000원) - ${count}개`;
    return FIVE_CORRECT;
  }
  fiveBonusCorrect(count) {
    const FIVE_BONUS_CORRECT = `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
    return FIVE_BONUS_CORRECT;
  }
  sixCorrect(count) {
    const SIX_CORRECT = `6개 일치 (2,000,000,000원) - ${count}개`;
    return SIX_CORRECT;
  }
  earnTotal(countArray) {
    const PRICE_MONEY = [5000, 50000, 1500000, 30000000, 2000000000];
    countArray.forEach((count, index) => {
      this.totalEarned += count * PRICE_MONEY[index];
    });
  }
  calculateEarnRatio(payedMoney) {
    this.earnRatio = ((this.totalEarned / payedMoney) * 100).toFixed(1);
  }
  printEarnRatio() {
    const EARN_RATIO = `총 수익률은 ${Number(this.earnRatio)}%입니다.`;
    MissionUtils.Console.print(EARN_RATIO);
  }
  printCount(countArray) {
    const WINNING_MSG = '\n당첨 통계\n---';
    MissionUtils.Console.print(WINNING_MSG);
    MissionUtils.Console.print(this.threeCorrect(countArray.shift()));
    MissionUtils.Console.print(this.fourCorrect(countArray.shift()));
    MissionUtils.Console.print(this.fiveCorrect(countArray.shift()));
    MissionUtils.Console.print(this.fiveBonusCorrect(countArray.shift()));
    MissionUtils.Console.print(this.sixCorrect(countArray.shift()));
  }
  checkLotto(lottoArray, payedMoney) {
    lottoArray.forEach((item) => {
      this.checkCount(item);
    });
    this.earnTotal(this.countArray);
    this.calculateEarnRatio(payedMoney);
    this.printCount(this.countArray);
    this.printEarnRatio();
  }
}
export default Check;
