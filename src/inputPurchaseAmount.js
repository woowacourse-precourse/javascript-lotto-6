import { MissionUtils } from "@woowacourse/mission-utils";
import validatePurchaseAmount from "./validatePurchaseAmount.js";

async function inputPurchaseAmount() {
    try {
        let purchaseAmount = Number(await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n"));
        purchaseAmount = validatePurchaseAmount(purchaseAmount);
        MissionUtils.Console.print("");
        return purchaseAmount;
    } catch(err) {
        MissionUtils.Console.print(err.message);
        return inputPurchaseAmount();
    }
}

export default inputPurchaseAmount;
