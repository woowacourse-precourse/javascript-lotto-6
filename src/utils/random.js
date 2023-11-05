import { RANDOM } from '../constant/index.js';
import { Random } from '@woowacourse/mission-utils';

function createLottoNumber() {
  return Random.pickUniqueNumbersInRange(
    RANDOM.START_RANGE,
    RANDOM.END_RANGE,
    RANDOM.SIX_NUMBERS
  );
}

export default createLottoNumber;
