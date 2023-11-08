import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoData from '../models/LottoData.js';
import Lotto from '../Lotto.js';

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoData = null;
  }

  async lottoProcess() {
    await this.inputPurchaseAmount();
    this.buyLottos();
    await this.inputWinningNumber();
    await this.inputBonusNumber();
    this.compareLottos();
    this.profitRate();
  }

  async inputPurchaseAmount() {
    const amount = await this.inputView.purchaseAmount();
    try {
      this.lottoData = new LottoData(amount);
      return this.lottoData;
    } catch (error) {
      this.outputView.printError(error.message);
      return this.inputPurchaseAmount();
    }
  }

  buyLottos() {
    const { count, lottos } = this.lottoData.lottoIssuance();
    this.outputView.printLottos(count, lottos);
  }

  async inputWinningNumber() {
    const winning = await this.inputView.winningNumber();
    try {
      this.lotto = new Lotto(winning.split(',').map(Number));
      return this.lotto;
    } catch (error) {
      this.outputView.printError(error.message);
      return this.inputWinningNumber();
    }
  }

  async inputBonusNumber() {
    const bonus = await this.inputView.bonusNumber();
    try {
      this.lotto.setBonusNumber(Number(bonus));
      return this.lotto;
    } catch (error) {
      this.outputView.printError(error.message);
      return this.inputBonusNumber();
    }
  }

  compareLottos() {
    this.lottoData.calculateStats(this.lotto.getWinningNumber(), this.lotto.getBonusNumber());
    this.outputView.printStats(this.lottoData.getLottoStats());
  }

  profitRate() {
    this.outputView.printProfit(this.lottoData.getProfit());
  }
}

export default LottoController;
