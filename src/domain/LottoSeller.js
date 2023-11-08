import Lotto from "../Lotto.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import REGEX from "../constants/Regex.js";
import { Random } from "@woowacourse/mission-utils";

const LottoSeller = {
  LOTTO_PRICE: 1000,
  LOTTO_STOCK: 1000,
  LOTTO_LENGTH: 6,

  getLottos(moneyAmount) {
    this.validatePositiveInt(moneyAmount);
    const count = this.calcualateLottoCount(moneyAmount);
    this.validateUnderLottoStock(count);
    const lottos = this.pickLottos(count);
    return lottos;
  },

  validatePositiveInt(value) {
    if (!(REGEX.onlyInt.test(value) && value > 0)) {
      throw new Error(ERROR_MESSAGE.notPostiveInt);
    }
  },

  calcualateLottoCount(moneyAmount) {
    const count = moneyAmount / this.LOTTO_PRICE;
    if (!REGEX.onlyInt.test(count)) {
      throw new Error(ERROR_MESSAGE.undividableByThousand);
    }
    return count;
  },

  validateUnderLottoStock(count) {
    if (count > this.LOTTO_STOCK) {
      throw new Error(ERROR_MESSAGE.overLottoStock);
    }
  },

  pickLottos(count) {
    return new Array(count)
      .fill()
      .map((_) => this.pickLottoNumbers())
      .map((lottoNumbers) => new Lotto(lottoNumbers));
  },

  pickLottoNumbers() {
    const LOTTO_MIN_NUMBER = 1;
    const LOTTO_MAX_NUMBER = 45;
    const LOTTO_LENGTH = 6;

    return Random.pickUniqueNumbersInRange(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_LENGTH);
  },
};

export default LottoSeller;
