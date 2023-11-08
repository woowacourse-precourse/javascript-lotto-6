import { ERROR_MESSAGE } from '../constant/Messages.js';

class BonusNum {
  constructor(BonusNum, winningNum) {
    this.validate(BonusNum, winningNum);
  }

  validate(BonusNum, winningNum) {
    if (BonusNum <= 0 || 45 < BonusNum)
      throw new Error(ERROR_MESSAGE.NUM_RANGE);
    else if (winningNum.includes(BonusNum)) {
      throw new Error(ERROR_MESSAGE.BONUSNUM_WINNING_DUPLICATE);
    }
  }
}

export default BonusNum;
