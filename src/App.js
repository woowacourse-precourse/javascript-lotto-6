import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

class LottoPurchase {
  async #lottoAmount() {
    return await parseInt(
      MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.")
    );
  }

  #validateAmount(lottoAmount) {
    if (
      isNaN(lottoAmount) ||
      !lottoAmount ||
      lottoAmount < 1000 ||
      lottoAmount % 1000 !== 0
    ) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
    }
  }

  async #purchaseLottoAmount() {
    let purchaseAmount;

    while (true) {
      try {
        purchaseAmount = await this.#lottoAmount();
        this.#validateAmount(purchaseAmount);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return purchaseAmount;
  }

  async askPurchaseLottoAmount() {
    return this.#purchaseLottoAmount();
  }
}

export default App;
