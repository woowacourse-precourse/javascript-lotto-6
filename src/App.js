import { MissionUtils } from "@woowacourse/mission-utils";
import Util from "./classes/Util.js";
import { inputMessage, resultMessage, rateMessage } from "./Constant.js";

const Console = MissionUtils.Console;

class App {
  static async purchaseNumber() {
    const userMoney = await Util.validateUserMoney();
    const purchaseNumber = Util.getPurchaseNumber(userMoney);
    Console.print(purchaseNumber + inputMessage.PURCHASENUMBER);
    return purchaseNumber;
  }

  static lottoClassesArray(purchaseNumber) {
    const lottoClasses = Util.getLottoClasses(purchaseNumber);
    lottoClasses.forEach((lottoClass) => lottoClass.printNumber());
    return lottoClasses;
  }

  static printResult(rank) {
    Console.print(resultMessage.FIFTH + rank.fifth + resultMessage.END);
    Console.print(resultMessage.FOURTH + rank.fourth + resultMessage.END);
    Console.print(resultMessage.THIRD + rank.third + resultMessage.END);
    Console.print(
      resultMessage.SECOND + rank.second + resultMessage.END
    );
    Console.print(resultMessage.FIRST + rank.first + resultMessage.END);
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
    Console.print(rateMessage.START + rate + rateMessage.END);
  }
}

export default App;
