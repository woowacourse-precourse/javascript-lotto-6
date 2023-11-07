import View from '../View/View.js';
import Lotto from '../Model/Lotto.js';
import { Random } from '@woowacourse/mission-utils';
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
    const lottoArray = this.#getLottoNumber(countOfLotto);
    this.#view.printLottoNumbers(lottoArray);
    const goalLotto = await this.#view.getGoalNumber();
  }

  #getCountOfLotto(purchaseAmount) {
    return purchaseAmount / Constant.UNIT_OF_AMOUNT;
  }

  #getLottoNumber(countOfLotto) {
    const lottoArray = [];
    for (let i = 0; i < countOfLotto; i++) {
      const lotto = this.#getRandomNumber();
      lottoArray.push(lotto);
    }
    return lottoArray;
  }

  #getRandomNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(
      Constant.MIN_RANDOM_NUMBER,
      Constant.MAX_RANDOM_NUMBER,
      Constant.COUNT
    );
    const lotto = new Lotto(lottoNumber);
    return lotto;
  }
}

export default LottoController;
