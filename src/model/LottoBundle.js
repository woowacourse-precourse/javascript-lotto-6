import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from '../constants/Constant.js';

class LottoBundle {
  #lottoList = [];

  #makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      RANDOM_NUMBER.minNum,
      RANDOM_NUMBER.maxNum,
      RANDOM_NUMBER.count,
    );
  }
}
