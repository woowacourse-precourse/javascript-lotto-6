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
    const resultWinNum = await View.askWinningNum();
    const resultBonusNum = await View.askBonusNum();
    const winCount = new WinLotto(
      resultWinNum,
      resultBonusNum,
      this.lottoTickets
    );
    const winResults = winCount.compareNumbers();
  }
}

export default App;
