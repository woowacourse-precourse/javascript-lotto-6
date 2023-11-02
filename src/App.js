import createNumbers from "./controller/CreateNumbers.js";
import MoneyInput from "./view/input/MoneyInput.js";
import userLottoOutput from "./view/output/userLottoOutput.js";

class App {
  #moneyInput = new MoneyInput();

  async play() {
    const money = await this.#moneyInput.buyMoney();
    const userLotto = createNumbers(money);
    userLottoOutput(userLotto);
  }
}

export default App;
