import createNumbers from "./controller/CreateNumbers.js";
import MoneyInput from "./view/input/MoneyInput.js";
import WinningInput from "./view/input/WinningInput.js";
import LottoGame from "./model/LottoGame.js";
import Lotto from "./model/Lotto.js";
class App {
  #moneyInput = new MoneyInput();
  #winningInput = new WinningInput();

  async play() {
    const money = await this.#moneyInput.buyMoney();
    const userLotto = createNumbers(money);
    const winning = await this.#winningInput.winningNumbers();
    const lotto = new Lotto(winning);
    const [winningNumbers, bonusNumber] = await lotto.bonus();
    const lottoGame = new LottoGame(userLotto, winningNumbers, bonusNumber);
    lottoGame.lottoLogic();
  }
}

export default App;
