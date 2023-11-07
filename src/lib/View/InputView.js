import InputValidator from "../Validator/InputValidator.js";
import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../Constants.js";

class InputView {
  static async lottoMoney() {
    return InputView.#handleInput(
      async () => await Console.readLineAsync(INPUT_MESSAGE.LOTTO_MONEY),
      InputValidator.lottoMoney,
      Number,
    );
  }

  static async winNumbers() {
    return InputView.#handleInput(
      async () => await Console.readLineAsync(INPUT_MESSAGE.WIN_NUMBERS),
      InputValidator.winNumbers,
      (s) => s.split(",").map((a) => Number(a)),
    );
  }

  static async bonusNumber() {
    return InputView.#handleInput(
      async () => await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER),
      InputValidator.bonusNumber,
      Number,
    );
  }

  static async #handleInput(read, validate, parse = (e) => e) {
    const response = await read();
    validate(response);
    return parse(response);
  }
}

export default InputView;
