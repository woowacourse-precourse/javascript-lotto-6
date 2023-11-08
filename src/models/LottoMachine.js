import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class LottoMachine {
  static draw(count) {
    return Array.from({ length: count }, () => {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(lottoNumbers);
    });
  }
}

export default LottoMachine;
