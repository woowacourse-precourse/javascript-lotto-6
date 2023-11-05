import { Random } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import PRICE from "./constant/PRICE.js";
import LOTTO from "./constant/LOTTO.js";

class LottoController {
  #lottoArray;

  constructor(totalPriceStr, createLottoFunc) {
    this.#validateTotalPrice(totalPriceStr);
    this.#lottoArray = this.#createLottoAsTicketAmount(
      +totalPriceStr,
      createLottoFunc
    );
  }

  #validateTotalPrice(string) {
    if (!Validator.isStringOnlyDigits(string)) {
      throw new Error(PRICE.ERROR.NOT_NUMBER);
    }

    if (Validator.startWithZero(string)) {
      throw new Error(PRICE.ERROR.START_WITH_ZERO);
    }

    if (!Validator.isDivisible(+string, PRICE.TICKET)) {
      throw new Error(PRICE.ERROR.NOT_DIVISIBLE_BY_TICKET);
    }
  }

  #createLottoAsTicketAmount(totalPrice, createLottoFunc) {
    const ticketAmount = this.#calculateTicketAmount(totalPrice);

    return Array.from({ length: ticketAmount }, () => {
      return createLottoFunc(this.#createRandomLottoNumber());
    });
  }

  #calculateTicketAmount(number) {
    return number / PRICE.TICKET;
  }

  #createRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.START_NUMBER,
      LOTTO.END_NUMBER,
      LOTTO.SIZE
    );
  }

  get lottoArray() {
    return this.#lottoArray;
  }
}

export default LottoController;
