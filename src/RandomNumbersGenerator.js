import { Random } from '@woowacourse/mission-utils';

class LottoNumbersGenerator {
  #START_INCLUSIVE = 1;
  #END_INCLUSIVE = 45;
  #COUNT = 6;

  generate() {
    return Random.pickUniqueNumbersInRange(
      this.#START_INCLUSIVE,
      this.#END_INCLUSIVE,
      this.#COUNT,
    );
  }
}

export default LottoNumbersGenerator;
