import { MissionUtils } from "@woowacourse/mission-utils";
import Purchase from "../Purchase.js";
async function purchaseAmountSave() {
  try {
    const AMOUNT = await MissionUtils.Console.readLineAsync("");
    const PURCHASE_AMOUNT = Math.floor(AMOUNT);
    new Purchase(PURCHASE_AMOUNT);
    return PURCHASE_AMOUNT;
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

export default purchaseAmountSave;
