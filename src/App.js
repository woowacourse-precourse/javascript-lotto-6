import Input from "./utils/Input.js";
import Output from "./utils/Output.js";
import Lottos from "./Lottos.js";
import Statistics from "./Statistics.js";
import LOTTO_RULE from "./constant/LottoRule.js";

class App {
  async play() {
    const purchaseAmount = await Input.getPurchaseAmount();
    const ticketCount = purchaseAmount / LOTTO_RULE.MONEY_UNIT;

    Output.printTicketCount(ticketCount);
    const lottos = new Lottos(ticketCount);

    const winningNumbers = await Input.getWinningNumbers();
    const bonusNumber = await Input.getBonusNumber(winningNumbers);

    const results = lottos.calculateResults(winningNumbers, bonusNumber);
    const statistics = new Statistics(results);

    const profitRate = statistics.calculateProfitRate(purchaseAmount);
    Output.printProfitRate(profitRate);
  }
}

export default App;
