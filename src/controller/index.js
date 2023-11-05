import Bonus from '../Bonus.js';
import Lotto from '../Lotto.js';
import LottoModel from '../model/index.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #lottoModel;

  constructor() {
    this.#lottoModel = new LottoModel();
  }

  async startGame() {
    const userLottos = await this.#purchaseLotto();

    OutputView.printUserLottos(userLottos);

    const { winningNumbers, bonusNumber } = await this.#drawLottery();
  }

  async #purchaseLotto() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const userLottos = this.#lottoModel.generateLotto(purchaseAmount);

      return userLottos;
    } catch (error) {
      OutputView.print(error.message);

      const userLottos = await this.#purchaseLotto();

      return userLottos;
    }
  }

  async #drawLottery() {
    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);

    return { winningNumbers, bonusNumber };
  }

  async #getWinningNumbers() {
    try {
      const winningNumbers = await InputView.readLottoWinningNumbers();

      return Lotto.of(winningNumbers.split(','));
    } catch (error) {
      OutputView.print(error.message);

      const winningNumbers = await this.#getWinningNumbers();

      return winningNumbers;
    }
  }

  async #getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      const bonus = Bonus.of(bonusNumber);

      winningNumbers.checkUniqueNumber(bonus.getBonusNumber());

      return bonus;
    } catch (error) {
      OutputView.print(error.message);
      const bonusNumber = await this.#getBonusNumber(winningNumbers);

      return bonusNumber;
    }
  }
}

export default LottoController;
