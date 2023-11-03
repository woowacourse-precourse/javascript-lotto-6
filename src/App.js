import View from "./View.js";
import Lotto from "./Lotto.js";
import LottoTickets from "./LottoTickets.js";
class App {
  lottoTickets;

  async play() {
    const inputMoney = await View.askInputMoney();
    await View.printLottoCount();
    const numberOfTickets = await new Lotto().countingLottos(inputMoney);
    const lottoTickets = new LottoTickets();
    this.lottoTickets = lottoTickets.generateLottoTickets(numberOfTickets);
    View.showTickets(this.lottoTickets);
  }
}

export default App;
