import { Console } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "../constants/input.js";
import LottoGameError from "../Error.js";
import { LOTTO_ERROR_MSG } from "../constants/error.js";
import Output from "./Output.js";

class Input {
  static async getMoney() {
    let money = await Console.readLineAsync(INPUT_MSG.LOTTO_PRICE);

    this.#validateInput(money);

    return parseInt(money);
  }

  static async getWinningNumber() {
    const inputString = await Console.readLineAsync(
      INPUT_MSG.WINNING_LOTTO_NUMBER
    );
    const lottoNumbers = inputString
      .split(",")
      .map((number) => number.trim().replaceAll(" ", ""));

    lottoNumbers.forEach((number) => {
      this.#validateInput(number);
    });

    return lottoNumbers.map((number) => parseInt(number));
  }

  static async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MSG.BONUS_NUMBER);

    this.#validateInput(bonusNumber);

    return parseInt(bonusNumber);
  }

  static #validateInput(inputString) {
    const DIGIT_CHECK = /^[0-9]+$/;
    if (!DIGIT_CHECK.test(inputString)) {
      throw new LottoGameError(LOTTO_ERROR_MSG.NOT_DIGIT_ERR);
    }
  }
}

export default Input;
