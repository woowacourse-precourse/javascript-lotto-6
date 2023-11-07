import { Random } from '@woowacourse/mission-utils';
import AutoLottoValidator from './AutoLottoValidator.js';
import {
  COUNT,
  DEFAULT_NUM,
  LOTTO_NUM_RANGE,
} from '../constants/conditions.js';

const { min, max, length } = LOTTO_NUM_RANGE;
const { minus } = COUNT;

const AutoLottoGenerator = {
  getLotto(purchaseAmount) {
    const lottos = [];
    let count = purchaseAmount;
    while (count !== DEFAULT_NUM) {
      lottos.push(Random.pickUniqueNumbersInRange(min, max, length));
      count -= minus;
    }
    if (AutoLottoValidator.validateAutoLotto(lottos)) this.sortLotto(lottos);

    return lottos;
  },

  sortLotto(lottos) {
    lottos.forEach((lotto) => {
      lotto.sort((a, b) => a - b);
    });
  },
};

export default AutoLottoGenerator;
