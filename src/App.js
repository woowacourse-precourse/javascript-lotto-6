import { Console } from "@woowacourse/mission-utils";
import View from "./View.js";
import User from "./User.js";
import LottoMachine from "./LottoMachine.js";

class App {
  async play() {
    const view = new View();
    const amount = await view.getLottoPurchaseAmount();
    const user = new User(amount);
    user.createLottos();
    user.printLottos();
    const winningNumbers = await view.getLottoWinningNumbers();
    const bonusNumber = await view.getLottoBonusNumber(winningNumbers);
    const lottoMachine = new LottoMachine(winningNumbers, bonusNumber);
    const myLottoRanks = lottoMachine.getLottoRanks(user.myLottos);
    const rankCounts = lottoMachine.getResultRankCounts(myLottoRanks);
    const profitRate = lottoMachine.getProfitRate(myLottoRanks);
    view.getLottoResult(rankCounts, profitRate);
  }
}

export default App;
