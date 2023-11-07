import Lotto from "../Lotto.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import REGEX from "../constants/Regex.js";
import { pickLottoNumbers } from "../utils/lottoNumberPicker.js";

const LottoSeller = {
  LOTTO_PRICE: 1000,
  LOTTO_STOCK: 1000,
  LOTTO_LENGTH: 6,

  getLottos(amount) {
    this.validatePositiveInt(amount);
    const count = this.calcualateLottoCount(amount);
    this.checkLottoStockIsEnough(count);
    const lottos = this.pickLottos(count);
    return lottos;
  },

  validatePositiveInt(value) {
    if (!(REGEX.onlyPositiveInt.test(value) && value > 0)) {
      throw new Error(ERROR_MESSAGE.notPostiveInt);
    }
  },

  calcualateLottoCount(amount) {
    const count = amount / this.LOTTO_PRICE;
    if (!REGEX.onlyPositiveInt.test(count)) {
      throw new Error(ERROR_MESSAGE.undividableByThousand);
    }
    return count;
  },

  checkLottoStockIsEnough(count) {
    if (count > this.LOTTO_STOCK) {
      throw new Error(ERROR_MESSAGE.overLottoStock);
    }
  },

  pickLottos(count) {
    return new Array(count)
      .fill()
      .map((_) => this.pickLotto())
      .map((lottoNumbers) => new Lotto(lottoNumbers));
  },

  pickLotto() {
    return pickLottoNumbers(this.LOTTO_LENGTH);
  },
};

export default LottoSeller;
