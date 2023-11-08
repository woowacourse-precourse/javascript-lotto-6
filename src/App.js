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

  validateWinningNumbers = (numbers) => {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_ARRAY_LENGTH);
    }

    for (const number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error(ERROR.OUT_OF_RANGE);
      }
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }
  };

  validateBonusNumber = (number, winningNumbers) => {
    if (isNaN(number) || number < 0) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (number < 1 || number > 45) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
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
        throw new Error(ERROR.INPUT);
      }
    }
  };

  generateLottosList = (count) => {
    Console.print(`${count}개를 구입했습니다.`);

    for (let i = 0; i < count; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(numbers);
      const lotto = new Lotto(numbers);
      lotto.printLottos();
    }
  };

  inputWinningNumbers = async () => {
    while (true) {
      try {
        const numbers = await Console.readLineAsync(GAME.INPUT.WINNING_NUMBER);
        const numbersArray = numbers
          .split(",")
          .map((num) => Number(num.trim()));
        this.validateWinningNumbers(numbersArray);
        return numbersArray;
      } catch (error) {
        throw new Error(ERROR.INPUT);
      }
    }
  };

  inputBonusNumber = async (winningNumbers) => {
    while (true) {
      try {
        const number = Number(
          await Console.readLineAsync(GAME.INPUT.BONUS_NUMBER)
        );
        this.validateBonusNumber(number, winningNumbers);
        return number;
      } catch (error) {
        throw new Error(ERROR.INPUT);
      }
    }
  };

  matchedNumbers = async () => {
    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber(winningNumbers);

    let matched = [0, 0, 0, 0, 0];

    this.#lottos.forEach((lotto) => {
      const matchedCount = lotto.filter((number) =>
        winningNumbers.includes(number)
      ).length;

      if (matchedCount === 6) matched[4] += 1;
      else if (matchedCount === 5 && lotto.includes(bonusNumber)) {
        matched[3] += 1;
      } else if (matchedCount === 5) matched[2] += 1;
      else if (matchedCount === 4) matched[1] += 1;
      else if (matchedCount === 3) matched[0] += 1;
    });

    return matched;
  };

  winningStatistics = async () => {
    const matchedCounts = await this.matchedNumbers();
    this.printWinningStatistics(matchedCounts);
    this.calculateProfitRate(matchedCounts);
  };

  printWinningStatistics = (matchedCounts) => {
    Console.print(GAME.WINNING_STATISTICS);

    const prizeMoney = [
      "5,000",
      "50,000",
      "1,500,000",
      "30,000,000",
      "2,000,000,000",
    ];
    for (let i = 0; i < 5; i += 1) {
      Console.print(
        `${i + 3}개 일치 (${prizeMoney[i]}원) - ${matchedCounts[i]}개`
      );
    }
  };

  calculateProfitRate = (matchedCounts) => {
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    let totalCost = 0;

    for (let i = 0; i < 5; i += 1) {
      totalCost += prizeMoney[i] * matchedCounts[i];
    }
    const profitRate = ((totalCost / this.#amount) * 100).toFixed(1);

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  };

  async play() {
    await this.inputPurchaseAmount();
    await this.winningStatistics();
  }
}

export default App;
