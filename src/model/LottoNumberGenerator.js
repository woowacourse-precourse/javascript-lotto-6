import { Random } from '@woowacourse/mission-utils';

const LottoNumberGenerator = {
  run(count) {
    return this.sortAscending(this.generate(count));
  },

  generate(count) {
    return Array.from({ length: count }, () => {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      return lotto;
    });
  },

  sortAscending(lottos) {
    return lottos.map((lotto) => lotto.sort((a, b) => a - b));
  },
};

export default LottoNumberGenerator;
