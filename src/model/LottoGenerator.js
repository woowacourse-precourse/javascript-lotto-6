import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants/System.js';

const LottoGenerator = {
  /**
   * @param {number} count
   * @returns {number[][]}
   */
  run(count) {
    return this.sortAscending(this.generate(count));
  },

  /**
   * @param {number} count
   * @returns  {number[][]}
   */
  generate(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(
        LOTTO.numberRangeStart,
        LOTTO.numberRangeEnd,
        LOTTO.numberCount,
      ),
    );
  },

  /**
   *
   * @param {number[][]} lottos
   * @returns {number[][]} - 오름차순으로 정렬된
   */
  sortAscending(lottos) {
    return lottos.map((lotto) => lotto.sort((a, b) => a - b));
  },
};

export default LottoGenerator;
