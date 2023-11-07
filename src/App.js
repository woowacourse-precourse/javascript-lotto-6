import { MissionUtils } from "@woowacourse/mission-utils";
import WinningLotto from "./classes/WinningLotto.js";
import Util from "./classes/util.js";

const Console = MissionUtils.Console;

class App {
  async purchaseNumber() {
    const userMoney = await Util.validateUserMoney();
    const purchaseNumber = Util.getPurchaseNumber(userMoney);
    Console.print(purchaseNumber + "개를 구매했습니다.");
    return purchaseNumber;
  }

  lottoClassesArray(purchaseNumber) {
    const lottoClasses = Util.getLottoClasses(purchaseNumber);
    lottoClasses.forEach((lottoClass) => lottoClass.printNumber());
    return lottoClasses;
  }

  async WinningLotto() {
    const winningNumbers = await WinningLotto.getWinningNumbers();
    const bonusNumber = await WinningLotto.getBonusNumber(winningNumbers);

    return new WinningLotto(winningNumbers, bonusNumber);
  }

  getLottosCount(lottoclasses, winningNumberClass) {
    lottoclasses.forEach((lottoClass) =>
      lottoClass.compareNumber(winningNumberClass.number)
    );
    lottoclasses.forEach((lottoClass) =>
      lottoClass.compareBonusNumber(winningNumberClass.bonusNumber)
    );
  }

  getRank(lottosClasses) {
    const rank = {};
    rank.first = lottosClasses.filter((element) => element.COUNT === 6).length;
    rank.second = lottosClasses.filter(
      (element) => element.COUNT === 5 && element.BONUS
    ).length;
    rank.third = lottosClasses.filter(
      (element) => element.COUNT === 5 && !element.BONUS
    ).length;
    rank.fourth = lottosClasses.filter((element) => element.COUNT === 4).length;
    rank.fifth = lottosClasses.filter((element) => element.COUNT === 3).length;
    return rank;
  }

  printResult(rank) {
    Console.print("3개 일치 (5,000원) - " + rank.fifth + "개");
    Console.print("4개 일치 (50,000원) - " + rank.fourth + "개");
    Console.print("5개 일치 (1,500,000원) - " + rank.third + "개");
    Console.print(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - " + rank.second + "개"
    );
    Console.print("6개 일치 (2,000,000,000원) - " + rank.first + "개");
  }

  totalPrize(rank) {
    return (
      rank.first * 2000000000 +
      rank.second * 30000000 +
      rank.third * 1500000 +
      rank.fourth * 50000 +
      rank.fifth * 5000
    );
  }

  async play() {
    const purchaseNumber = await this.purchaseNumber();
    const lottoClasses = this.lottoClassesArray(purchaseNumber);
    const winningNumberClass = await this.WinningLotto();
    this.getLottosCount(lottoClasses, winningNumberClass);
    const rank = this.getRank(lottoClasses);
    this.printResult(rank);
    const total = this.totalPrize(rank);
    const money = lottoClasses.length * 1000;
    const rate = ((total / money) * 100).toFixed(1);
    Console.print("총 수익률은 " + rate + "%입니다.");
  }
}

export default App;
