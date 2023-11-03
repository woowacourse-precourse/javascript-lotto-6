import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #money;

  #lottos = [];

  #winningNumbers;

  static #isPositiveInteger(input) {
    const regex = /^\d+$/;
    return regex.test(input);
  }

  static #validateMoney(money) {
    if (!App.#isPositiveInteger(money)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error(
        "[ERROR] 구입금액은 1,000원 단위이며 1,000원으로 나누어 떨어져야 합니다.",
      );
    }
  }

  async getMoneyInput() {
    const money = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n",
    );
    App.#validateMoney(money);
    this.#money = money;
  }

  purchaseLotto() {
    this.#lottos.push(
      new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)),
    );
  }

  printLottoList() {
    MissionUtils.Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottos.length; i += 1) {
      this.#lottos[i].printNumbers();
    }
  }

  async getWinningNumbers() {
    const numbers = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n",
    );
    this.#winningNumbers = new Set(numbers.split(" "));
  }

  async play() {
    await this.getMoneyInput();
    for (let i = 0; i < this.#money / 1000; i += 1) {
      this.purchaseLotto();
    }
    this.printLottoList();
    await this.getWinningNumbers();
  }
}

export default App;
