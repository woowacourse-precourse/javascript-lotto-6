import { MissionUtils } from "@woowacourse/mission-utils";

class DrawController {
  static async getWinningNumbers() {
    const winningNumbersText = await MissionUtils.Console.readLineAsync("");

    return winningNumbersText;
  }
}

export default DrawController;
