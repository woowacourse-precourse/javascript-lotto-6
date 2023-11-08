import OutputView from "./View/OutputView.js";
import LottoController from "./Controller/LottoController.js";
import LottoMachine from "./Model/LottoMachine.js";
import WinningLotto from "./Model/WinningLotto.js";

class App {
  constructor() {
    this.outputView = new OutputView();
    this.lottoMachine = new LottoMachine();
    this.winningLotto = new WinningLotto();
    this.lottoController = new LottoController();
  }

  async play() {
    await this.startLotto();
  }

  async startLotto() {
    const numberOfLottos = await this.lottoController.handlePurchase();
    this.outputView.printLottoCounts(numberOfLottos);

    const lottoNumbersArray = this.lottoMachine.generateLottoNumbers(numberOfLottos);
    this.outputView.printLottoNumbers(lottoNumbersArray);

    const winningNumbers = await this.lottoController.handleLottoWinningNumbers();
  
    const lottoResult = lottoNumbersArray.map(lottoNumbers => {
      return this.winningLotto.checkWinning(lottoNumbers, winningNumbers);
    })
    
    const lottoWinningResult = this.winningLotto.countAndPrintResult(lottoResult);

    const profitRates = this.lottoController.calculateProfitRates(lottoWinningResult);
    this.outputView.printProfitRates(profitRates.toFixed(1));
  }
}

export default App;
