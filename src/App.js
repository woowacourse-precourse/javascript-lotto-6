import createNumbers from "./controller/CreateNumbers.js";
import MoneyInput from "./view/MoneyInput.js";

class App {
  #moneyInput = new MoneyInput();

  async play() {
    const money = await this.#moneyInput.buyMoney();
    const userLotto = createNumbers(money);
  }
}

export default App;
