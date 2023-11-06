import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/MESSAGE";

const Input = {
  async purchase() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.PURCHASE_AMOUNT);
    return input;
  },

  async winningNumber() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.WINNING_NUMBER);
    return input.split(MESSAGE.SIGNAL.SEPERATOR);
  },

  async bonusNumber() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.BONUS_NUMBER);
    return input;
  },
};

export default Input;
