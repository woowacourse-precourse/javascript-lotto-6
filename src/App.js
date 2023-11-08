import { MissionUtils } from "@woowacourse/mission-utils";
import Util from "./classes/util.js";

const Console = MissionUtils.Console;

class App {
  static async purchaseNumber() {
    const userMoney = await Util.validateUserMoney();
    const purchaseNumber = Util.getPurchaseNumber(userMoney);
    Console.print(purchaseNumber + "개를 구매했습니다.");
    return purchaseNumber;
  }

  static lottoClassesArray(purchaseNumber) {
    const lottoClasses = Util.getLottoClasses(purchaseNumber);
    lottoClasses.forEach((lottoClass) => lottoClass.printNumber());
    return lottoClasses;
  }

  static printResult(rank) {
    Console.print("3개 일치 (5,000원) - " + rank.fifth + "개");
    Console.print("4개 일치 (50,000원) - " + rank.fourth + "개");
    Console.print("5개 일치 (1,500,000원) - " + rank.third + "개");
    Console.print(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - " + rank.second + "개"
    );
    Console.print("6개 일치 (2,000,000,000원) - " + rank.first + "개");
  }

  async play() {
    const purchaseNumber = await App.purchaseNumber();
    const lottoClasses = App.lottoClassesArray(purchaseNumber);
    const winningNumberClass = await Util.WinningLotto();
    Util.getLottosCount(lottoClasses, winningNumberClass);
    const rank = Util.getRank(lottoClasses);
    App.printResult(rank);
    const total = Util.totalPrize(rank);
    const money = lottoClasses.length * 1000;
    const rate = Util.rate(total, money);
    Console.print("총 수익률은 " + rate + "%입니다.");
  }
}

export default App;
