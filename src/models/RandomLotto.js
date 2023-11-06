import { Random } from '@woowacourse/mission-utils';
import constant from '../constants/constant.js';

export default class RandomLotto {
  createRandom(quantity) {
    const randomLottos = Array.from({ length: quantity }, () =>
      Random.pickUniqueNumbersInRange(
        constant.MINIMUM,
        constant.MAXIMUM,
        constant.COUNT,
      ),
    );
    const sortedLottos = randomLottos.map((lotto) =>
      lotto.sort((a, b) => a - b),
    );
    return sortedLottos;
  }
}
