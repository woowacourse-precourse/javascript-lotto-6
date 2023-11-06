import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_INPUT_MESSAGE, ERROR_MESSAGE } from "../constants.js";

class InputView {
  async getCostUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync(LOTTO_INPUT_MESSAGE.inputCost);
    this.validateIsInvaildUnit(userInput);
    return userInput;
  }

  async getWinningNumUserInput() {
    const userInputWinningNum = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputWinnigNum
    );

    return userInputWinningNum;
  }

  async getBonusNumUserInput() {
    const userInputBonusNum = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.inputBonusNum
    );
    return userInputBonusNum;
  }

  validateIsInvaildUnit(userInput) {
    if (userInput % 1000 !== 0 || userInput < 1000) {
      throw new Error(ERROR_MESSAGE.isInvaildUnit);
    }
  }
}

export default InputView;
