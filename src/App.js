import View from "./View.js";
import Lotto from "./Lotto.js";
import LottoTickets from "./LottoTickets.js";
class App {
  lottoTickets;

  async play() {
    await View.askInputMoney();
    await View.printLottoCount();
    const numberOfTickets = await new Lotto().countingLottos();
    const lottoTickets = new LottoTickets();
    this.lottoTickets = lottoTickets.generateLottoTickets(numberOfTickets);
    await View.showTickets(this.lottoTickets);
  }
}

export default App;
