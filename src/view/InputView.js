import { MissionUtils } from "@woowacourse/mission-utils";
import { validatePurchaseAmount } from "../utils/Validate.js";
import { MESSAGE } from "../constant/GameConfig.js";

class InputView {
  async getPurchaseAmout() {
    try {
      const purchaseAmout = await MissionUtils.Console.readLineAsync(`${MESSAGE.input.purchase}`);
      validatePurchaseAmount(purchaseAmout);

      return purchaseAmout;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.getPurchaseAmout();
    }
  }

  async getWinningNumbers() {
    try {
      const userInputWinningNumbers = await MissionUtils.Console.readLineAsync(
        `${MESSAGE.input.winningNumbers}`,
      );

      return userInputWinningNumbers.split(",").map((number) => Number(number.trim()));
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getBonusNumber() {
    try {
      const userInputBonusNumber = await MissionUtils.Console.readLineAsync(
        `\n${MESSAGE.input.bonusNumber}\n`,
      );

      return Number(userInputBonusNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default InputView;
