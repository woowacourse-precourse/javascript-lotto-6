import PurchaseLottos from "./PurchaseLottos.js";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import Result from "./Result.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { USER_PROMPT, RESULT, NUMBER } from "./utils/constants.js";

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
    this.printResult();
  }

  async inputLottoCount() {
    try {
      const input = await Console.readLineAsync(USER_PROMPT.PURCHASE_AMOUNT);
      const purchaseLottos = new PurchaseLottos(input);
      return purchaseLottos.getLottoCount();
    } catch (error) {
      throw error;
    }
  }

  async getLottoCount() {
    this.#lottoCount = await this.inputLottoCount();
    Console.print(USER_PROMPT.SHOW_LOTTO_COUNT(this.#lottoCount));
  }

  generateWinningNumbers() {
    for (let index = 0; index < this.#lottoCount; index++) {
      const winningNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.#winningNumberList.push(winningNumbers);
      Console.print(winningNumbers);
    }
  }

  async inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(USER_PROMPT.WINNING_NUMBERS);
      const lotto = new Lotto(input.split(","));
      return lotto.getWinningNumbers();
    } catch (error) {
      throw error;
    }
  }

  async inputBonusNumber() {
    try {
      const input = await Console.readLineAsync(USER_PROMPT.BONUS_NUMBER);
      const bouns = new Bonus(input, this.#userWinningNumbers);
      return bouns.getBonusNumber();
    } catch (error) {
      throw error;
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

  printResult() {
    const { three, four, five, fiveBonus, six } = this.#result;

    Console.print(RESULT.STATISTICS);
    Console.print(`${RESULT.THREE} - ${three}개`);
    Console.print(`${RESULT.FOUR} - ${four}개`);
    Console.print(`${RESULT.FIVE} - ${five}개`);
    Console.print(`${RESULT.FIVE_BONUS} - ${fiveBonus}개`);
    Console.print(`${RESULT.SIX} - ${six}개`);
  }
}

export default App;
