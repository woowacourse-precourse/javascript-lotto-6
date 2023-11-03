import InputView from '../view/InputView.js';
import AmountValidator from '../validator/AmountValidator.js';
import { CONSTANT } from '../constants/Constant.js';
import LottoBundle from '../model/LottoBundle.js';
import OutputView from '../view/OutputView.js';

class LottoGame {
  #lottoBundle;

  async startGame() {
    const lottoCount = await this.#getAmountInput();

    this.#lottoBundle = new LottoBundle();
    this.#lottoBundle.buyLottos(lottoCount);
    OutputView.printLottoNumbers(lottoCount, this.#lottoBundle.getTotalLottoNumberString());
  }

  async #getAmountInput() {
    try {
      const amount = await InputView.readAmount();
      this.#validateAmountInput(amount);
      return this.#getLottoCount(amount);
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.#getAmountInput();
    }
  }

  #validateAmountInput(amount) {
    AmountValidator.checkIsNotNumber(amount);
    AmountValidator.checkIsNegative(amount);
    AmountValidator.checkIsNotInUnit(amount);
  }

  #getLottoCount(amount) {
    return amount / CONSTANT.amountUnit;
  }

  async #getWinningNumbersInput() {
    const winningNumbers = await InputView.readWinningNumbers();
  }
}

export default LottoGame;
