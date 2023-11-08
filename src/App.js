import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class UserInputHandler {
  async getUserInput(question) {
    const input = await Console.readLineAsync(question);
    return input;
  }
}

class App {
  #userInputHandler;
  #lottos;
  #bonusNumber;
  #winningNumbers;
  #result;
  #price;

  constructor() {
    this.#userInputHandler = new UserInputHandler();
    this.#lottos = [];
    this.#result = Array.from({ length: 5 }, (_) => 0);
  }

  async getPriceInput() {
    const price = await this.#userInputHandler.getUserInput(
      "구입금액을 입력해 주세요\n"
    );

    try {
      const parsedPrice = Number(price);
      if (
        isNaN(price) ||
        !Number.isInteger(parsedPrice) ||
        parsedPrice === 0 ||
        parsedPrice % 1000
      ) {
        throw new Error("[ERROR] : 잘못된 구입금액입니다.");
      }
    } catch ({ message }) {
      Console.print(message);
      return this.getPriceInput();
    }

    const lottoCount = parseInt(price / 1000);

    Console.print(`\n${lottoCount}개를 구매했습니다.`);

    this.#lottos = Array.from(
      { length: lottoCount },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
    );

    this.#lottos.forEach((lotto) => lotto.printNumbers());
  }

  //TODO 1. 6개인지 2. 중복된 것이 없는지 3. 숫자인지 4. 1~45인지 5. int인지
  validateWinningNumbers() {
    const uniqueWinningNumber = new Set(this.#winningNumbers);

    if (this.#winningNumbers.length !== 6) {
      throw new Error("[ERROR] : 6개의 숫자를 입력해주세요");
    }

    if (uniqueWinningNumber.size !== 6) {
      throw new Error("[ERROR] : 중복된 숫자가 있습니다");
    }

    this.#winningNumbers.forEach((winningNumber) => {
      if (
        isNaN(winningNumber) ||
        !Number.isInteger(winningNumber) ||
        winningNumber < 1 ||
        winningNumber > 45
      ) {
        throw new Error("[ERROR] : 잘못된 로또 입력값입니다");
      }
    });
  }

  async getWinningInput() {
    try {
      const winningInputs = await this.#userInputHandler.getUserInput(
        "\n당첨 번호를 입력해 주세요.\n"
      );

      this.#winningNumbers = winningInputs.split(",").map(Number);
      this.validateWinningNumbers();
      Console.print(`[${this.#winningNumbers.join(", ")}]\n`);
    } catch ({ message }) {
      Console.print(message);
      return this.getWinningInput();
    }
  }

  //숫자인지, 1~45인지, winning과 중복인지, int인지
  async getBonusInput() {
    try {
      const bonusInput = await this.#userInputHandler.getUserInput(
        "보너스 번호를 입력해 주세요.\n"
      );
      const parsedBonus = Number(bonusInput);

      const uniqueWinningNumber = new Set(this.#winningNumbers);

      if (
        isNaN(bonusInput) ||
        !Number.isInteger(parsedBonus) ||
        uniqueWinningNumber.has(parsedBonus) ||
        parsedBonus < 1 ||
        parsedBonus > 45
      ) {
        throw new Error("[ERROR] : 잘못된 로또 입력값입니다");
      }

      this.#bonusNumber = parsedBonus;
    } catch ({ message }) {
      Console.print(message);
      this.getBonusInput();
    }
  }

  calculateResult() {
    this.#lottos.forEach((lotto) => {
      const { winning, bonus } = lotto.getNumbers().reduce(
        (prev, current) => {
          if (this.#winningNumbers.includes(current)) {
            return {
              ...prev,
              winning: prev.winning + 1,
            };
          }
          if (this.#bonusNumber === current) {
            return {
              ...prev,
              bonus: prev.bonus + 1,
            };
          }
          return prev;
        },
        { winning: 0, bonus: 0 }
      );

      if (winning === 3) {
        this.#result[0]++;
      } else if (winning === 4) {
        this.#result[1]++;
      } else if (winning === 5 && bonus === 0) {
        this.#result[2]++;
      } else if (winning === 5) {
        this.#result[3]++;
      } else if (winning === 6) {
        this.#result[4]++;
      }
    });
  }

  getAllRevenue() {
    return [5000, 50000, 1500000, 30000000, 2000000000].reduce(
      (prev, current, index) => {
        return prev + current * this.#result[index];
      },
      0
    );
  }

  getPrice() {
    return this.#lottos.length * 1000;
  }

  printResult() {
    const allRevenue = this.getAllRevenue();
    console.log(allRevenue, (allRevenue / this.getPrice()) * 100);
    Console.print(`\n당첨 통계\n---`);
    Console.print(`3개 일치 (5,000원) - ${this.#result[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#result[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#result[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#result[3]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#result[4]}개`);
    Console.print(
      `총 수익률은 ${((allRevenue / this.getPrice()) * 100).toFixed(1)}%입니다.`
    );
  }

  async play() {
    await this.getPriceInput();
    await this.getWinningInput();
    await this.getBonusInput();
    this.calculateResult();
    this.printResult();
  }
}

export default App;
