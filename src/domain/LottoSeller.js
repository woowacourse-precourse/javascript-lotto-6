import Lotto from "../Lotto.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import REGEX from "../constants/Regex.js";
import { Random } from "@woowacourse/mission-utils";
import { LOTTO_BUSINESS_RULES, LOTTO_PRICE } from "../constants/lotto.js";

const LottoSeller = {
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
    const count = moneyAmount / LOTTO_PRICE;
    if (!REGEX.onlyInt.test(count)) {
      throw new Error(ERROR_MESSAGE.undividableByThousand);
    }

    return count;
  },

  validateUnderLottoStock(count) {
    if (count > LOTTO_BUSINESS_RULES.stock) {
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
    const { minNumber, maxNumber, length } = LOTTO_BUSINESS_RULES;

    return Random.pickUniqueNumbersInRange(minNumber, maxNumber, length);
  },
};

export default LottoSeller;
