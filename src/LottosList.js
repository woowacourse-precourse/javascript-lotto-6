import { Random } from '@woowacourse/mission-utils';
import { num } from './Constants.js';

import Lotto from './Lotto.js';

class LottosList {
  #lottosList = [];

  constructor(purchaseAmount) {}

  produceNewLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      num.LOTTO_LOWER_LIMIT,
      num.LOTTO_UPPER_LIMIT,
      num.LOTTO_NUMBERS_QUANTITY
    );

    return new Lotto(numbers);
  }
}

export default LottosList;
