import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import Computer from "./Computer.js";

class App {
  async play() {
    const purchaseAmount = await User.inputLottoPurchaseAmout();
    const winningNumber = await User.inputWinningNumber();
    const bonusNumber = await User.inputBonusNumber();
    const lottoNumber = winningNumber + ',' + bonusNumber;

    const purchaseNumber = Computer.purchaseList(purchaseAmount);
    Console.print(`${purchaseNumber}개를 구매했습니다.`);
    const lottoList = Computer.randomNumberList(purchaseNumber);
    Computer.lotto (lottoNumber,lottoList);
  }
}

export default App;