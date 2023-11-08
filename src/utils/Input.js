import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/MESSAGE.js";

const Input = {
  async purchase() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.PURCHASE_AMOUNT);
    return input.trim();
  },

  async winningNumber() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.WINNING_NUMBER);
    return input
      .trim()
      .split(MESSAGE.SIGNAL.SEPERATOR)
      .map((input) => input.trim());
  },

  async bonusNumber() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.BONUS_NUMBER);
    return input.trim();
  },
};

export default Input;
