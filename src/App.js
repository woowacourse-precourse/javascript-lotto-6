import getLottoAmount from './service/input/getLottoAmount.js';
import LottoGenerator from './service/LottoGenerator.js';
import display from './domain/utils/display.js';
import getWinningNumbers from './service/input/getWinningNumbers.js';
import getBonusNumber from './service/input/getBonusNumber.js';
import Lotto from './Lotto.js';

class App {
  #lottoAmount;
  #lottoGenerator;
  #lotto;
  #bonusNumber;

  constructor() {
    this.#lottoAmount = null;
    this.#lottoGenerator = null;
    this.#lotto = null;
    this.#bonusNumber = null;
  }

  async #issueLotto() {
    this.#lottoAmount = await getLottoAmount();

    this.#lottoGenerator = new LottoGenerator(this.#lottoAmount);
    this.#lottoGenerator.generateLottos();

    display.issedLottoInfo({
      count: this.#lottoGenerator.getDrawCount(),
      lottos: this.#lottoGenerator.getLottos(),
    });

    this.#drawWinningNumber();
  }

  async #drawWinningNumber() {
    const winningNumbers = await getWinningNumbers();

    this.#lotto = new Lotto(winningNumbers);

    this.#drawBonuseNumber();
  }

  async #drawBonuseNumber() {
    const bonusNumber = await getBonusNumber();

    this.#bonusNumber = bonusNumber;

    this.#displayWinningStatistics();
  }

  #displayWinningStatistics() {
    display.winningStatisticsInfo({
      lottoGenerator: this.#lottoGenerator,
      lottoNumbers: this.#lotto.getNumbers(),
      bonusNumber: this.#bonusNumber,
    });
  }

  async play() {
    this.#issueLotto();
  }
}

export default App;
