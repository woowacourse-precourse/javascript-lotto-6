import Validator from "./Validator.js";
import PRICE from "./constant/PRICE.js";
import { Random } from "@woowacourse/mission-utils";

class LottoController {
  #ticketAmount;

  constructor(totalPrice) {
    this.#validateTotalPrice(totalPrice);
    this.#ticketAmount = this.#calculateTicketAmount(totalPrice);
  }

  #validateTotalPrice(string) {
    if (!Validator.isStringOnlyDigits(string)) {
      throw new Error(PRICE.ERROR.NOT_NUMBER);
    }

    if (!Validator.isDivisible(+string, PRICE.TICKET)) {
      throw new Error(PRICE.ERROR.NOT_DIVISIBLE_BY_TICKET);
    }
  }

  #calculateTicketAmount(string) {
    return +string / PRICE.TICKET;
  }
}

export default LottoController;
