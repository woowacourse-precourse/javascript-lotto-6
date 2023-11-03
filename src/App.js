import { Console } from "@woowacourse/mission-utils";
import LotteryMachine from "./LotteryMachine.js";
import LottoResult from "./LottoResult.js";
import LottoStatistics from "./LottoStatistics.js";

const LOTTO_PRICE = 1000;
const PRIZES = {
  6: 2000000000,
  "5+1": 30000000,
  5: 1500000,
  4: 50000,
  3: 5000,
  꽝: 0,
};

class App {
  constructor() {
    this.lottoMachine = new LotteryMachine(LOTTO_PRICE);
    this.lottos = [];
  }

  async play() {
    const purchaseAmount = await this.#askForPurchaseAmount();
    this.lottos = this.lottoMachine.buyLottos(purchaseAmount);

    this.#printLottos();

    const winningNumbers = await this.#askForWinningNumbers();
    const bonusNumber = await this.#askForBonusNumber(winningNumbers);
    const lottoResult = new LottoResult(winningNumbers, bonusNumber);

    const results = lottoResult.calculateResults(this.lottos);
    const lottoStatistics = new LottoStatistics(this.lottos, LOTTO_PRICE);
    const statistics = lottoStatistics.calculateStatistics(results);

    this.#printResults(statistics);
  }

  #printLottos() {
    Console.print(`\n${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  #printResults(statistics) {
    Console.print("\n당첨 통계\n---");
    const prizeOrder = ["3", "4", "5", "5+1", "6"];

    prizeOrder.forEach((key) => {
      const prizeString =
        key === "5+1" ? "5개 일치, 보너스 볼 일치" : `${key}개 일치`;
      const count = statistics.resultCounts[key] || 0;
      const prize = PRIZES[key] || 0;
      if (prize > 0) {
        Console.print(
          `${prizeString} (${prize.toLocaleString()}원) - ${count}개`
        );
      }
    });

    Console.print(`총 수익률은 ${statistics.roi}%입니다.`);
  }

  async #askForPurchaseAmount() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = parseInt(
          await Console.readLineAsync("구입금액을 입력해 주세요. \n"),
          10
        );
        if (!isValidAmount(purchaseAmount)) {
          throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return purchaseAmount;
  }

  async #askForWinningNumbers() {
    let winningNumbers;
    while (true) {
      try {
        const winningNumbersInput = await Console.readLineAsync(
          "\n당첨 번호를 입력해 주세요.\n"
        );
        if (!/^\d+(,\d+)*$/.test(winningNumbersInput)) {
          throw new Error(
            "[ERROR] 당첨 번호는 쉼표(,)로만 구분된 숫자여야 합니다."
          );
        }
        winningNumbers = winningNumbersInput
          .split(",")
          .map((number) => parseInt(number.trim(), 10));
        if (winningNumbers.some((num) => isNaN(num))) {
          throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
        }
        if (!isValidWinningNumbers(winningNumbers)) {
          throw new Error(
            "[ERROR] 당첨 번호는 1~45 범위의 숫자 6개여야 합니다."
          );
        }
        if (hasDuplicate(winningNumbers)) {
          throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return winningNumbers;
  }

  async #askForBonusNumber(winningNumbers) {
    let bonusNumber;
    while (true) {
      try {
        const bonusNumberInput = await Console.readLineAsync(
          "\n보너스 번호를 입력해 주세요.\n"
        );
        if (!/^\d+$/.test(bonusNumberInput)) {
          throw new Error(
            "[ERROR] 보너스 번호는 숫자 한 개만 입력해야 합니다."
          );
        }
        bonusNumber = parseInt(bonusNumberInput.trim(), 10);
        if (winningNumbers.includes(bonusNumber)) {
          throw new Error(
            "[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다."
          );
        }
        if (!isValidNumber(bonusNumber)) {
          throw new Error(
            "[ERROR] 보너스 번호는 1~45 범위의 숫자 1개여야 합니다."
          );
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return bonusNumber;
  }
}

// 예외 처리를 위한 유효성 검사 함수들
// 1. 구입 금액이 1,000원 단위인지 검사
function isValidAmount(amount) {
  return amount % 1000 === 0;
}

// 2. 당첨 번호와 보너스 번호에 1~45 범위의 값을 입력했는지 검사
function isValidNumber(number) {
  return !isNaN(number) && number >= 1 && number <= 45;
}

// 3. 당첨 번호에 7개 이상의 숫자를 입력했는지 검사
function isValidWinningNumbers(numbers) {
  return numbers.length === 6 && numbers.every(isValidNumber);
}

// 4. 중복 입력 여부 검사
function hasDuplicate(numbers) {
  return new Set(numbers).size !== numbers.length;
}

export default App;
