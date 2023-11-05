import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from './constants/lottoGame.js';

const RandomNumbers = {
  create() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.LENGTH
    );
  },
};

export default RandomNumbers;
