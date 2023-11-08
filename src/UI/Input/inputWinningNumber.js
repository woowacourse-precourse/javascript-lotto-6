import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../../constants/Messages";

export function inputWinningNumber() {
  return MissionUtils.Console.readLineAsync(
    INPUT_MESSAGES.INPUT_WINNING_NUMBER
  );
}
