import Validator from "./Validator.js";
import LOTTO_CONTROLLER from "./constant/LOTTO_CONTROLLER.js";

class LottoController {
  #ticketAmount;

  constructor(totalPrice) {
    this.#validateTotalPrice(totalPrice);
  }

  #validateTotalPrice(string) {
    if (!Validator.isStringOnlyDigits(string)) {
      throw new Error(LOTTO_CONTROLLER.ERROR.PRICE_NOT_NUMBER);
    }

    if (!Validator.isDivisibleBy1000(+string)) {
      throw new Error(LOTTO_CONTROLLER.ERROR.PRICE_NOT_DIVISIBLE);
    }
  }
}

export default LottoController;
