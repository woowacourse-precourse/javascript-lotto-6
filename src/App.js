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

  constructor() {
    this.#userInputHandler = new UserInputHandler();
    this.#lottos = [];
  }

  async getPriceInput() {
    const price = await this.#userInputHandler.getUserInput(
      "구입금액을 입력해 주세요\n"
    );
    const lottoCount = parseInt(price / 1000);
    Console.print(`8개를 구매했습니다.\n`);

    this.#lottos = Array.from(
      { length: lottoCount },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }

  async getWinningInput() {
    const winningInputs = await this.#userInputHandler.getUserInput(
      "당첨 번호를 입력해 주세요.\n"
    );
    this.winningInputs = winningInputs.split(",");
    Console.print("");
  }

  async getBonusInput() {
    const bonusInput = await this.#userInputHandler.getUserInput(
      "보너스 번호를 입력해 주세요.\n"
    );
    this.#bonusNumber = parseInt(bonusInput);
    Console.print("");
  }

  async play() {
    await this.getPriceInput();
    await this.getWinningInput();
    await this.getBonusInput();
  }
}

export default App;
