import { Random } from '@woowacourse/mission-utils';
class LottoGenerator {
  static generator() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }
}

export default LottoGenerator;
