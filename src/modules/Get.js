import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

class Get {
  static randomLottoArray(numberOfLotto) {
    return new Array(numberOfLotto).fill(null).map(Get.randomLottoNumbers);
  }

  static randomLottoNumbers() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
    );
  }
}

export default Get;
