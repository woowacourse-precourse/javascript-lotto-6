import { MissionUtils } from '@woowacourse/mission-utils';

const MakeLottoNumber = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};

export default MakeLottoNumber;
