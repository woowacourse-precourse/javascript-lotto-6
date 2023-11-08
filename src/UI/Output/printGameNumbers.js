import { OUTPUT_MESSAGES } from "../../constants/Messages";
import { MissionUtils } from "@woowacourse/mission-utils";

export function printGameNumbers(NUMBER_OF_GAMES) {
  MissionUtils.Console.print(
    NUMBER_OF_GAMES + OUTPUT_MESSAGES.PURCHASE_QUANTITY
  );
}
