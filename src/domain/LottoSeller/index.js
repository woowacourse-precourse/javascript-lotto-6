import { MESSAGES } from "../../constants";
import { CustomError } from "../../exception";
import { Validation } from "../../utils";
import { InputView } from "../../view";

export class LottoSeller {
  #lottoPrice;

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = lottoPrice;
  }

  async sellLotto() {
    const paidAmount = await InputView.readLine(MESSAGES.BUY);
    this.#validatePaidAmount(paidAmount);
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
}
