import { Random } from '@woowacourse/mission-utils';
import AutoLottoValidator from './AutoLottoValidator.js';

export default function autoLottoGenerator(lottoCount) {
  const lottos = [];
  let count = lottoCount;
  while (count !== 0) {
    lottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    count -= 1;
  }
  if (AutoLottoValidator.validateAutoLotto(lottos)) {
    lottos.forEach((lotto) => {
      lotto.sort((a, b) => a - b);
    });
    return lottos;
  }
}
