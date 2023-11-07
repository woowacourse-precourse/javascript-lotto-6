import { numberCheck } from './validation.js';
import { TRY_COST } from './constants/policy.js';
import { MESSAGE } from './constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

class User {
  constructor() {
    this.count = 0;
  }

  #validation(number) {
    numberCheck.number(number, MESSAGE.ERROR.number);
    numberCheck.unit(number, TRY_COST, MESSAGE.ERROR.unit);
  }

  getCount() {
    console.log(this.count);
    return this.count;
  }

  setUserMoney(money) {
    this.count = money / TRY_COST;
    Console.print(MESSAGE.USER.buyLotto(this.count));
  }

  async readUserMoney() {
    return Number(await Console.readLineAsync(MESSAGE.USER.setMoney));
  }

  async readAndSetUserMoney() {
    try {
      const money = await this.readUserMoney();
      this.#validation(money);
      this.setUserMoney(money);
    } catch (err) {
      Console.print(err.message);
      await this.readAndSetUserMoney();
    }
  }
}

export default User;
