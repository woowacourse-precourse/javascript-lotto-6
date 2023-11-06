import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Input from './input.js';

// 로또구입
class NumOfBuy {
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
    let inputMoney;
    let valid = true;

    while (valid) {
      inputMoney = await this.#money.inputMoney();

      try {
        if (this.#validateMoneyIsNum(inputMoney)) throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
        if (this.#validateMoneyUnit(inputMoney)) throw new Error(`[ERROR] 구입금액은 천원 단위로 입력 가능합니다.`);
        if (this.#checkNotZero(inputMoney)) throw new Error(`[ERROR] 구입금액은 0보다 커야합니다.`);
        valid = false;
      } catch (error) {
        continue;
      }
    }
    return inputMoney;
  }

  // 로또 구입 금액 입력받기
  // async #inputMoney() {
  //  const inputMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

  //  return Number(inputMoney);
  // }

  // 구입금액 유효성 확인
  #validateMoneyIsNum(inputMoney) {
    if (Number.isNaN(inputMoney)) {
      Console.print('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
      // throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
      return true;
    }
  }

  #validateMoneyUnit(inputMoney) {
    const MONEY_UNIT = 1000;
    if (inputMoney % MONEY_UNIT !== 0) {
      Console.print('[ERROR] 구입금액은 천원 단위로 입력 가능합니다.');
      // throw new Error(`[ERROR] 구입금액은 천원 단위로 입력 가능합니다.`);
      return true;
    }
  }

  // 입력값은 0보다 커야 함.
  #checkNotZero(inputMoney) {
    if (inputMoney <= 0) {
      Console.print('[ERROR] 구입금액은 0보다 커야 합니다.');
      // throw new Error(`[ERROR] 구입금액은 0보다 커야합니다.`);
      return true;
    }
    0;
  }

  // 로또 구입 갯수 계산
  #claculateNumOfBuy(inputMoney) {
    const MONEY_UNIT = 1000;
    const numOfBuy = inputMoney / MONEY_UNIT;
    // Console.print('\n');
    Console.print(`${numOfBuy}개를 구매했습니다.`);
    return numOfBuy;
  }
}

export default NumOfBuy;

// const buy = new NumOfBuy();
// buy.run();
