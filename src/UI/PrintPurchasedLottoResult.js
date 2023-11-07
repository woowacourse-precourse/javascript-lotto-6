import { MissionUtils } from "@woowacourse/mission-utils";

class PrintPurchasedLottoResult {
  result() {
    const NUMBER_ARRAY = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    NUMBER_ARRAY.sort(function (a, b) {
      return a - b;
    });
    MissionUtils.Console.print(`[${NUMBER_ARRAY.join(", ")}]`);
    return NUMBER_ARRAY;
  }
}
export default PrintPurchasedLottoResult;
