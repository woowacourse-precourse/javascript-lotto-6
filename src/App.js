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

  async play() {
  }
}

export default App;
