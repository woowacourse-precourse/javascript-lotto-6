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
  
}
export default Check;
