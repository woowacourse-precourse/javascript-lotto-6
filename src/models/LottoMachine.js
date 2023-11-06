import { Random } from '@woowacourse/mission-utils';
import LOTTO from '../constants/AboutLotto.js';

class LottoMachine {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  static createLotto() {
    const { MIN_NUMBER, MAX_NUMBER, NUMBER_OF_NUMBERS } = LOTTO;
    return Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      NUMBER_OF_NUMBERS
    ).sort((x, y) => x - y);
  }
}

export default LottoMachine;
