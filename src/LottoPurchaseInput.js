import InputPrompter from "./InputPrompter.js";
import LottoPurchase from "./LottoPurchase.js";

export default class LottoPurchaseInput {
  static async collectMoney() {
    const inputPrompter = LottoPurchaseInput.createInputPrompter();
    return await inputPrompter.collect();
  }

  static createInputPrompter() {
    return new InputPrompter(
      "---\n구입금액을 입력해 주세요.\n",
      (money) => money % LottoPurchase.UNIT_MONEY === 0,
      `[ERROR] 구매금액은 ${LottoPurchase.UNIT_MONEY}원 단위로만 입력 가능합니다.`
    );
  }
}
