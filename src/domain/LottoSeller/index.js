import { LOTTO_RULE, MESSAGES } from "../../constants";
import { CustomError } from "../../exception";
import { Validation, pickUniqueNumbersInRange } from "../../utils";
import { InputView, OutputView } from "../../view";
import { Lotto } from "../Lotto";

const { MIN, MAX } = LOTTO_RULE.RANGE;
const { LENGTH } = LOTTO_RULE;

export class LottoSeller {
  #lottoPrice;

  constructor(lottoPrice) {
    this.#validateLottoPrice(lottoPrice);
    this.#lottoPrice = lottoPrice;
  }

  async sellLotto() {
    try {
      const paidAmount = Number(await InputView.readLine(MESSAGES.BUY));
      this.#validatePaidAmount(paidAmount);
      const amount = this.#calculateLottoAmount(paidAmount);
      OutputView.print(MESSAGES.BUY.RESULT(amount));
      return this.#issueLottos(amount);
    } catch (error) {
      OutputView.print(error.message);
      await this.sellLotto();
    }
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

  #issueLottos(amount) {
    const lottos = [];
    for (let i = 0; i < amount; i++) {
      const lottoNumber = this.#generateLottoNumber();
      const lotto = new Lotto(lottoNumber);
      lotto.printNumbers();
      lottos.push(lotto.getNumbers());
    }
    return lottos;
  }
}
