import { ERROR_MESSAGE } from "./Constant.js";

const { Console } = require("@woowacourse/mission-utils");

class LottoGame {
  constructor() {
    this.lottoCount = null;
  }

  setLotteCount(money) {
    this.validateMoney(money);
    this.lottoCount = money / 1000;
  }

  validateMoney(money) {
    if (isNaN(money)) throw new Error(ERROR_MESSAGE.NUMBER);

    if (money < 1000) throw new Error(ERROR_MESSAGE.MIN_MONEY);

    if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.DIVISION);
  }

  printLotteCount() {
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
  }
}

module.exports = LottoGame;
