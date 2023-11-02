import InputView from '../view/InputView.js';
import AmountValidator from '../validator/AmountValidator.js';
import { CONSTANT } from '../constants/Constant.js';

class LottoGame {
  async startGame() {
    const amount = await this.#getAmountInput();
    const lottoCount = this.#getLottoCount(amount);
  }

  async #getAmountInput() {
    const amount = await InputView.inputAmount();
    this.#validateAmountInput(amount);

    return amount;
  }

  #validateAmountInput(amount) {
    AmountValidator.checkIsNegative(amount);
    AmountValidator.checkIsNotInUnit(amount);
  }

  #getLottoCount(amount) {
    return amount / CONSTANT.amountUnit;
  }
}

export default LottoGame;
