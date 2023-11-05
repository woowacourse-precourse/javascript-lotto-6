import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";
import WinningNumbers from "./WinningNumbers.js";
import { MESSAGES } from "./libs/message.js";

class LottoManager {
  constructor() {
    this.user = null;
    this.lottoCount = 0;
  }

  setUser(user) {
    this.user = user;
  }

  calculateLottoCount() {
    this.lottoCount = this.user.money / 1000;
  }

  publishLotto() {
    for (let i = 0; i < this.lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.user.lottoArr.push(lotto);
    }
  }

  printPublishedLotto() {
    Console.print(`\n${this.lottoCount}개를 구매했습니다.`);
    this.user.lottoArr.forEach((lotto) => {
      lotto.printNumbers();
    });
  }

  async setWinningNumber() {
    const input = await Console.readLineAsync(MESSAGES.INPUT_WINNING_NUMBERS);
    this.winningNumber = new WinningNumbers(input);
  }

  async setWinningNumbersAndBonus() {
    await this.setWinningNumber();
    // await this.setBonnusNumber();
  }
}

export default LottoManager;
