import { Console } from "@woowacourse/mission-utils";
import Computer from "./Computer.js";
import User from "./User.js";

class App {
  constructor(){
    this.user = new User();
    this.computer = new Computer();
    this.lottoList = [];
  }

  async play() {
    const purchaseAmount = await this.user.inputPurchaseAmount();
    this.computer.printPurchaseCount(purchaseAmount);

    this.lottoList = this.computer.makeLottoList();
    this.lottoList.forEach((lotto) => lotto.printConsole());

    const winNumbers = await this.user.inputWinNumbers();
    const bonusNumber = await this.user.inputBonusNumber(winNumbers);
    
    this.computer.printFinalResult(this.lottoList, winNumbers, bonusNumber, Number(purchaseAmount));
  }
}

export default App;
