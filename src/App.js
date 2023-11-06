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
    const winNumbers = await this.user.inputWinNumbers();
    const bonusNumber = await this.user.inputBonusNumber(winNumbers);
  }
}

export default App;
