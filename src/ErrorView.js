import { MissionUtils } from "@woowacourse/mission-utils"

class ErrorView {
  static printErrorMessage(errorMessage) {
    MissionUtils.Console.print(errorMessage);
  }
}

export default ErrorView;
