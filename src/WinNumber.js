import { INPUT, ERROR } from "./Constants.js";
import { Console } from "@woowacourse/mission-utils";

class WinNumber {
  #winNumber;
  #bonusNumber;

  constructor() {
    this.#winNumber = [];
    this.#bonusNumber = 0;
  }

  #winNumberValidate(winNumber) {
    if (winNumber.length !== 6) {
      throw new Error(ERROR.lotto_count_error);
    }
    if (!winNumber.every((number) => number >= 1 && number <= 45)) {
      throw new Error(ERROR.lotto_num_error);
    }
  }

  #bonusNumberValidate(bonusNumber) {
    if (typeof bonusNumber !== "number" || bonusNumber <= 0) {
      throw new Error(ERROR.lotto_num_error);
    }
  }

  async inputWinNumber() {
    const input = await Console.readLineAsync(INPUT.win_numbers);
    const winNumber = input.split(",").map((number) => parseInt(number, 10));
    this.#winNumberValidate(winNumber);
    this.#winNumber = winNumber;
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT.bonus_numbers);
    const bonusNumber = parseInt(input);
    this.#bonusNumberValidate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getWinNumber() {
    return this.#winNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}
export default WinNumber;
