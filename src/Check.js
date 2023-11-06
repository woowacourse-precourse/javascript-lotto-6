import { MissionUtils } from '@woowacourse/mission-utils';

class Check {
  countArray = [0, 0, 0, 0, 0];
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
}
export default Check;
