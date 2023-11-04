import { ERROR_MESSAGE } from "../src/constants/messages";
import { REGEX } from "../src/constants/regex";

const lottoSeller = {
  LOTTO_PRICE: 1000,
  LOTTO_STOCK: 10000,

  exchangeIntoLotto(amount) {
    this.validatePositiveInt(amount);
    const count = this.calcualateLottoCount(amount);
    checkLottoStockIsEnough(count);
  },

  calcualateLottoCount(amount) {
    const count = amount / LOTTO_PRICE;
    if (!REGEX.onlyPositiveInt.test(count)) {
      throw new Error(ERROR_MESSAGE.undividableByThousand);
    }
  },

  validatePositiveInt(value) {
    if (!(REGEX.onlyPositiveInt.test(value) && value > 0)) {
      throw new Error(ERROR_MESSAGE.notPostiveInt);
    }
  },

  checkLottoStockIsEnough(count) {
    if (count > this.LOTTO_STOCK) {
      throw new Error(ERROR_MESSAGE.overLottoStock);
    }
  },
};

export { lottoSeller };
