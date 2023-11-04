import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constant/Messages.js';

class Money {
  constructor(buyMoney) {
    this.validate(buyMoney);
    this.numOfLotto = buyMoney / 1000;
  }

  validate(buyMoney) {
    const regexr = /^\d+$/;
    if (regexr.test(buyMoney) === false)
      throw new Error(ERROR_MESSAGE.BUY_MONEY_NOT_NUM);
    else if (buyMoney % 1000 != 0) {
      throw new Error(ERROR_MESSAGE.BUY_MONEY_1000);
    }
  }
}

export default Money;
