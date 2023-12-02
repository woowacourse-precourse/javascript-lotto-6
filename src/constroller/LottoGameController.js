import InputView from '../View/InputView.js';
import { BASE_AMOUNT } from '../constant/constant.js';
import Lotto from '../Lotto.js';
import { SEPARATOR } from '../constant/message.js';
import WinningNumbers from '../model/WinningNumbers.js';
import OutputView from '../View/OutputView.js';
import LottoBundle from '../model/LottoBundle.js';
import LottoStatisticsManager from '../model/LottoStatisticsManager.js';
import Validator from '../validator/Validator.js';

class LottoGameController {
  async startGame() {
    const purchaseQuantity = await this.handleException(() => this.#getPurchaseQuantity());
    OutputView.printPurchaseQuantity(purchaseQuantity);

    const lottoBundle = new LottoBundle(purchaseQuantity);
    OutputView.printLottoNumbers(lottoBundle.getNumberList());

    const winningLotto = await this.handleException(() => this.#getWinningLotto());
    const winningNumbers = await this.handleException(() => this.#getWinningNumber(winningLotto));

    this.#generateStatisticsReport(lottoBundle, winningNumbers);
  }

  #generateStatisticsReport(lottoBundle, winningNumbers) {
    const lottoStatistics = new LottoStatisticsManager(lottoBundle, winningNumbers);
    lottoStatistics.calculateRanks();

    OutputView.printRankCounts(lottoStatistics.getRanks());
    OutputView.printProfitRate(lottoStatistics.getProfitRate());
  }

  async handleException(callback) {
    while (true) {
      try {
        return await callback();
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  async #getPurchaseQuantity() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(purchaseAmount);

    return Number(purchaseAmount) / BASE_AMOUNT;
  }

  async #getWinningLotto() {
    const winningLottoNumbers = await InputView.readWinningLotto();
    const splitNumbers = this.#splitNumbers(winningLottoNumbers);

    return new Lotto(splitNumbers);
  }

  async #getWinningNumber(winningLotto) {
    const bonusNumber = await InputView.readBonusNumber();

    return new WinningNumbers(winningLotto, Number(bonusNumber));
  }

  #splitNumbers(numbers) {
    return numbers.split(SEPARATOR).map((number) => Number(number.trim()));
  }
}
export default LottoGameController;
