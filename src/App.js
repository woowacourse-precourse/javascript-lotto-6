import Lotto from "./Lotto.js";
import OutputView from "./View/OutputView.js";
import LottoController from "./Controller/LottoController.js";
import LottoMachine from "./Model/LottoMachine.js";
import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.lotto = new Lotto();
    this.outputView = new OutputView();
    this.lottoMachine = new LottoMachine();
    this.lottoController = new LottoController();
  }

  async play() {
    await this.startLotto();
  }

  async startLotto() {
    const numberOfLottos = await this.lottoController.handlePurchase();
    this.outputView.printLottoCounts(numberOfLottos);

    const lottoNumbersArray = this.lotto.generateLottoNumbers(numberOfLottos);
    this.outputView.printLottoNumbers(lottoNumbersArray);

    const winningNumbers = await this.lottoController.handleLottoWinningNumbers();
    Console.print(winningNumbers)
  }
}

export default App;
