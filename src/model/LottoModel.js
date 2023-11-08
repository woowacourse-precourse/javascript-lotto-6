import { MissionUtils } from '@woowacourse/mission-utils';
import { RANDOM } from '../constants/constants.js';

class LottoModel {
  #count;

  constructor(count) {
    this.#count = count;
  }

  generateLottoNumbers() {
    const lottoNumbers = [];
    for (let i = 0; i < this.#count; i += 1) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(
        RANDOM.MIN,
        RANDOM.MAX,
        RANDOM.COUNT,
      );
      number.sort((a, b) => a - b);
      lottoNumbers.push(number);
    }
    return lottoNumbers;
  }
}

export default LottoModel;
