import { MissionUtils } from '@woowacourse/mission-utils';

const LottoMaker = {
  generate() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  },
};

export default LottoMaker;
