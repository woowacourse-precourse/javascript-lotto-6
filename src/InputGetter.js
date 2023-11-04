import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";

export class InputGetter {
  async inputMoney() {
    const money = await Console.readLineAsync(MESSAGES.HOW_MUCH + "\n");

    return money;
  }
}

const inputGetter = new InputGetter();
inputGetter.inputMoney();
