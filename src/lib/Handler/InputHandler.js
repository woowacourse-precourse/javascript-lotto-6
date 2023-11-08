// domain
import LottoBundle from "../Domain/LottoBundle.js";
import ReferenceLotto from "../Domain/ReferenceLotto.js";
// non-domain
import OutputHandler from "./OutputHandler.js";
import InputView from "../View/InputView.js";
import InputValidator from "../Validator/InputValidator.js";
// constants
import { ERROR_MESSAGE } from "../Constants.js";
import { ValidationError } from "../Error/ValidationError.js";

export class InputHandler {
  static async lottoBundle() {
    try {
      const response = await InputView.lottoMoney();
      InputValidator.lottoMoney(response);
      const money = Number(response);
      const lottoBundle = new LottoBundle(money);
      return lottoBundle;
    } catch (err) {
      const retryFunction = () => InputHandler.lottoBundle();
      return InputHandler.#handleError(err, retryFunction);
    }
  }

  static async referenceLotto() {
    try {
      const response = await InputView.winNumbers();
      InputValidator.winNumbers(response);
      const numbers = response.split(",").map((e) => Number(e));
      const referenceLotto = new ReferenceLotto(numbers);
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
      InputValidator.bonusNumber(response);
      const bonusNumber = Number(response);
      referenceLotto.bonus = bonusNumber;
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
