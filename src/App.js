import PurchaseLottos from "./PurchaseLottos.js";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import Result from "./Result.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { NUMBER } from "./utils/constants.js";
import { INPUT, OUTPUT } from "./utils/messages.js";

class App {
  #lottoCount;
  #winningNumberList = [];
  #userWinningNumbers;
  #userBonusNumber;
  #result;
  #profit = 0;

  constructor() {
    this.profitList = {
      three: 5000,
      four: 50000,
      five: 1500000,
      fiveBonus: 30000000,
      six: 2000000000,
    };
  }

  async play() {
    await this.getLottoCount();
    this.generateWinningNumbers();
    await this.getUserWinningAndBonusNumbers();
    this.getResult();
    this.getProfit();
    this.printResult();
  }

  async inputLottoCount() {
    try {
      const input = await Console.readLineAsync(INPUT.PURCHASE_AMOUNT);
      const purchaseLottos = new PurchaseLottos(input);
      return purchaseLottos.getLottoCount();
    } catch (error) {
      Console.print(error.message);
      return await this.inputLottoCount();
    }
  }

  async getLottoCount() {
    this.#lottoCount = await this.inputLottoCount();
    Console.print(OUTPUT.SHOW_LOTTO_COUNT(this.#lottoCount));
  }

  generateWinningNumbers() {
    for (let index = 0; index < this.#lottoCount; index++) {
      const winningNumbers = Random.pickUniqueNumbersInRange(
        NUMBER.MIN,
        NUMBER.MAX,
        NUMBER.COUNT
      ).sort((a, b) => a - b);

      this.#winningNumberList.push(winningNumbers);
      Console.print(`[${winningNumbers.join(", ")}]`);
    }
  }

  async inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(INPUT.WINNING_NUMBERS);
      const lotto = new Lotto(input.split(","));
      return lotto.getWinningNumbers();
    } catch (error) {
      Console.print(error.message);
      return await this.inputWinningNumbers();
    }
  }

  async inputBonusNumber() {
    try {
      const input = await Console.readLineAsync(INPUT.BONUS_NUMBER);
      const bouns = new Bonus(input, this.#userWinningNumbers);
      return bouns.getBonusNumber();
    } catch (error) {
      Console.print(error.message);
      return await this.inputBonusNumber();
    }
  }

  async getUserWinningAndBonusNumbers() {
    this.#userWinningNumbers = await this.inputWinningNumbers();
    this.#userBonusNumber = await this.inputBonusNumber();
  }

  getResult() {
    const result = new Result(
      this.#winningNumberList,
      this.#userWinningNumbers,
      this.#userBonusNumber
    );

    this.#result = result.getResult();
  }

  getProfit() {
    Object.entries(this.#result).forEach(([count, score]) => {
      if (score !== 0) {
        this.#profit = this.profitList[count] * score;
      }
    });

    this.#profit =
      (this.#profit / (this.#lottoCount * NUMBER.DIVISOR)) * NUMBER.PERCENTAGE;
  }

  printResult() {
    const { three, four, five, fiveBonus, six } = this.#result;

    Console.print(OUTPUT.STATISTICS);
    Console.print(`${OUTPUT.THREE} - ${three}개`);
    Console.print(`${OUTPUT.FOUR} - ${four}개`);
    Console.print(`${OUTPUT.FIVE} - ${five}개`);
    Console.print(`${OUTPUT.FIVE_BONUS} - ${fiveBonus}개`);
    Console.print(`${OUTPUT.SIX} - ${six}개`);
    Console.print(
      `총 수익률은 ${this.#profit
        .toFixed(1)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%입니다.`
    );
  }
}

export default App;
