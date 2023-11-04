import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";

export class InputGetter {
  async inputMoney() {
    const money = await Console.readLineAsync(MESSAGES.HOW_MUCH + "\n");

    return money;
  }

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_NUMBERS + "\n"
    );

    return winningNumbers;
  }
}

const inputGetter = new InputGetter();
inputGetter.inputWinningNumbers();
