import { Console } from "@woowacourse/mission-utils";
import NumberIssuance from "./NumberIssuance.js";

class App {
  async play() {
    const amount = await this.getAmount();
    const numberIssuance = new NumberIssuance(amount);

    await App.displayPurchase(numberIssuance.EA, numberIssuance.lottoNumbers);
  }

  async getAmount() {
    let amount;
    while (true) {
      try {
        const input =
          // eslint-disable-next-line no-await-in-loop
          await Console.readLineAsync("구입 금액을 입력해주세요.\n");
        amount = Number(input);
        App.validateAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static displayPurchase(EA, lottoNumbers) {
    let str = "\n";
    str += `${EA}개를 구매했습니다. \n`;
    str += lottoNumbers.map((item) => `[${item.join(", ")}]`).join("\n");
    Console.print(str);
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
