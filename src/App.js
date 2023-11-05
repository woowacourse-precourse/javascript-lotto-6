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
    const ENTERED_INPUT_PRICE = await this.#view.getPrice();
    this.#price = new Price(ENTERED_INPUT_PRICE);
    this.buyLottoNTimes(this.#price.price / 1000);
    const ENTERED_WINNING_NUMBER = await this.#view.getWinninNumber();
    const ENTERED_BONUS_NUMBER = await this.#view.getBonusNumber();
    this.#result = new Result(ENTERED_WINNING_NUMBER, ENTERED_BONUS_NUMBER);
    this.#result.getResults(this.#boughtLottos);
    this.#result.printResult(this.#price.price);
  }
}

export default App;
