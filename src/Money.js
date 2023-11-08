import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, ERROR_MESSAGE } from './constant.js';

class Money {
  #money;

  #numberOfLotto;

  async inputMoney() {
    let money;
    try {
      money = await Console.readLineAsync(LOTTO_MESSAGE.MONEY_INPUT);
      if (!Number.isInteger(money) && money % 1000 !== 0) {
        throw new Error(ERROR_MESSAGE.MONEY);
      }
    } catch (error) {
      Console.print(error.message);
      money = await this.inputMoney();
    }
    this.#money = money;
    this.#numberOfLotto = this.#money / 1000;
  }

  printNumberOfLotto() {
    Console.print(`${this.#numberOfLotto}개를 구매했습니다.`);
  }

  getNumberOfLotto() {
    return this.#numberOfLotto;
  }
}

export default Money;
