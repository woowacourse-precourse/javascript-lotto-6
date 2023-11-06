import { ERROR_MESSAGE } from "./Constant.js";

class LottoGame {
  constructor() {
    this.lottoCount = null;
  }

  setLotteCount(money) {
    this.validateMoney(money);
  }

  validateMoney(money) {
    if (isNaN(money)) throw new Error(ERROR_MESSAGE.NUMBER);

    if (money < 1000) throw new Error(ERROR_MESSAGE.MIN_MONEY);

    if (money % 1000 !== 0) throw new Error(ERROR_MESSAGE.DIVISION);
  }
}

module.exports = LottoGame;
