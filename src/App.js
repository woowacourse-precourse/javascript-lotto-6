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
    this.lottoList = this.computer.makeLottoList(purchaseAmount);
    const winNumber = await this.user.inputWinNumber();
  }
}

export default App;
