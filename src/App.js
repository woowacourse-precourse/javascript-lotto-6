import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";
import Lotto from "./Lotto";

class App {
  #amount;
  #lottos;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
  }

  validateAmount = (amount) => {
    if (isNaN(amount) || amount < 0) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (amount % 1000 !== 0) {
      throw new Error(ERROR.INVALID_AMOUNT);
    }
  };

  inputPurchaseAmount = async () => {
    while (true) {
      try {
        this.#amount = Number(await Console.readLineAsync(GAME.INPUT.AMOUNT));
        this.validateAmount(this.#amount);
        const count = this.#amount / 1000;
        this.generateLottosList(count);
        break;
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  generateLottosList = (count) => {
    Console.print(`${count}개를 구입했습니다.\n`);

    for (let i = 0; i < count; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
      Console.print(`[${lotto.join(", ")}]`);
    }
  };

  winningStatistics = async () => {
    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber();
    const matchedCounts = [];

    for (const lotto of this.lottos) {
      const { matchedNumbers, matchedBonusNumber } = lotto.matchedNumbers(
        winningNumbers,
        bonusNumber
      );
      const matchedCount = lotto.compareNumbers(
        matchedNumbers,
        matchedBonusNumber
      );
      matchedCounts.push(matchedCount);
    }
    this.printWinningStatistics(matchedCounts);
    this.calculateProfitRate(matchedCounts);
  };

  printWinningStatistics = (matchedCounts) => {
    Console.print(GAME.WINNING_STATISTICS);
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    for (let i = 0; i < 5; i += 1) {
      Console.print(
        `${i + 3}개 일치 (${prizeMoney[i]}원) - ${matchedCounts.reduce(
          (acc, count) => acc + count[i],
          0
        )}개`
      );
    }
  };

  calculateProfitRate = (matchedCounts) => {
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    let totalProfit = 0;

    for (let i = 0; i < 5; i += 1) {
      totalProfit +=
        prizeMoney[i] * matchedCounts.reduce((acc, count) => acc + count[i], 0);
    }
    let profitRate = ((totalProfit / this.#amount) * 100).toFixed(1);

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  };

  async play() {
    await this.inputPurchaseAmount();
    this.winningStatistics();
  }
}

export default App;
