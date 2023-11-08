import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../../constants/Messages";

export async function inputCash() {
  return await MissionUtils.Console.readLineAsync(
    INPUT_MESSAGES.INPUT_CASH_MESSAGE
  );
}
