import { ERROR_MESSAGE } from "./Constant.js";

const { Console, Random } = require("@woowacourse/mission-utils");
const { Lotto } = require("./Lotto.js");

class LottoGame {
  constructor() {
    this.lottoCount = null;
    this.lottoList = [];
  }

  setLotteCount(money) {
    this.validateMoney(money);
    this.lottoCount = money / 1000;
    this.publishedLotto(this.lottoCount);
  }

  validateMoney(money) {
    if (isNaN(money)) throw new Error(ERROR_MESSAGE.NUMBER);

    if (money < 1000) throw new Error(ERROR_MESSAGE.MIN_MONEY);

    if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.DIVISION);
  }

  printLotteCount() {
    Console.print(`${this.lottoCount}개를 구매했습니다.`);
  }

  publishedLotto(lottoCount) {
    for (let n = 0; n < lottoCount; n++) {
      const newLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      this.lottoList.push(newLotto);
    }
  }

  printLottoList() {
    this.lottoList.forEach((lotto) => {
      lotto.printNumberList();
    });
  }
}

module.exports = LottoGame;
