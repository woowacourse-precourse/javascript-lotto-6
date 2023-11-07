import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/System.js';

const LottoGenerator = {
  run(count) {
    return this.sortAscending(this.generate(count));
  },

  generate(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(
        LOTTO.numberRangeStart,
        LOTTO.numberRangeEnd,
        LOTTO.numberCount,
      ),
    );
  },

  sortAscending(lottos) {
    return lottos.map((lotto) => lotto.sort((a, b) => a - b));
  },
};

export default LottoGenerator;
