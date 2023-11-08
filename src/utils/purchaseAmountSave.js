import { MissionUtils } from "@woowacourse/mission-utils";
import Purchase from "../Purchase.js";
import purchaseAmountSentence from "./purchaseAmountSentence.js";

async function purchaseAmountSave() {
  let isValidAmount = false;
  while (!isValidAmount) {
    try {
      purchaseAmountSentence();
      const AMOUNT = await MissionUtils.Console.readLineAsync("");
      const PURCHASE_AMOUNT = Math.floor(AMOUNT);
      new Purchase(PURCHASE_AMOUNT);
      isValidAmount = true;
      return PURCHASE_AMOUNT;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}
export default purchaseAmountSave;
