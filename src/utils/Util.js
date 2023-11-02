import { MissionUtils } from '@woowacourse/mission-utils';
import LOTTO_SETTING from '../constant.js';

class Util {
  static getLottoNumberList() {
    const { min, max, length } = LOTTO_SETTING;
    return MissionUtils.Random.pickUniqueNumbersInRange(min, max, length);
  }
}
export default Util;
