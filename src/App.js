import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import WinningLotto from "./classes/WinningLotto.js";

const Console = MissionUtils.Console;

class App {
  async intro() {
    const userMoney = await Lotto.validateUserMoney();
    const purchaseNumber = userMoney / 1000;
    Console.print(purchaseNumber + "개를 구매했습니다.");
    const lottoArray = Array(purchaseNumber)
      .fill()
      .map(() => Lotto.createNumber());
    const lottoClasses = lottoArray.map((lotto) => new Lotto(lotto));
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

  async play() {
  }
}

export default App;
