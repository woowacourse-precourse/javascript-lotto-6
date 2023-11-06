import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  purchaseAmount = 0;
  lottos = [];

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

  static generateLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedLottoNumbers = lottoNumbers.sort((a, b) => a - b);
    MissionUtils.Console.print("[" + sortedLottoNumbers.join(", ") + "]");
    return sortedLottoNumbers;
  }

  purchaseLotto() {
    let lottoAmount = this.purchaseAmount / 1000;
    for (let i = 1; i <= lottoAmount; i++) {
      const lottoNumbers = App.generateLottoNumbers();
    }
  }

  async play() {
    await this.inputPurchaseAmount();
  }
}

export default App;
