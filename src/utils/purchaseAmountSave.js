import { MissionUtils } from "@woowacourse/mission-utils";
import Purchase from "../Purchase.js";
import purchaseAmountSentence from "./purchaseAmountSentence.js";
async function purchaseAmountSave() {
  try {
    purchaseAmountSentence();
    const AMOUNT = await MissionUtils.Console.readLineAsync("");
    const PURCHASE_AMOUNT = Math.floor(AMOUNT);
    new Purchase(PURCHASE_AMOUNT);
    return PURCHASE_AMOUNT;
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

export default purchaseAmountSave;
