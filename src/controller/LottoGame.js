import InputView from '../view/InputView.js';
import AmountValidator from '../validator/AmountValidator.js';
import { CONSTANT } from '../constants/Constant.js';
import LottoBundle from '../model/LottoBundle.js';
import OutputView from '../view/OutputView.js';

class LottoGame {
  #lottoBundle;

  async startGame() {
    const amount = await this.#getAmountInput();
    const lottoCount = this.#getLottoCount(amount);

    this.#lottoBundle = new LottoBundle();
    this.#lottoBundle.buyLottos(lottoCount);
    OutputView.printLottoNumbers(lottoCount, this.#lottoBundle.getTotalLottoNumberString());
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
