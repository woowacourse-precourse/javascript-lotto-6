/* eslint-disable */
import { Console } from '@woowacourse/mission-utils';
import Input from './input.js';
import Money from './money.js';

// 로또구입
class MoneyCycle {
  #money;

  constructor() {
    this.#money = new Input();
  }

  async run() {
    const inputMoney = await this.validCheck();
    const numOfBuy = this.#claculateNumOfBuy(inputMoney);

    return numOfBuy; // 숫자형
  }

  async validCheck() {
    let inputMoneySting;
    let inputMoney;
    let valid = true;

    while (valid) {
      inputMoneySting = await this.#money.inputMoney();
      inputMoney = Number(inputMoneySting);
      try {
        new Money(inputMoney);
        valid = false;
      } catch (error) {
        continue;
      }
    }
    return inputMoney;
  }

  // 로또 구입 갯수 계산
  #claculateNumOfBuy(inputMoney) {
    const MONEY_UNIT = 1000;
    const numOfBuy = inputMoney / MONEY_UNIT;

    Console.print(`${numOfBuy}개를 구매했습니다.`);
    return numOfBuy;
  }
}

export default MoneyCycle;
