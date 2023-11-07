import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/gameMessge.js";
import { validatePurchaseAmount } from "../utils/validate.js";

const InputView = {
  async getUserPurchaseAmout() {
    try {
      const userPurchaseAmout = await MissionUtils.Console.readLineAsync(
        `${MESSAGE.purchase.amount}`,
      );
      validatePurchaseAmount(userPurchaseAmout);

      return userPurchaseAmout;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.getUserPurchaseAmout();
    }
  },

  async getWinningNumbers() {
    try {
      const userInputWinningNumbers = await MissionUtils.Console.readLineAsync(
        `${MESSAGE.purchase.winningNumber}`,
      );

      return userInputWinningNumbers.split(",").map((number) => Number(number.trim()));
    } catch (e) {
      throw new Error("[ERROR]");
    }
  },

  async getBonusNumbers() {
    try {
      const userInputBonumsNumbers = await MissionUtils.Console.readLineAsync(
        `\n${MESSAGE.purchase.bonusNumber}\n`,
      );
      const bonusNumber = parseInt(userInputBonumsNumbers, 10);

      return bonusNumber;
    } catch (e) {
      throw new Error("[ERROR]");
    }
  },
};

export default InputView;
