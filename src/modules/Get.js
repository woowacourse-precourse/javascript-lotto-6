import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

import CONSTANTS from '../constants/CONSTANTS.js';

const {
  MISS_STATE,
  BONUS_STATE,
  HIT_STATE,
  NUMBER_OF_LOTTO_NUMBERS,
  LOTTO_NUMBER_LOWER,
  LOTTO_NUMBER_UPPER,
} = CONSTANTS;

class Get {
  static randomLottoArray(numberOfLotto) {
    return new Array(numberOfLotto).fill(null).map(Get.randomLottoNumbers);
  }

  static randomLottoNumbers() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_LOWER,
        LOTTO_NUMBER_UPPER,
        NUMBER_OF_LOTTO_NUMBERS
      ).sort((a, b) => a - b)
    );
  }
}

export default Get;
