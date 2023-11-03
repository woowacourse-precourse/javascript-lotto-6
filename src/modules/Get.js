import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

class Get {
  static randomLottoArray(numberOfLotto) {
    return new Array(numberOfLotto)
      .fill(null)
      .map(() => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }
}

export default Get;
