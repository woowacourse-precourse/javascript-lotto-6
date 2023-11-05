import { Console } from "@woowacourse/mission-utils";
import NumberIssuance from "./NumberIssuance.js";

class App {
  async play() {
    const amount = await this.getAmount();
    const numberIssuance = new NumberIssuance(amount);
    Console.print(numberIssuance.lottoNumbers);
  }

  async getAmount() {
    let amount;
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const input = await Console.readLineAsync("구입 금액을 입력해주세요.");
        amount = Number(input);
        App.validateAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static validateAmount(amount) {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(amount) || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 자연수만 입력 가능합니다.");
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위만 가능합니다.");
    }
  }
}

export default App;
