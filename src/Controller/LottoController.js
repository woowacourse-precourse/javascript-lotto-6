import View from '../View/View.js';
import Lotto from '../Lotto.js';
import Constant from '../Constants/Constant.js';

class LottoController {
  #view;

  constructor() {
    this.#view = View;
  }

  async play() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
    const countOfLotto = this.#getCountOfLotto(purchaseAmount);
    this.#view.printCountOfLotto(countOfLotto);
  }

  #getCountOfLotto(purchaseAmount) {
    return purchaseAmount / Constant.UNIT_OF_AMOUNT;
  }
}

export default LottoController;
