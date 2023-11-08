import { Random } from '@woowacourse/mission-utils';
import NUMBER from '../constants/number.js';
import Lotto from '../Lotto.js';
import sortNumberArray from '../domain/utils/sortNumberArray.js';

/**
 * 입력된 금액만큼 로또를 발행한다.
 */
class LottoGenerator {
  #lottoAmount;
  #drawCount;
  #lottos;

  constructor(amount) {
    this.#lottoAmount = amount;
    this.#drawCount = 0;
    this.#lottos = new Array();
  }

  #generateSingleLotto() {
    return Random.pickUniqueNumbersInRange(
      NUMBER.minNumber,
      NUMBER.maxNumber,
      NUMBER.drawCount,
    );
  }

  #setDrawCount(amount) {
    this.#drawCount = parseInt(this.#lottoAmount / NUMBER.unitCost);
  }

  generateLottos() {
    this.#setDrawCount();

    for (let count = 0; count < this.#drawCount; count++) {
      const singleLotto = this.#generateSingleLotto();
      this.#lottos.push(sortNumberArray(singleLotto));
    }
  }

  getDrawCount() {
    return this.#drawCount;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoGenerator;
