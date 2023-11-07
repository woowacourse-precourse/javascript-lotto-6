import { INPUT, ERROR } from "./Constants/Constants.js";
import { Console } from "@woowacourse/mission-utils";
import Validation from "./Validation/Validation.js";

class WinNumber {
  #winNumber;
  #bonusNumber;

  constructor() {
    this.#winNumber = [];
    this.#bonusNumber = 0;
  }

  async inputWinNumber() {
    const input = await Console.readLineAsync(INPUT.win_numbers);
    const winNumber = input.split(",").map((number) => Number(number));
    try {
      Validation.isValidLottoNumber(winNumber);
      this.#winNumber = winNumber.sort((a, b) => a - b);
    } catch {
      Console.print(ERROR.lotto_num_error);
      await this.inputWinNumber();
    }
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT.bonus_numbers);
    const bonusNumber = Number(input);
    try {
      Validation.isValidBonusNumber(this.#winNumber, bonusNumber);
      this.#bonusNumber = bonusNumber;
    } catch {
      Console.print(ERROR.bonus_num_error);
      await this.inputBonusNumber();
    }
  }

  getWinNumber() {
    return this.#winNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}
export default WinNumber;
