import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
  async getUserPurchaseAmout() {
    try {
      const userPurchaseAmout = await MissionUtils.Console.readLineAsync(
        "구입 금액을 입력해주세요.\n",
      );

      return userPurchaseAmout;
    } catch (e) {
      throw new Error("[ERROR]");
    }
  },

  async getWinningNumbers() {
    try {
      const userInputWinningNumbers = await MissionUtils.Console.readLineAsync(
        "\n당첨 번호를 입력해주세요.\n",
      );

      return userInputWinningNumbers;
    } catch (e) {
      throw new Error("[ERROR]");
    }
  },

  async getBonusNumbers() {
    try {
      const userInputBonumsNumbers = await MissionUtils.Console.readLineAsync(
        "\n보너스 번호를 입력해주세요.\n",
      );
      const bonusNumber = parseInt(userInputBonumsNumbers, 10);

      return bonusNumber;
    } catch (e) {
      throw new Error("[ERROR]");
    }
  },
};

export default InputView;
