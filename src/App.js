import createNumbers from "./controller/CreateNumbers.js";
import MoneyInput from "./view/input/MoneyInput.js";
import userLottoOutput from "./view/output/userLottoOutput.js";
import WinningInput from "./view/input/WinningInput.js";
import Lotto from "./Lotto.js";

class App {
  #moneyInput = new MoneyInput();
  #winningInput = new WinningInput();

  async play() {
    const money = await this.#moneyInput.buyMoney();
    const userLotto = createNumbers(money);
    userLottoOutput(userLotto);
    const winningNumber = await this.#winningInput.winningNumbers();
    Lotto(winningNumber);
  }
}

export default App;
