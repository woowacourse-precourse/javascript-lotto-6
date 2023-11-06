// domain
import Lotto from "../../Lotto.js";
import LottoBundle from "../Domain/LottoBundle.js";
import ReferenceLotto from "../Domain/ReferenceLotto.js";
// view
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
// constants
import { ERROR_MESSAGE } from "../Constants.js";
// type
import { ValidationError } from "../Error/ValidationError.js";

export class Handler {
  static async lottoBundle() {
    try {
      const response = await InputView.ticketMoney();
      const lottoBundle = new LottoBundle(response);
      return lottoBundle;
    } catch (err) {
      return Handler.#handleError(err, () => Handler.lottoBundle());
    }
  }

  static async winningLotto() {
    try {
      const response = await InputView.winNumbers();
      const lotto = new Lotto(response);
      return lotto;
    } catch (err) {
      return Handler.#handleError(err, () => Handler.winningLotto());
    }
  }

  static async referenceLotto(lotto) {
    try {
      if (!lotto) throw new Error(ERROR_MESSAGE.LOTTO_NOT_EXIST);
      const response = await InputView.bonusNumber();
      const referenceLotto = new ReferenceLotto(lotto, response);
      return referenceLotto;
    } catch (err) {
      return Handler.#handleError(err, () => Handler.referenceLotto(lotto));
    }
  }

  static async #handleError(err, retryFunction) {
    OutputView.err({ message: err.message });
    if (err instanceof ValidationError) return await retryFunction();
    throw err;
  }
}

export default Handler;
