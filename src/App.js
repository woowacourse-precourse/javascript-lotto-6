import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.pay = 0; // 구입 개수
    this.lottos = []; // 발행한 로또
    this.winning = []; // 당첨 번호
    this.bonus = 0; // 보너스 번호
  }

  async inputPay() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(
          "구입금액을 입력해 주세요. \n"
        );
        if (isNaN(+input)) {
          throw new Error("[ERROR] 금액은 숫자로 입력해 주세요.");
        }
        if (+input % 1000 !== 0) {
          throw new Error("[ERROR] 로또 구입은 1000원 단위만 가능합니다.");
        }
        this.pay = +input / 1000;
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
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

  async inputWinning() {
    const input = await Console.readLineAsync(
      "\n 당첨 번호를 입력해 주세요. \n"
    );
    const winning = input.split(",").map((elem) => +elem);
    const lotto = new Lotto(winning);
    this.winning = winning;
  }

  async inputBonus() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(
          "\n 보너스 번호를 입력해 주세요. \n"
        );
        const bonusNum = +input;
        if (this.winning.includes(bonusNum)) {
          throw new Error(
            "[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요."
          );
        }
        if (bonusNum < 1 || bonusNum > 45) {
          throw new Error("[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.");
        }
        this.bonus = bonusNum;
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async play() {
    await this.inputPay();
    await this.makeLotto();
    await this.inputWinning();
    await this.inputBonus();
  }
}

export default App;
