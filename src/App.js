import { Console } from "@woowacourse/mission-utils";
import LotteryMachine from "./LotteryMachine.js";
import LottoResult from "./LottoResult.js";
import LottoStatistics from "./LottoStatistics.js";
import { LOTTO_PRICE, PRIZES } from "./constants.js";
import {
  isValidAmount,
  isValidWinningNumbers,
  hasDuplicate,
  isValidNumber,
} from "./validation.js";

class App {
  lottoMachine = new LotteryMachine(LOTTO_PRICE);
  lottos = [];

  async play() {
    const purchaseAmount = await askForInput(
      "\n구매 금액을 입력해 주세요.\n",
      (input) => parseInt(input.trim(), 10),
      (amount) => isValidAmount(amount, LOTTO_PRICE),
      "[ERROR] 구매 금액은 1000원 단위의 금액이어야 합니다."
    );
    this.lottos = this.lottoMachine.buyLottos(purchaseAmount);
    this.printLottos();

    const winningNumbers = await askForInput(
      "\n당첨 번호를 입력해 주세요.\n",
      (input) => input.split(",").map((n) => parseInt(n.trim(), 10)),
      (numbers) => isValidWinningNumbers(numbers) && !hasDuplicate(numbers),
      "[ERROR] 당첨 번호는 1~45 범위의 숫자 6개여야 하며, 중복될 수 없습니다."
    );

    const bonusNumber = await askForInput(
      "\n보너스 번호를 입력해 주세요.\n",
      (input) => parseInt(input.trim(), 10),
      (number) => isValidNumber(number) && !winningNumbers.includes(number),
      "[ERROR] 보너스 번호는 당첨 번호와 다른 1~45 범위의 숫자여야 합니다."
    );

    const results = this.getResults(winningNumbers, bonusNumber);
    this.printResults(results);
  }

  printLottos() {
    Console.print(`\n${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(", ")}]`)
    );
  }

  printResults(results) {
    Console.print("\n당첨 통계\n---");
    results.prizeOrder.forEach((key) => {
      const count = results.statistics.resultCounts[key] || 0;
      if (results.prizes[key] > 0) {
        Console.print(
          `${results.prizeStrings[key]} (${results.prizes[
            key
          ].toLocaleString()}원) - ${count}개`
        );
      }
    });
    Console.print(`총 수익률은 ${results.statistics.roi}%입니다.`);
  }

  getResults(winningNumbers, bonusNumber) {
    const lottoResult = new LottoResult(winningNumbers, bonusNumber);
    const results = lottoResult.calculateResults(this.lottos);
    const lottoStatistics = new LottoStatistics(this.lottos, LOTTO_PRICE);
    const statistics = lottoStatistics.calculateStatistics(results);
    const prizeData = this.getPrizeData(results);

    return {
      statistics,
      ...prizeData,
    };
  }

  getPrizeData(results) {
    const resultCounts = this.calculateResultCounts(results);

    return {
      prizeOrder: ["3", "4", "5", "5+1", "6"],
      prizeStrings: {
        "5+1": "5개 일치, 보너스 볼 일치",
        3: "3개 일치",
        4: "4개 일치",
        5: "5개 일치",
        6: "6개 일치",
        꽝: "꽝",
      },
      prizes: PRIZES,
      resultCounts,
    };
  }

  calculateResultCounts(results) {
    return results.reduce((counts, prizeCategory) => {
      const key = prizeCategory;
      counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {});
  }
}

async function askForInput(
  prompt,
  parseFunction,
  validationFunction,
  errorMessage
) {
  while (true) {
    try {
      const input = await Console.readLineAsync(prompt);
      const value = parseFunction(input);
      if (!validationFunction(value)) {
        throw new Error(errorMessage);
      }
      return value;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
