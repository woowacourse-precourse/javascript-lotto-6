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
import { printLottoNumbers, printLottoResults } from '../view/OutputView.js';

export default class LottoController {
  #lottoService;

  async run() {
    const lottoSeedMoney = await readLottoSeedMoney();
    this.#lottoService = new LottoService(lottoSeedMoney);
    this.#printLottoList();
  }

  async #printLottoList() {
    const createdLottoList = this.#lottoService.getLottoList();
    printLottoNumbers(createdLottoList);
    await this.#readLottoNumbers();
  }

  async #readLottoNumbers() {
    const lottoNumbers = await readLottoMainNumbers();
    const lottoBonusNumber = await readLottoBonusNumber();

    this.#compare(lottoNumbers, lottoBonusNumber);
  }

  #compare(lottoNumbers, lottoBonusNumber) {
    const { lottoResults, lottoAmount } = this.#lottoService.getCompareResults(
      lottoNumbers,
      lottoBonusNumber
    );
    const profit = (
      lottoResults.prizeTotal /
      (lottoAmount * LOTTO_PRICE)
    ).toFixed(PROFIT_ROUND_UP_VALUE);

    printLottoResults(lottoResults.prizeAmount, profit);
  }
}
