import { MissionUtils } from '@woowacourse/mission-utils';
import NUMBER from '../constants/Number.js';

const LottoMaker = {
  generate() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      NUMBER.lottoStart,
      NUMBER.lottoEnd,
      NUMBER.lottoCount,
    );
  },
};

export default LottoMaker;
