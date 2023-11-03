import { MESSAGES } from "./constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class DrawView {
  static printWinningNumbersQuestion() {
    MissionUtils.Console.print(MESSAGES.winningNumbersQuestion);
  }

  static printBonusNumberQuestion() {
    MissionUtils.Console.print(MESSAGES.bonusNumberQuestion);
  }
}

export default DrawView;
