import MoneyInput from "./view/MoneyInput.js";

class App {
  #moneyInput = new MoneyInput();

  async play() {
    await this.#moneyInput.buyMoney();
    return;
  }
}

export default App;
