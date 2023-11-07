/* eslint-disable class-methods-use-this */
import { Console } from '@woowacourse/mission-utils';

// 로또구입
class Money {
  #money;

  constructor(money) {
    this.#validCheck(money);
  }

  #validCheck(inputMoney) {
    if (this.#validateMoneyIsNum(inputMoney)) throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
    if (this.#checkNotZero(inputMoney)) throw new Error(`[ERROR] 구입금액은 0보다 커야합니다.`);
    if (this.#validateMoneyUnit(inputMoney)) throw new Error(`[ERROR] 구입금액은 천원 단위로 입력 가능합니다.`);
  }

  // 구입금액 유효성 확인
  #validateMoneyIsNum(inputMoney) {
    const numMoney = Number(inputMoney);
    if (Number.isNaN(numMoney)) {
      Console.print('[ERROR] 구입금액은 숫자만 입력 가능합니다.');

      return true;
    }
  }

  #validateMoneyUnit(inputMoney) {
    const MONEY_UNIT = 1000;
    if (inputMoney % MONEY_UNIT !== 0) {
      Console.print('[ERROR] 구입금액은 천원 단위로 입력 가능합니다.');

      return true;
    }
  }

  // 입력값은 0보다 커야 함.
  #checkNotZero(inputMoney) {
    if (inputMoney <= 0) {
      Console.print('[ERROR] 구입금액은 0보다 커야 합니다.');

      return true;
    }
    0;
  }

  // 로또 구입 갯수 계산
  #claculateNumOfBuy(inputMoney) {
    const MONEY_UNIT = 1000;
    const numOfBuy = inputMoney / MONEY_UNIT;

    Console.print(`${numOfBuy}개를 구매했습니다.`);
    return numOfBuy;
  }
}

export default Money;
