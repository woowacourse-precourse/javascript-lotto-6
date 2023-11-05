import { Random } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import Lotto from "./Lotto.js";
import PRICE from "./constant/PRICE.js";
import LOTTO from "./constant/LOTTO.js";

class LottoController {
  #lottoArray;

  constructor(totalPriceStr) {
    this.#validateTotalPrice(totalPriceStr);
    this.#lottoArray = this.#createLottoAsTicketAmount(+totalPriceStr);
  }

  #validateTotalPrice(string) {
    if (!Validator.isStringOnlyDigits(string)) {
      throw new Error(PRICE.ERROR.NOT_NUMBER);
    }

    if (!Validator.isDivisible(+string, PRICE.TICKET)) {
      throw new Error(PRICE.ERROR.NOT_DIVISIBLE_BY_TICKET);
    }
  }

  #createLottoAsTicketAmount(totalPrice) {
    const ticketAmount = this.#calculateTicketAmount(totalPrice);

    return Array.from(
      { length: ticketAmount },
      () => new Lotto(this.#createRandomLottoNumber())
    );
  }

  #calculateTicketAmount(number) {
    return number / PRICE.TICKET;
  }

  #createRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.START_NUMBER,
      LOTTO.END_NUMBER,
      LOTTO.NUMBER_COUNT
    );
  }
}

export default LottoController;
