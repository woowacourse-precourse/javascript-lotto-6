import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./libs/message.js";
import LuckyNumbers from "./LuckyNumbers.js";
import Dashboard from "./Dashboard.js";

class LottoManager {
  constructor() {
    this.user = null;
    this.lottoCount = 0;
    this.luckyNumbers = new LuckyNumbers();
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
    this.luckyNumbers.setWinningNumbers(input);
  }

  async setBonusNumber() {
    const input = await Console.readLineAsync(MESSAGES.INPUT_BONNUS_NUMBER);
    this.luckyNumbers.setBonusNumber(input);
  }

  async setWinningNumbersAndBonus() {
    await this.setWinningNumber();
    await this.setBonusNumber();
  }

  checkTotalResult() {
    this.dashboard = new Dashboard(this.luckyNumbers);
    const lottoArr = this.user.lottoArr;

    lottoArr.forEach((lotto) => {
      const rank = this.dashboard.assignLottoRank(lotto);
      this.dashboard.updateDashboard(rank);
    });
  }

  printTotalResult() {
    const dashboard = this.dashboard;
    const earningsRate = dashboard.calculateEarnings(this.user.money);

    Console.print("\n당첨 통계\n---");
    Console.print(`${MESSAGES.FIFTH_RESULT} ${dashboard.rankCount[4]}개`);
    Console.print(`${MESSAGES.FOURTH_RESULT} ${dashboard.rankCount[3]}개`);
    Console.print(`${MESSAGES.THIRD_RESULT} ${dashboard.rankCount[2]}개`);
    Console.print(`${MESSAGES.SECOND_RESULT} ${dashboard.rankCount[1]}개`);
    Console.print(`${MESSAGES.FIRST_RESULT} ${dashboard.rankCount[0]}개`);
    Console.print(`총 수익률은 ${earningsRate}입니다.`);
  }
}

export default LottoManager;
