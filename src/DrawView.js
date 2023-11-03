import { MESSAGES } from "./constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class DrawView {
  static printWinningNumbersQuestion() {
    MissionUtils.Console.print(MESSAGES.winningNumbersQuestion);
  }
}

export default DrawView;
