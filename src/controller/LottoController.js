import {
  LOTTO_PRICE,
  PROFIT_ROUND_UP_VALUE,
} from '../constants/LottoOption.js';
import LottoService from '../service/LottoService.js';
import {
  readLottoBonusNumber,
  readLottoMainNumbers,
  readLottoSeedMoney,
} from '../view/InputView.js';
import {
  printError,
  printLottoNumbers,
  printLottoResults,
} from '../view/OutputView.js';
import Lotto from '../Lotto.js';
import BonusLotto from '../model/BonusLotto.js';

export default class LottoController {
  /**
   * @private
   * @type {LottoService}
   */
  #lottoService;

  /**
   * @private
   * @type {Lotto}
   */
  #lotto;

  /**
   * @private
   * @type {BonusLotto}
   */
  #bonusLotto;

  /**
   * @public
   */
  async run() {
    try {
      const lottoSeedMoney = await readLottoSeedMoney();

      this.#lottoService = new LottoService(lottoSeedMoney);
      await this.#printLottoList();
    } catch (e) {
      printError(e.message);
      await this.run();
    }
  }

  /**
   * @private
   * @async
   */
  async #printLottoList() {
    const createdLottoList = this.#lottoService.getLottoList();

    printLottoNumbers(createdLottoList);
    await this.#readLottoNumbers();
  }

  /**
   * @private
   * @asnyc
   */
  async #readLottoNumbers() {
    try {
      const lottoNumbers = await readLottoMainNumbers();

      this.#lotto = new Lotto(lottoNumbers);
      await this.#readLottoBonusNumber();
    } catch (e) {
      printError(e.message);
      await this.#readLottoNumbers();
    }
  }

  /**
   * @private
   * @async
   */
  async #readLottoBonusNumber() {
    try {
      const lottoBonusNumber = await readLottoBonusNumber();

      this.#bonusLotto = new BonusLotto(
        this.#lotto.getLottoNumbers(),
        lottoBonusNumber
      );
      this.#compare();
    } catch (e) {
      printError(e.message);
      await this.#readLottoBonusNumber();
    }
  }

  /**
   * @private
   */
  #compare() {
    const { lottoResults, lottoAmount } = this.#lottoService.getCompareResults(
      this.#lotto.getLottoNumbers(),
      this.#bonusLotto.getBonusLottoNumber()
    );
    const profit = (
      (lottoResults.prizeTotal / (lottoAmount * LOTTO_PRICE)) *
      100
    ).toFixed(PROFIT_ROUND_UP_VALUE);

    printLottoResults(lottoResults.prizeAmount, profit);
  }
}
