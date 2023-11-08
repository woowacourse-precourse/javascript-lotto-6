import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/Messages.js';

class Money {
  constructor(buyMoney) {
    this.validate(buyMoney);
    this.numOfLotto = buyMoney / 1000;
  }

  validate(buyMoney) {
    if (isNaN(buyMoney) === true) {
      Console.print(ERROR_MESSAGE.BUY_MONEY_NOT_NUM);
      throw new Error(ERROR_MESSAGE.BUY_MONEY_NOT_NUM);
    } else if (buyMoney % 1000 != 0) {
      Console.print(ERROR_MESSAGE.BUY_MONEY_1000);
      throw new Error(ERROR_MESSAGE.BUY_MONEY_1000);
    } else if (buyMoney <= 0) {
      Console.print(ERROR_MESSAGE.BUY_MONEY_NOT_NEGATIVE);
      throw new Error(ERROR_MESSAGE.BUY_MONEY_NOT_NEGATIVE);
    }
  }
}

export default Money;
