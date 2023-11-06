import { Console } from '@woowacourse/mission-utils';
import { Input } from './interface/Input.js';
import { Validator } from './validation/Validator.js';

export class User {
  #money;

  getMoney() {
    return this.#money;
  }

  async inputMoney() {
    const money = await Input.readInteger('구입금액을 입력해 주세요.');
    this.#setMoney(money);
  }

  async #setMoney(money) {
    this.#money = money;
  }
}
