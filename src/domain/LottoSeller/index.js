import { LOTTO_RULE, MESSAGES } from "../../constants";
import { CustomError } from "../../exception";
import { Validation, pickUniqueNumbersInRange } from "../../utils";
import { InputView } from "../../view";

const { MIN, MAX } = LOTTO_RULE.RANGE;
const { LENGTH } = LOTTO_RULE;

export class LottoSeller {
  #lottoPrice;

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = lottoPrice;
  }

  async sellLotto() {
    const paidAmount = await InputView.readLine(MESSAGES.BUY);
    this.#validatePaidAmount(paidAmount);
    const amount = this.#calculateLottoAmount(paidAmount);
    this.#publishLottos(amount);
  }

  #validateLottoPrice(lottoPrice) {
    if (!Validation.isNumber(lottoPrice)) {
      throw new CustomError(MESSAGES.ERROR.COMMON.NOT_NUMBER);
    }

    if (!Validation.isPositive(lottoPrice)) {
      throw new CustomError(MESSAGES.ERROR.COMMON.NOT_POSITIVE);
    }

    if (!Validation.isInteger(lottoPrice)) {
      throw new CustomError(MESSAGES.ERROR.COMMON.NOT_INTEGER);
    }
  }

  #validatePaidAmount(paidAmount) {
    if (!Validation.isNumber(paidAmount)) {
      throw new CustomError(MESSAGES.ERROR.BUY.NOT_NUMBER);
    }

    if (!Validation.isPositive(paidAmount)) {
      throw new CustomError(MESSAGES.ERROR.BUY.NOT_POSITIVE);
    }

    if (!Validation.isMultipleOf(paidAmount, this.#lottoPrice)) {
      throw new CustomError(
        MESSAGES.ERROR.BUY.NOT_MULTIPLE_OF(this.#lottoPrice)
      );
    }
  }

  #calculateLottoAmount(paidAmount) {
    return paidAmount / this.#lottoPrice;
  }

  #generateLottoNumber() {
    return pickUniqueNumbersInRange(MIN, MAX, LENGTH);
  }
}
