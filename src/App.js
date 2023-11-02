import { MissionUtils } from "@woowacourse/mission-utils";

class GetPurchaseAmount {
  #purchase;

  constructor(purchase) {
    this.#purchaseValidate(purchase);
    this.#purchase = purchase;
  }

  #purchaseValidate(purchase) {
    const regex = /^\d+$/;
    if (!regex.test(purchase)) {
      throw new Error("[ERROR] 구매 금액은 숫자 형식만 가능합니다.");
    } else if (purchase % 1000 !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000으로 나누어 떨어져야 합니다.");
    }

    return purchase;
  }

  getPurchaseAmount() {
    return this.#purchase;
  }
}

class App {
  async getPurchaseAmount() {
    try {
      const purchaseInput = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n",
      );
      const checkPurchaseInput = new GetPurchaseAmount(purchaseInput);
      const getPurchaseInput = checkPurchaseInput.getPurchaseAmount();

      return getPurchaseInput;
    } catch (error) {
      MissionUtils.Console.print(error.message);

      return await this.getPurchaseAmount();
    }
  }

  async play() {
    const purchaseAmount = await this.getPurchaseAmount();
  }
}

export default App;
