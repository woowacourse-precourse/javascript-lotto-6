import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

class LottoPurchase {
  async #lottoAmount() {
    return parseInt(
      await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.")
    );
  }

  async #askPurchaseLottoAmount() {
    let amount;

    while (true) {
      try {
        amount = await this.#lottoAmount;

        if (!amount || amount < 1000 || amount % 1000 !== 0) {
          throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
        }

        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return amount;
  }
}

export default App;
