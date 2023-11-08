import { ERROR, GAME } from '../constants/Message.js';
import { STANDARD } from '../constants/Standard.js';
import { writeView } from '../view/OutputView.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoCount {
  #buyPrice;
  #buyLottoCount;
  #lottoArr;

  constructor(buyPrice) {
    this.#lottoArr = [];
    this.#buyPrice = buyPrice;
    this.validate();
    this.#getBuyLottoCount(buyPrice);
    this.#getRandomLotto();
  }

  validate() {
    this.validateNumber();
    this.validateDivide();
  }

  validateNumber() {
    if (isNaN(this.#buyPrice)) {
      throw new Error(ERROR.NUMBER);
    }
  }

  validateDivide() {
    if (this.#buyPrice % 1000 !== 0) {
      throw new Error(ERROR.DIVIDE);
    }
  }

  #getBuyLottoCount(buyPrice) {
    this.#buyLottoCount = buyPrice / 1000;
    writeView('\n' + this.#buyLottoCount + `${GAME.PRINT_BUY_COUNT}`);
  }

  #getRandomLotto() {
    for (let i = 0; i < this.#buyLottoCount; i++) {
      const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        STANDARD.LOTTO_MIN_NUMBER,
        STANDARD.LOTTO_MAX_NUMBER,
        STANDARD.LOTTO_MAX_COUNT
      );
      const lotto = new Lotto(lottoNumber).getLottoNumbers();
      this.#lottoArr.push(lotto);
      writeView('[' + lotto.join(', ') + ']');
    }
  }

  getLottoArr() {
    return this.#lottoArr;
  }

  getBuyPrice() {
    return this.#buyPrice;
  }
}

export default LottoCount;
