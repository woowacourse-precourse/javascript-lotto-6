import SYMBOLS from '../constants/symbols.js';
import Bonus from '../model/Bonus.js';
import Lotto from '../model/Lotto.js';
import LottoStore from '../model/LottoStore.js';
import Stats from '../model/Stats.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #purchaseAmount;

  #inputView;

  #userLottos;

  #winningNumbers;

  #bonusNumber;

  #stats;

  #lotto;

  #lottoStore;

  constructor() {
    this.#inputView = new InputView();
  }

  async start() {
    await this.#buyLottos();
    await this.#drawWinningNumbers();
    await this.#drawBonusNumber();
    await this.#analyzeLottos();
  }

  /**
   * 구입금액을 입력받고 금액에 따라 로또를 발급받는다.
   */
  async #buyLottos() {
    try {
      this.#purchaseAmount = await this.#inputView.readPurchaseAmount();
      this.#lottoStore = new LottoStore(this.#purchaseAmount);
      this.#userLottos = this.#lottoStore.getUserLottos();
      this.#printUserLottos();
    } catch (error) {
      OutputView.printError(error);
      await this.#buyLottos();
    }
  }

  /**
   * 유저가 구입한 로또 개수와 로또 번호를 출력한다.
   */
  #printUserLottos() {
    OutputView.printLottoQuantity(this.#userLottos.length);
    OutputView.printLottoNumbers(this.#userLottos);
  }

  /**
   * 유저가 구입한 로또와 비교할 당첨 번호를 뽑는다.
   */
  async #drawWinningNumbers() {
    try {
      const inputNumbers = await this.#inputView.readWinningNumbers();
      const parsedNumbers = inputNumbers.split(SYMBOLS.comma).map(Number);
      this.#lotto = new Lotto(parsedNumbers);
      this.#winningNumbers = this.#lotto.getWinningNumbers();
    } catch (error) {
      OutputView.printError(error);
      await this.#drawWinningNumbers();
    }
  }

  async #drawBonusNumber() {
    try {
      const bonusNumberInput = await this.#inputView.readBonusNumber();
      const bonusInstance = new Bonus(bonusNumberInput, this.#winningNumbers);
      this.#bonusNumber = bonusInstance.getBonusNumber();
    } catch (error) {
      OutputView.printError(error);
      await this.#drawBonusNumber();
    }
  }

  async #analyzeLottos() {
    OutputView.printResult();
    const statsInstance = new Stats(
      this.#userLottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
    this.#stats = statsInstance.getStats();
    OutputView.printStats(this.#stats);
    OutputView.printProfitRate(
      statsInstance.getProfitRate(this.#purchaseAmount),
    );
  }
}

export default LottoController;
