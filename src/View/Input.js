import { Console } from "@woowacourse/mission-utils";

export default class Input {
  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      "구매금액을 입력해 주세요."
    );
    return purchaseAmount;
  }
}
