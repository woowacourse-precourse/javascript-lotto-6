// domain
import LottoBundle from "../Domain/LottoBundle.js";
import ReferenceLotto from "../Domain/ReferenceLotto.js";
// handler
import OutputHandler from "./OutputHandler.js";
// view
import InputView from "../View/InputView.js";
// constants
import { ERROR_MESSAGE } from "../Constants.js";
import { ValidationError } from "../Error/ValidationError.js";

export class InputHandler {
  static async lottoBundle() {
    try {
      const response = await InputView.lottoMoney();
      const lottoBundle = new LottoBundle(response);
      return lottoBundle;
    } catch (err) {
      const retryFunction = () => InputHandler.lottoBundle();
      return InputHandler.#handleError(err, retryFunction);
    }
  }

  static async referenceLotto() {
    try {
      const response = await InputView.winNumbers();
      const referenceLotto = new ReferenceLotto(response);
      return referenceLotto;
    } catch (err) {
      const retryFunction = () => InputHandler.referenceLotto();
      return InputHandler.#handleError(err, retryFunction);
    }
  }

  static async injectBonus(referenceLotto) {
    try {
      if (!referenceLotto) throw new Error(ERROR_MESSAGE.LOTTO_NOT_EXIST);
      const response = await InputView.bonusNumber();
      referenceLotto.bonus = response;
    } catch (err) {
      const retryFunction = () => InputHandler.injectBonus(referenceLotto);
      return InputHandler.#handleError(err, retryFunction);
    }
  }

  static async #handleError(err, retryFunction) {
    if (!(err instanceof ValidationError)) throw err;
    OutputHandler.error(err);
    return await retryFunction();
  }
}

export default InputHandler;
