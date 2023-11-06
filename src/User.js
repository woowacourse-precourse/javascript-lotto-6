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

    await this.#setMoney(money);
  }

  async #setMoney(money) {
    try {
      Validator.Money.validate(money);

      this.#money = money;
    } catch (e) {
      Console.print(`${e.name} ${e.message} `);
      return await this.inputMoney();
    }
  }
}
