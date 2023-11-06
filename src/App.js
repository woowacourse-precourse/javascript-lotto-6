import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.pay = 0; // 구입 개수
  }

  async inputPay() {
    do {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해 주세요.");
        if (isNaN(+input)) {
          Console.print("[ERROR] 금액은 숫자로 입력해 주세요.");
          this.inputPay();
        } else if (+input % 1000 !== 0) {
          Console.print("[ERROR] 로또 구입은 1000원 단위만 가능합니다.");
          this.inputPay();
        }
        this.pay = +input / 1000;
      } catch (error) {
        Console.print(error);
      }
    } while (this.pay === 0);
  }

  async play() {
    await this.inputPay();
    // const lotto = new Lotto()
  }
}

export default App;
