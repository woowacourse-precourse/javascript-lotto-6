import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  purchaseAmount = 0;

  async inputPurchaseAmount() {
    const inputPurchaseAmount = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    const purchaseAmount = Number(inputPurchaseAmount);
    App.validatePurchaseAmount(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  static validatePurchaseAmount(purchaseAmount) {
    if (Number.isNaN(purchaseAmount))
      throw new Error("[ERROR] 구매 금액은 숫자여야 합니다.");
    if (purchaseAmount % 1000)
      throw new Error("[ERROR] 구매 금액은 1,000원 단위여야 합니다.");
  }

  async play() {
    await this.inputPurchaseAmount();
  }
}

export default App;
