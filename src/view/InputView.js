import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/gameMessge.js";
import { ERROR } from "../constant/gameMessge.js";

const InputView = {
  async getUserPurchaseAmout() {
    try {
      const userPurchaseAmout = await MissionUtils.Console.readLineAsync(
        `${MESSAGE.purchase.amount}`,
      );
      const purchaseAmount = this.validatePurchaseAmount(userPurchaseAmout);
      return purchaseAmount;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  },

  validatePurchaseAmount(amount) {
    this.validatePurchaseAmountMinimun(amount);
    this.validatePurchaseAmountMinimun(amount);
    this.validateAmountUnit(amount);

    return amount;
  },

  validatePurchaseAmountMinimun(amount) {
    if (amount < 1000) {
      throw new Error(ERROR.purchase.minimunAmount);
    }
  },

  validatePurchaseAmountMinimun(amount) {
    if (isNaN(amount)) {
      throw new Error(ERROR.purchase.numeric);
    }
  },

  validateAmountUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR.purchase.amountUnit);
    }
  },

  async getWinningNumbers() {
    try {
      const userInputWinningNumbers = await MissionUtils.Console.readLineAsync(
        `${MESSAGE.purchase.winningNumber}`,
      );

      return userInputWinningNumbers;
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
