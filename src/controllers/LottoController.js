import { Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Calculate from '../utils/Calculate.js';
import Lotto from '../models/Lotto.js';
import { CONSTANTS } from '../constants/constant.js';

class LottoController {
  #USER_MONEY;

  constructor() {
    this.INPUT_VIEW = new InputView();
    this.OUTPUT_VIEW = new OutputView();
  }

  async inputPurchaseMoney() {
    this.#USER_MONEY = await this.INPUT_VIEW.purchaseMoney();
    if (this.#USER_MONEY === CONSTANTS.IS_ERROR) {
      return this.inputPurchaseMoney();
    }
    return this.#buyLotto();
  }

  async #buyLotto() {
    const CALC_BUY = new Calculate(this.#USER_MONEY);
    this.#printLottoNumber(CALC_BUY.howManyToBuy());
  }

  async #printLottoNumber(canBuy) {
    this.OUTPUT_VIEW.userCanBuy(canBuy);
    this.#lottoGenerator(canBuy);
  }

  #lottoGenerator(canBuy) {
    if (canBuy > 0) {
      const generateNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottoNumber = new Lotto(generateNumber);
      this.OUTPUT_VIEW.userLottoNumber(lottoNumber.sortingNumber());
      this.#lottoGenerator(canBuy - 1);
    }
  }
}

export default LottoController;
