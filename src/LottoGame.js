import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LOTTO_INFO from './constants/lottoInfo.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class LottoGame {
  #purchaseAmount;
  #lottoList;
  #winningNumbers;
  #bonusNumber;
  #statistics;

  async play() {
    await this.inputPurchaseAmount();
    OutputView.printNewLine();
    this.purchaseLotto();
    OutputView.printNewLine();
    await this.inputWinningNumbers();
    OutputView.printNewLine();
    await this.inputBonusNumber();
    OutputView.printNewLine();
    this.outputStatistics();
    this.outputTotalProfitRate();
  }

  async inputPurchaseAmount() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
  }

  purchaseLotto() {
    const lottoCount = this.#purchaseAmount / LOTTO_INFO.purchase.unit;
    OutputView.printPurchaseLottoCount(lottoCount);

    this.#lottoList = Array.from({ length: lottoCount }, () => {
      const randomLottoNumbers = LottoGame.getRandomLottoNumbers();
      OutputView.printLottoNumbers(randomLottoNumbers);

      return new Lotto(randomLottoNumbers);
    });
  }

  static getRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_INFO.lottoNumber.min,
      LOTTO_INFO.lottoNumber.max,
      LOTTO_INFO.lottoNumber.count,
    );
  }

  async inputWinningNumbers() {
    this.#winningNumbers = await InputView.readWinningNumbers();
  }

  async inputBonusNumber() {
    this.#bonusNumber = await InputView.readBonusNumber();
  }

  outputStatistics() {
    const results = this.caculateStatistics();
    OutputView.printStatistics(results);
  }

  caculateStatistics() {
    this.#statistics = this.#lottoList.reduce(
      (acc, lotto) => {
        const rank = lotto.getRank(this.#winningNumbers, this.#bonusNumber);

        if (rank) {
          acc[rank - 1] += 1;
        }
        return acc;
      },
      [0, 0, 0, 0, 0],
    );

    return this.#statistics;
  }

  outputTotalProfitRate() {
    const totalProfitRate = this.caculateTotalProfitRate();
    OutputView.printTotalProfitRate(totalProfitRate);
  }

  caculateTotalProfitRate() {
    const totalAmount =
      2000000000 * this.#statistics[0] +
      30000000 * this.#statistics[1] +
      1500000 * this.#statistics[2] +
      50000 * this.#statistics[3] +
      5000 * this.#statistics[4];

    return ((totalAmount / this.#purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoGame;
