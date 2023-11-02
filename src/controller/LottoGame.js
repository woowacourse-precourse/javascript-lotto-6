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
    const amount = await InputView.readAmount();
    this.#validateAmountInput(amount);
    const count = this.#getLottoCount(amount);

    return count;
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
