import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.pay = 0; // 구입 개수
    this.lottos = []; // 발행한 로또
    this.winning = []; // 당첨 번호
    this.bonus = 0; // 보너스 번호
    this.result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }; // 결과
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
    Console.print(`${this.pay}개를 구매했습니다.`);
    for (let i = 0; i < this.pay; i++) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const formattedLotto = `[${lotto.join(", ")}]`;
      Console.print(formattedLotto);
      this.lottos.push(lotto);
    }
  }

  async inputWinning() {
    let isValid = false;

    while (!isValid) {
      try {
        const input = await Console.readLineAsync(
          "\n 당첨 번호를 입력해 주세요. \n"
        );
        const winning = input.split(",").map((elem) => +elem);
        const lotto = new Lotto(winning);
        this.winning = winning;
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
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

  async calWinning() {
    this.lottos.forEach((l) => {
      let basic = 0; // 일반 볼 정답 개수
      let bonus = 0; // 보너스 볼 정답 개수

      l.forEach((ball) => {
        // 일반 볼 비교
        if (this.winning.includes(ball)) {
          basic++;
        }
        // 보너스 볼 비교
        if (this.bonus === ball) {
          bonus++;
        }
      });

      // 등 수 계산
      if (basic === 6 && bonus === 0) {
        this.result[1]++;
      }
      if (basic === 5 && bonus === 1) {
        this.result[2]++;
      }
      if (basic + bonus === 5) {
        this.result[3]++;
      }
      if (basic + bonus === 4) {
        this.result[4]++;
      }
      if (basic + bonus === 3) {
        this.result[5]++;
      }
    });
  }

  async printResult() {
    const earningRatio = this.calEarningRatio();

    Console.print("\n 당첨 통계 \n --- ");
    Console.print("3개 일치 (5,000원) - " + this.result[5] + "개");
    Console.print("4개 일치 (50,000원) - " + this.result[4] + "개");
    Console.print("5개 일치 (1,500,000원) - " + this.result[3] + "개");
    Console.print(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - " + this.result[2] + "개"
    );
    Console.print("6개 일치 (2,000,000,000원) - " + this.result[1] + "개");
    Console.print("총 수익률은 " + earningRatio + "%입니다.\n");
  }

  calEarningRatio() {
    const earning =
      this.result[1] * 2000000000 +
      this.result[2] * 30000000 +
      this.result[3] * 1500000 +
      this.result[4] * 50000 +
      this.result[5] * 5000;
    const buy = this.pay * 1000;
    return Number((earning / buy) * 100).toFixed(1);
  }

  async play() {
    await this.inputPay();
    await this.makeLotto();
    await this.inputWinning();
    await this.inputBonus();
    await this.calWinning();
    await this.printResult();
  }
}

export default App;
