import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/Messages.js';

class BonusNum {
  constructor(BonusNum, winningNum) {
    this.validate(BonusNum, winningNum);
  }

  validate(BonusNum, winningNum) {
    if (BonusNum <= 0 || 45 < BonusNum) {
      Console.print(ERROR_MESSAGE.NUM_RANGE);
      throw new Error(ERROR_MESSAGE.NUM_RANGE);
    } else if (winningNum.includes(BonusNum)) {
      Console.print(ERROR_MESSAGE.BONUSNUM_WINNING_DUPLICATE);
      throw new Error(ERROR_MESSAGE.BONUSNUM_WINNING_DUPLICATE);
    }
  }
}

export default BonusNum;
