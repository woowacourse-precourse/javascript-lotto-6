import View from "./View.js";
import Lotto from "./Lotto.js";
import Price from "./Price.js";
import BonusNumber from "./BonusNumber.js";
import { Console, Random } from "@woowacourse/mission-utils";
import Result from "./Result.js";

class App {
  #view;
  #price;
  #boughtLottos = [];
  #result;

  constructor() {
    this.#view = new View();
    this.#result = new Result();
  }

  buyLotto() {
    const LOTTO = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );

    return LOTTO;
  }

  buyLottoNTimes(n) {
    Console.print(`${n}개를 구매했습니다.`);
    for (let i = 0; i < n; i++)
      this.#boughtLottos.push(new Lotto(this.buyLotto()));
    this.getRank();
  }

  getRank() {
    for (let lotto of this.#boughtLottos) {
      lotto.printNumbers();
    }
  }

  async play() {
    while (true) {
      try {
        const ENTERED_INPUT_PRICE = await this.#view.getPrice();
        this.#price = new Price(ENTERED_INPUT_PRICE);
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
    this.buyLottoNTimes(this.#price.price / 1000);

    while (true) {
      try {
        const ENTERED_WINNING_NUMBER = await this.#view.getWinninNumber();
        this.#result.winningNumber = ENTERED_WINNING_NUMBER;
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }

    while (true) {
      try {
        const ENTERED_BONUS_NUMBER = await this.#view.getBonusNumber();
        this.#result.bonusNumber = ENTERED_BONUS_NUMBER;
        break;
      } catch (e) {
        Console.print(e.message);
      }
    }
    this.#result.getResults(this.#boughtLottos);
    this.#result.printResult(this.#price.price);
  }
}

export default App;
