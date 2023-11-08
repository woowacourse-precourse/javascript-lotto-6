import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../../constants/Messages.js";

export function inputBonusNumber() {
  return MissionUtils.Console.readLineAsync(INPUT_MESSAGES.INPUT_BOUNUS_NUMBER);
}
