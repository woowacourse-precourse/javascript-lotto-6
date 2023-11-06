import { print } from "../utils/print.js";
import { Console } from "@woowacourse/mission-utils";
import { WINNING_NUMBERS_INPUT_REQUEST } from "../utils/message.js";
import Lotto from "../Lotto.js";

class WinningNumber {
  printMessage() {
    print(`\n${WINNING_NUMBERS_INPUT_REQUEST}`);
  }

  async returnWinningNumber() {
    const input = await Console.readLineAsync("");
    const numbers = input.split(",");

    const lotto = new Lotto(numbers);
    const number_list = lotto.returnNumbers(numbers);

    return number_list.map(Number);
  }

  async getWinningNumber() {
    this.printMessage();
    const winning_number = await this.returnWinningNumber();
    return winning_number;
  }
}

export default WinningNumber;
