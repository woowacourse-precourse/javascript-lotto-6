// import { Console, Random } from "@woowacourse/mission-utils";

import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "./LottoMachine.js";
import SETTING from "./Constructor/Setting.js";

class App {
  #money = 0;
  #winningNumbers = [];
  #bonusNumbers = 0;
  constructor() {}
  async play() {
    try {
      const game = new LottoMachine();
      await this.#inputMoney();
      const ticketList = game.buy(this.#money);
      await this.#inputWinningNumbers();
      game.setWinningNumbers(this.#winningNumbers, this.#bonusNumbers);
      game.checkTicket(ticketList);
      game.announceResults(ticketList);
    } catch (error) {
      Console.print(error.message);
    }
  }
  async #inputMoney() {
    this.#money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }
  async #inputWinningNumbers() {
    let winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const bonusNumbers = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    this.#winningNumbers = winningNumbers.split(SETTING.SEPARATOR);
    this.#bonusNumbers = bonusNumbers;
  }
}

export default App;
