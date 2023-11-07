import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  // 내부 변수
  #lottos = []; // 로또 번호
  #winningNumbers = []; // 당첨 번호
  #bonusNumber = 0; // 보너스 번호

  async play() {
    let amount;
    try {
      amount = await this.#getPurchaseAmount();
    } catch (error) {
      Console.print(error.message);
      return;
    }
    this.#generateLottos(amount / 1000);
    this.#printLottos();
    await this.#getWinningNumbers();
    await this.#getBonusNumber();
    this.#printResults();
  }

  // 입력된 수만큼 로또 티켓을 생성(1~45 중복x)
  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
  }

  // 사용자로부터 구입금액을 입력 받음 (예외)
  async #getPurchaseAmount() {
    while (true) {
      const amount = await Console.readLineAsync("구입금액을 입력해 주세요.");
      if (amount % 1000 !== 0) {
        Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        throw new Error("Invalid purchase amount");
      } else {
        return amount;
      }
    }
  }

  // 생성된 로또 티켓들의 개수와 번호를 출력하는 메서드입니다.
  #printLottos() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => Console.print(`[${lotto.numbers.join(", ")}]`));
  }

  // 사용자로부터 당첨 번호를 입력 받는다.
  async #getWinningNumbers() {
    while (true) {
      const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
      const numbers = input.split(",").map(Number);
      try {
        this.#winningNumbers = new Lotto(numbers).numbers;
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // 사용자로부터 보너스 번호를 입력받는다.
  async #getBonusNumber() {
    while (true) {
      const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
      const bonusNumber = Number(input);
      if (this.#winningNumbers.includes(bonusNumber)) {
        Console.print("[ERROR] 보너스 번호는 당첨 번호와 달라야 합니다.");
      } else if (bonusNumber < 1 || bonusNumber > 45) {
        Console.print("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
      } else {
        this.#bonusNumber = bonusNumber;
        break;
      }
    }
  }

  // 로또 게임 결과 출력
  #printResults() {
    const results = {
      "3개 일치 (5,000원)": 0,
      "4개 일치 (50,000원)": 0,
      "5개 일치 (1,500,000원)": 0,
      "5개 일치, 보너스 볼 일치 (30,000,000원)": 0,
      "6개 일치 (2,000,000,000원)": 0,
    };

    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.numbers.filter((number) => this.#winningNumbers.includes(number)).length;
      const bonusMatch = lotto.numbers.includes(this.#bonusNumber);
      if (matchCount === 6) {
        results["6개 일치 (2,000,000,000원)"]++;
      } else if (matchCount === 5 && bonusMatch) {
        results["5개 일치, 보너스 볼 일치 (30,000,000원)"]++;
      } else if (matchCount === 5) {
        results["5개 일치 (1,500,000원)"]++;
      } else if (matchCount === 4) {
        results["4개 일치 (50,000원)"]++;
      } else if (matchCount === 3) {
        results["3개 일치 (5,000원)"]++;
      }
    });

    const prizeAmounts = {
      "3개 일치 (5,000원)": 5000,
      "4개 일치 (50,000원)": 50000,
      "5개 일치 (1,500,000원)": 1500000,
      "5개 일치, 보너스 볼 일치 (30,000,000원)": 30000000,
      "6개 일치 (2,000,000,000원)": 2000000000,
    };

    const totalCost = this.#lottos.length * 1000;
    let totalPrize = 0;

    for (const key in results) {
      totalPrize += results[key] * prizeAmounts[key];
    }

    const roi = totalCost > 0 ? (totalPrize / totalCost) * 100 : 0;

    Console.print("당첨 통계");
    Console.print("---");
    for (const key in results) {
      Console.print(`${key} - ${results[key]}개`);
    }
    Console.print(`총 수익률은 ${roi.toFixed(2)}%입니다.`);
  }
}

export default App;
