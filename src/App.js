import createNumbers from "./controller/createNumbers.js";
import MoneyInput from "./view/input/MoneyInput.js";
import WinningInput from "./view/input/WinningInput.js";
import LottoGame from "./model/LottoGame.js";

class App {
  #moneyInput = new MoneyInput();
  #winningInput = new WinningInput();

  async play() {
    const money = await this.#moneyInput.buyMoney();
    const userLotto = createNumbers(money);
    const { numbers, bonusNumber } = await this.#winningInput.winningNumbers();
    const lottoGame = new LottoGame(userLotto, numbers, bonusNumber);
    lottoGame.lottoLogic();
    return;
  }
}

export default App;
