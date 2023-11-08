import { ERROR_MESSAGES } from "../utils/message";
import LOTTO_CONSTANT from "../utils/constant";

class Purchase {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    if (Number.isNaN(amount) || typeof amount !== "number") {
      throw new Error(ERROR_MESSAGES.purchaseAmountNotNumber);
    }
    if (amount % LOTTO_CONSTANT.lottoPrice !== 0) {
      throw new Error(ERROR_MESSAGES.purchaseAmountNotDivisible);
    }
  }

  getAmount() {
    return this.#amount;
  }

  getLottoTicketCount() {
    return this.#amount / LOTTO_CONSTANT.lottoPrice;
  }
}

export default Purchase;
