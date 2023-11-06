import { MissionUtils } from "@woowacourse/mission-utils";
import View from "./View.js";
import Lotto from "./Lotto.js";
import LottoTickets from "./LottoTickets.js";
import WinLotto from "./WinLotto.js";
class App {
  lottoTickets;

  async play() {
    const inputMoney = await View.askInputMoney();
    const numberOfTickets = Lotto.countingLottos(inputMoney);
    await View.printLottoCount(numberOfTickets);

    const lottoTickets = new LottoTickets();
    this.lottoTickets = lottoTickets.generateLottoTickets(numberOfTickets);
    View.showTickets(this.lottoTickets);

    this.lottoTickets.forEach((ticket) => {
      new Lotto(ticket);
    });
    const result = await WinLotto.calculateEarnings(this.lottoTickets);

    MissionUtils.Console.print(View.WIN_STATISTICS_HEADER);
    View.printRewardStatistics(result);
    const returnPrint = View.printReturn(result, inputMoney);
    MissionUtils.Console.print(`총 수익률은 ${returnPrint}입니다.`);
  }
}

export default App;
