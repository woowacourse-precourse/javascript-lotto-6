import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.pay = 0; // 구입 금액
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
        this.pay = +input;
      } catch (error) {
        Console.print(error);
      }
    } while (this.pay === 0);
  }

  async play() {
    await this.inputPay();
  }
}

export default App;
