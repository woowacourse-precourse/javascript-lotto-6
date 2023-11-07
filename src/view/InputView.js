import { Console } from "@woowacourse/mission-utils";

class InputView {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    return purchaseAmount;
  }
}

export default InputView;
