import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_SETTING } from '../constant.js';

class Util {
  static getLottoNumberList() {
    const { min, max, length } = LOTTO_SETTING;
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(min, max, length);
    return this.ascendingSort(randomNumbers);
  }

  static ascendingSort(item) {
    const copy = [...item];
    return copy.sort((a, b) => a - b);
  }
}
export default Util;
