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

  constructor(amount) {
    this.#lottoAmount = amount;
    this.#drawCount = 0;
  }

  #setDrawCount(amount) {
    this.#drawCount = parseInt(this.#lottoAmount / NUMBER.unitCost);
  }

  #generateSingleLotto() {
    return Random.pickUniqueNumbersInRange(
      NUMBER.minNumber,
      NUMBER.maxNumber,
      NUMBER.drawCount,
    );
  }

  generateLotto() {
    this.#setDrawCount();
    const lottos = new Array();

    for (let count = 0; count < this.#drawCount; count++) {
      const singleLotto = this.#generateSingleLotto();
      lottos.push(sortNumberArray(singleLotto));
    }

    return lottos;
  }
}

export default LottoGenerator;

// const lottoGenerator = new LottoGenerator(5000);
// console.log(lottoGenerator.generateLotto());
