import PurchaseLottos from "./PurchaseLottos.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { USER_PROMPT } from "./utils/constants.js";

class App {
  #lottoCount;
  #winningNumberList = [];

  async play() {
    await this.getLottoCount();
    this.generateWinningNumbers();
  }

  async getLottoCount() {
    const purchaseLottos = new PurchaseLottos();
    this.#lottoCount = await purchaseLottos.getLottoAmount();

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
}

export default App;
