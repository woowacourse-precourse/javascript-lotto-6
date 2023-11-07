// domain
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
      const response = await InputView.lottoMoney();
      const lottoBundle = new LottoBundle(response);
      return lottoBundle;
    } catch (err) {
      return Handler.#handleError(err, () => Handler.lottoBundle());
    }
  }

  static async referenceLotto() {
    try {
      const response = await InputView.winNumbers();
      const referenceLotto = new ReferenceLotto(response);
      return referenceLotto;
    } catch (err) {
      return Handler.#handleError(err, () => Handler.referenceLotto());
    }
  }

  static async bonusNumber(referenceLotto) {
    try {
      if (!referenceLotto) throw new Error(ERROR_MESSAGE.LOTTO_NOT_EXIST);
      const response = await InputView.bonusNumber();
      referenceLotto.bonus = response;
    } catch (err) {
      const retryFunction = () => Handler.bonusNumber(referenceLotto);
      return Handler.#handleError(err, retryFunction);
    }
  }

  static async #handleError(err, retryFunction) {
    OutputView.err({ message: err.message });
    if (err instanceof ValidationError) return await retryFunction();
    throw err;
  }
}

export default Handler;
