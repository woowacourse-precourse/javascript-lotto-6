import PurchaseLottos from "./PurchaseLottos.js";
import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { USER_PROMPT } from "./utils/constants.js";

class App {
  purchaseLottos;
  #lottoCount;
  #winningNumberList = [];
  #userWinningNumbers;
  #userBonusNumber;

  constructor() {}

  async play() {
    await this.getLottoCount();
    this.generateWinningNumbers();
    await this.getUserWinningAndBonusNumbers();
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
      return input;
    } catch (error) {
      throw error;
    }
  }

  async getUserWinningAndBonusNumbers() {
    this.#userWinningNumbers = await this.inputWinningNumbers();
    this.#userBonusNumber = await this.inputBonusNumber();
  }
}

export default App;
