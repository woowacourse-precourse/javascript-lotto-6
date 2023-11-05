import PurchaseLottos from "./PurchaseLottos.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { USER_PROMPT } from "./utils/constants.js";

class App {
  purchaseLottos;
  #lottoCount;
  #winningNumberList = [];
  #userWinningNumbers;
  #userBonusNumber;

  constructor() {
    this.purchaseLottos = new PurchaseLottos();
  }

  async play() {
    await this.getLottoCount();
    this.generateWinningNumbers();
    await this.getUserWinningAndBonusNumbers();
  }

  async getLottoCount() {
    this.#lottoCount = await this.purchaseLottos.getLottoAmount();
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

  async getUserWinningAndBonusNumbers() {
    this.#userWinningNumbers = await this.purchaseLottos.inputWinningNumbers();
    this.#userBonusNumber = await this.purchaseLottos.inputBonusNumber();
  }
}

export default App;
