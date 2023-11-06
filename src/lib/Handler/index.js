// domain
import Lotto from "../../Lotto.js";
import Tickets from "../Domain/Tickets.js";
// view
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
// constants
import { ERROR_MESSAGE } from "../Constants.js";
// type
import { ValidationError } from "../Error/ValidationError.js";

export class Handler {
  static async tickets() {
    try {
      const response = await InputView.ticketMoney();
      const tickets = new Tickets(response);
      return tickets;
    } catch (err) {
      return Handler.#handleError(err, () => Handler.tickets());
    }
  }

  static async lotto() {
    try {
      const response = await InputView.winNumbers();
      const lotto = new Lotto(response);
      return lotto;
    } catch (err) {
      return Handler.#handleError(err, () => Handler.lotto());
    }
  }

  static async bonusNumber(lotto) {
    try {
      const response = await InputView.bonusNumber();
      if (!lotto) throw new Error(ERROR_MESSAGE.LOTTO_NOT_EXIST);
      lotto.validateBonusNumber(response);
      return response;
    } catch (err) {
      return Handler.#handleError(err, () => Handler.bonusNumber(lotto));
    }
  }

  static async #handleError(err, retryFunction) {
    OutputView.err({ message: err.message });
    if (err instanceof ValidationError) return await retryFunction();
    throw err;
  }
}

export default Handler;
