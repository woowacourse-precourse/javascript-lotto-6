import LottoController from "./Controller/LottoController.js";

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.startLotto();
  }

  async startLotto() {
    const numberOfLottos = this.lottoController.handlePurchase();
    this.outputView.printLottoCounts(numberOfLottos);

    const lottoNumbersArray = this.lotto.generateLottoNumbers(numberOfLottos);
    this.outputView.printLottos(lottoNumbersArray);
  }
}

export default App;
