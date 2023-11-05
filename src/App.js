import createNumbers from "./controller/CreateNumbers.js";
import MoneyInput from "./view/input/MoneyInput.js";
import WinningInput from "./view/input/WinningInput.js";
import LottoGame from "./model/LottoGame.js";

class App {
  #moneyInput = new MoneyInput();
  #winningInput = new WinningInput();
  #lottoGame = new LottoGame();

  async play() {
    const money = await this.#moneyInput.buyMoney(); // 금액 입력
    const userLotto = createNumbers(money); // 금액 입력한 만큼 로또 번호 생성
    const { numbers, bonusNumber } = await this.#winningInput.winningNumbers(); // 당첨 번호, 보너스 번호 입력
    const lottoGame = new LottoGame(userLotto, numbers, bonusNumber);
    lottoGame.lottoLogic();
  }
}

export default App;
