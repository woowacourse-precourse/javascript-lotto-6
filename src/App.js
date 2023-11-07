import LottoSeller from "./LottoSeller.js";
import LottoManager from "./LottoManager.js";
import ResultBoard from "./ResultBoard.js";

class App {
  constructor() {
    this.lottoTickets = null;
  }

  async play() {
    const lottoSeller = new LottoSeller();
    await lottoSeller.buyLotto();
    this.lottoTickets = lottoSeller.lottoTickets;

    const lottoManager = new LottoManager(this.lottoTickets);
    lottoManager.makeLottoAndPrint();
    const lotto = await lottoManager.runLottoWithNumbers();

    const resultBoard = new ResultBoard(lottoManager.MyLottoNumbers);
    resultBoard.decideWinning(lotto.winningNumbers, lottoManager.BonusNumber);
    resultBoard.printResultTable();
    resultBoard.calculateEarning(this.lottoTickets);
  }
}

const app = new App();
app.play();

export default App;
