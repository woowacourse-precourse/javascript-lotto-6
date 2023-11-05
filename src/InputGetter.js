import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/messages.js";

export class InputGetter {
  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_NUMBER + "\n"
    );

    return bonusNumber;
  }
}

const inputGetter = new InputGetter();
inputGetter.inputBonusNumber();
