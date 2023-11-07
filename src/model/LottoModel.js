import { Random } from '@woowacourse/mission-utils';
import { INIT } from '../constants/messages';

class LottoModel {
  constructor() {}

  generateLottoNumber() {
    const { min, max, count } = INIT.validNumber;
    return Random.pickUniqueNumbersInRange(min, max, count);
  }
}
