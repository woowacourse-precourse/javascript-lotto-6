import Validator from "./Validator.js";
import LOTTO_CONTROLLER from "./constant/LOTTO_CONTROLLER.js";

class LottoController {
  #ticketAmount;

  constructor(totalPrice) {
    this.#validateTotalPrice(totalPrice);
    this.#ticketAmount = this.#calculateTicketAmount(totalPrice);
  }

  #validateTotalPrice(string) {
    if (!Validator.isStringOnlyDigits(string)) {
      throw new Error(LOTTO_CONTROLLER.ERROR.PRICE_NOT_NUMBER);
    }

    if (!Validator.isDivisible(+string, LOTTO_CONTROLLER.TICKET_PRICE)) {
      throw new Error(LOTTO_CONTROLLER.ERROR.PRICE_NOT_DIVISIBLE);
    }
  }

  #calculateTicketAmount(string) {
    return +string / LOTTO_CONTROLLER.TICKET_PRICE;
  }
}

export default LottoController;
