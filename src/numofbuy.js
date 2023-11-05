import { Console, MissionUtils } from '@woowacourse/mission-utils';

// 로또구입
class NumOfBuy {
  async run() {
    const inputMoney = await this.#inputMoney();
    this.#validateMoneyIsNum(inputMoney);
    this.#validateMoneyUnit(inputMoney);
    this.#checkNotZero(inputMoney);
    const numOfBuy = this.#claculateNumOfBuy(inputMoney);

    return numOfBuy; // 숫자형
  }

  // 로또 구입 금액 입력받기
  async #inputMoney() {
    const inputMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return Number(inputMoney);
  }

  // 구입금액 유효성 확인
  #validateMoneyIsNum(inputMoney) {
    if (Number.isNaN(inputMoney)) {
      // Console.print('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
      throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
    }
  }

  #validateMoneyUnit(inputMoney) {
    const MONEY_UNIT = 1000;
    if (inputMoney % MONEY_UNIT !== 0) {
      throw new Error(`[ERROR] 구입금액은 천원 단위로 입력 가능합니다.`);
    }
  }

  // 입력값은 0보다 커야 함.
  #checkNotZero(inputMoney) {
    if (inputMoney <= 0) {
      throw new Error(`[ERROR] 구입금액은 0보다 커야합니다.`);
    }
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
