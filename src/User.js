import { numberCheck } from './validation.js';
import { TRY_COST } from './constants/policy.js';
import { MESSAGE } from './constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

class User {
  constructor() {
    this.money = 0;
    this.count = 0;
  }

  #validation(number) {
    numberCheck.number(number, MESSAGE.ERROR.number);
    numberCheck.unit(number, TRY_COST, MESSAGE.ERROR.unit);
  }

  getCount() {
    return this.count;
  }

  setUserMoney(money) {
    this.money = money;
    this.count = money / TRY_COST;
    Console.print(MESSAGE.USER.buyLotto(this.count));
  }

  static async readUserMoney() {
    try {
      const money = Number(await Console.readLineAsync(MESSAGE.USER.setMoney));
      this.#validation(money);
      return money;
    } catch (err) {
      Console.print(err.message);
      await User.readUserMoney();
    }
  }
}

export default User;
