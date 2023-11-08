import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/Messages.js';
import { NUM } from '../constant/Number.js';

class BonusNum {
  constructor(BonusNum, winningNum) {
    this.validate(BonusNum, winningNum);
  }

  validate(BonusNum, winningNum) {
    if (BonusNum < NUM.LOTTO_MINNUM || NUM.LOTTO_MAXNUM < BonusNum) {
      Console.print(ERROR_MESSAGE.NUM_RANGE);
      throw new Error(ERROR_MESSAGE.NUM_RANGE);
    } else if (winningNum.includes(BonusNum)) {
      Console.print(ERROR_MESSAGE.BONUSNUM_WINNING_DUPLICATE);
      throw new Error(ERROR_MESSAGE.BONUSNUM_WINNING_DUPLICATE);
    }
  }
}

export default BonusNum;
