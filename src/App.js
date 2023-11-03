import createNumbers from "./controller/CreateNumbers.js";
import MoneyInput from "./view/input/MoneyInput.js";
import WinningInput from "./view/input/WinningInput.js";
import BonusInput from "./view/input/BonusInput.js";
import LottoGame from "./model/LottoGame.js";

class App {
  #moneyInput = new MoneyInput();
  #winningInput = new WinningInput();
  #bonusInput = new BonusInput();

  async play() {
    const money = await this.#moneyInput.buyMoney();
    const userLotto = createNumbers(money);
    const winningNumber = await this.#winningInput.winningNumbers();
    const bonusNumber = await this.#bonusInput.bonusNumber();
    const lotto = new LottoGame(userLotto, winningNumber, bonusNumber);
    lotto.lottoLogic();
  }
}

export default App;
