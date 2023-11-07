import SYMBOLS from '../constants/symbols.js';
import Bonus from '../model/Bonus.js';
import Lotto from '../model/Lotto.js';
import LottoStore from '../model/LottoStore.js';
import Statistics from '../model/Statistics.js';
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

  #bonus;

  #lottoStore;

  #statistics;

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

  /**
   * 2등과 3등을 구분할 보너스 번호를 뽑는다.
   */
  async #drawBonusNumber() {
    try {
      const inputNumber = await this.#inputView.readBonusNumber();
      this.#bonus = new Bonus(inputNumber, this.#winningNumbers);
      this.#bonusNumber = this.#bonus.getBonusNumber();
    } catch (error) {
      OutputView.printError(error);
      await this.#drawBonusNumber();
    }
  }

  async #analyzeLottos() {
    OutputView.printResult();
    this.#statistics = new Statistics(
      this.#userLottos,
      this.#winningNumbers,
      this.#bonusNumber,
    );
    this.#stats = this.#statistics.getStats();
    OutputView.printStats(this.#stats);
    OutputView.printProfitRate(
      this.#statistics.getProfitRate(this.#purchaseAmount),
    );
  }
}

export default LottoController;
