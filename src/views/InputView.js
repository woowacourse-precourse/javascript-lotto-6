import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_INPUT_MESSAGE, ERROR_MESSAGE } from "../constants.js";
import Lotto from "../Lotto.js";
const { Console } = MissionUtils;

class InputView {
  lotto;

  async getCostUserInput() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(LOTTO_INPUT_MESSAGE.inputCost);

      if (userInput % 1000 !== 0) {
        throw new Error(ERROR_MESSAGE.isInvaildUnit);
      }

      if (userInput < 1000) {
        throw new Error(ERROR_MESSAGE.isSmallCost);
      }

      return userInput;
    } catch (e) {
      Console.print(e.message);
      return this.getCostUserInput();
    }
  }

  async getWinningNumUserInput() {
    try {
      const winningNums = await MissionUtils.Console.readLineAsync(
        LOTTO_INPUT_MESSAGE.inputWinnigNum
      ).then((res) => res.split(",").map(Number));
      this.lotto = new Lotto(winningNums);
      return winningNums;
    } catch (e) {
      Console.print(e.message);
      return this.getWinningNumUserInput();
    }
  }

  async getBonusNumUserInput() {
    try {
      const bonusNum = await MissionUtils.Console.readLineAsync(
        LOTTO_INPUT_MESSAGE.inputBonusNum
      ).then((res) => res.split(",").map(Number));
      this.lotto.validateIsNotNumber(bonusNum);
      this.lotto.validateIsIncorrecRage(bonusNum);

      return bonusNum;
    } catch (e) {
      Console.print(e.message);
      return this.getBonusNumUserInput();
    }
  }
}

export default InputView;
