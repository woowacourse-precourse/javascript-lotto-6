import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./libs/message.js";
import LuckyNumbers from "./LuckyNumbers.js";
import Dashboard from "./Dashboard.js";
import {
  LOTTO_LENGTH,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  ONE_THOUSAND,
} from "./libs/constants.js";

class LottoManager {
  constructor() {
    this.user = null;
    this.lottoCount = 0;
    this.luckyNumbers = new LuckyNumbers();
    this.dashboard = null;
  }

  setUser(user) {
    this.user = user;
  }

  calculateLottoCount() {
    this.lottoCount = this.user.money / ONE_THOUSAND;
  }

  publishLotto() {
    for (let i = 0; i < this.lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_MIN_NUMBER,
        LOTTO_MAX_NUMBER,
        LOTTO_LENGTH
      );
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

  async setWinningNumbersAndBonus() {
    await this.luckyNumbers.setWinningNumbers();
    await this.luckyNumbers.setBonusNumber();
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

    Console.print(MESSAGES.TOTAL_RESULS_HEADER);
    for (let rank = 5; rank >= 1; rank--) {
      const rankIdx = rank - 1;
      Console.print(
        `${MESSAGES.PRIZE_CATEGORIES[rankIdx]} ${dashboard.rankCountArray[rankIdx]}개`
      );
    }
    Console.print(`총 수익률은 ${earningsRate}입니다.`);
  }
}

export default LottoManager;
