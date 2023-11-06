import { numberCheck } from './validation.js';
import { TRY_COST } from './constants/policy.js';
import { MESSAGE } from './constants/messages.js';
import {Console} from "@woowacourse/mission-utils";

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

  getMoney() {
    return this.money;
  }

  setUserMoney(money) {
    this.#validation(money);
    this.money = money;
    this.count = money / TRY_COST;
    Console.print(MESSAGE.USER.buyLotto(this.count))
  }

  async readUserMoney(){
    return Number(await Console.readLineAsync(MESSAGE.USER.setMoney))
  }
}

export default User;
