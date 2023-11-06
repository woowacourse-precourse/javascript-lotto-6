import { Console } from '@woowacourse/mission-utils';
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

export default class LottoController {
  #lottoService;

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

  async #printLottoList() {
    const createdLottoList = this.#lottoService.getLottoList();

    printLottoNumbers(createdLottoList);
    await this.#readLottoNumbers();
  }

  async #readLottoNumbers() {
    try {
      const lottoNumbers = await readLottoMainNumbers();
      await this.#readLottoBonusNumber(lottoNumbers);
    } catch (e) {
      printError(e.message);
      await this.#readLottoNumbers();
    }
  }

  async #readLottoBonusNumber(lottoNumbers) {
    try {
      const lottoBonusNumber = await readLottoBonusNumber(lottoNumbers);

      this.#compare(lottoNumbers, lottoBonusNumber);
    } catch (e) {
      printError(e.message);

      await this.#readLottoBonusNumber(lottoNumbers);
    }
  }

  #compare(lottoNumbers, lottoBonusNumber) {
    const { lottoResults, lottoAmount } = this.#lottoService.getCompareResults(
      lottoNumbers,
      lottoBonusNumber
    );
    const profit = (
      (lottoResults.prizeTotal / (lottoAmount * LOTTO_PRICE)) *
      100
    ).toFixed(PROFIT_ROUND_UP_VALUE);

    printLottoResults(lottoResults.prizeAmount, profit);
  }
}
