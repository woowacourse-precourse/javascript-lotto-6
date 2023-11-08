import { Random } from '@woowacourse/mission-utils';

import { LOTTO } from '../constants/lotto.js';

function createLottoNumbers() {
  const numbers = Random.pickUniqueNumbersInRange(
    LOTTO.range.start,
    LOTTO.range.end,
    LOTTO.length,
  );

  return numbers.sort((a, b) => a - b);
}

export default createLottoNumbers;
