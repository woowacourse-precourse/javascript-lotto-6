import InputPrompter from "./InputPrompter.js";
import LottoPurchase from "./LottoPurchase.js";

export default class LottoPurchaseInput {
  static async collectMoney() {
    const inputPrompter = LottoPurchaseInput.createInputPrompter();
    return new LottoPurchase(await inputPrompter.collect());
  }

  static createInputPrompter() {
    return new InputPrompter("---\n구입금액을 입력해 주세요.\n", (money) => {
      LottoPurchase.validate(money);
    });
  }
}
