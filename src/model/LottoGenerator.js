import { Random } from '@woowacourse/mission-utils';

const LottoGenerator = {
  run(count) {
    return this.sortAscending(this.generate(count));
  },

  generate(count) {
    return Array.from({ length: count }, () => Random.pickUniqueNumbersInRange(1, 45, 6));
  },

  sortAscending(lottos) {
    return lottos.map((lotto) => lotto.sort((a, b) => a - b));
  },
};

export default LottoGenerator;
