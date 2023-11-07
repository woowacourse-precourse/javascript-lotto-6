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

  async play() {
  }
}

export default App;
