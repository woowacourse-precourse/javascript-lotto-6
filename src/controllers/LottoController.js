import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoData from '../models/LottoData.js';

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    // this.lottoData;
  }

  async lottoProcess() {
    await this.inputPurchaseAmount();
    this.buyLottos();
  }

  async inputPurchaseAmount() {
    const amount = await this.inputView.purchaseAmount();
    try {
      // this.lottoData.validatePurchaseAmount(amount);
      this.lottoData = new LottoData(amount);
    } catch (error) {
      this.outputView.printError(error.message);
      return this.inputPurchaseAmount();
    }
  }

  buyLottos() {
    const { count, lottos } = this.lottoData.getLottos();
    this.outputView.printLottos(count, lottos);
  }
}

export default LottoController;
