import { MissionUtils } from "@woowacourse/mission-utils";

export function printEachPrize(OUTPUT_MESSAGE, NUMBER_OF_WINS) {
  MissionUtils.Console.print(OUTPUT_MESSAGE + NUMBER_OF_WINS + "개");
}
