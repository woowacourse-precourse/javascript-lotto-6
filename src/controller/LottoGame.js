import InputView from '../view/InputView.js';
import Validator from '../validator/Validator.js';
import { CONSTANT, SYMBOL } from '../constants/Constant.js';
import LottoBundle from '../model/LottoBundle.js';
import OutputView from '../view/OutputView.js';

class LottoGame {
  #lottoBundle;

  async startGame() {
    const lottoCount = await this.#getAmountInput();

    this.#lottoBundle = new LottoBundle();
    this.#lottoBundle.buyLottos(lottoCount);
    OutputView.printLottoNumbers(lottoCount, this.#lottoBundle.getTotalLottoNumberString());

    const winningNumbers = await this.#getWinningNumbersInput();
    const bonusNumber = await this.#getBonusNumberInput();
  }

  async #getAmountInput() {
    try {
      const amount = await InputView.readAmount();
      Validator.validateAmount(amount);

      return this.#getLottoCount(amount);
    } catch (error) {
      OutputView.printMessage(error.message);

      return this.#getAmountInput();
    }
  }

  #getLottoCount(amount) {
    return amount / CONSTANT.amountUnit;
  }

  async #getWinningNumbersInput() {
    try {
      const winningNumbers = await InputView.readWinningNumbers();
      const splitWinningNumbers = this.#getSplitWinningNumbers(winningNumbers);

      return new Lotto(splitWinningNumbers);
    } catch (error) {
      OutputView.printMessage(error.message);

      return this.#getWinningNumbersInput();
    }
  }

  #getSplitWinningNumbers(winningNumbers) {
    return winningNumbers.split(SYMBOL.comma).map((number) => number.trim());
  }

  async #getBonusNumberInput() {
    const bonusNumber = await InputView.readBonusNumber();
  }
}

export default LottoGame;
