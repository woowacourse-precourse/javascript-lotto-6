import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.pay = 0; // 구입 개수
    this.lottos = []; // 발행한 로또
  }

  async inputPay() {
    do {
      try {
        const input = await Console.readLineAsync(
          "구입금액을 입력해 주세요. \n"
        );
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

  async makeLotto() {
    Console.print(`\n ${this.pay}개를 구매했습니다.`);
    for (let i = 0; i < this.pay; i++) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      Console.print(lotto);
      this.lottos.push(lotto);
    }
  }

  async play() {
    await this.inputPay();
    await this.makeLotto();
    // const lotto = new Lotto()
  }
}

export default App;
