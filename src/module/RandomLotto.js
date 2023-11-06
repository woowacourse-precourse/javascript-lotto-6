import { MissionUtils } from '@woowacourse/mission-utils';

const purchasedLottoArray = count => {
  const lottoArray = [];
  for (let i = 0; i < count; i += 1) {
    lottoArray.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  return lottoArray;
};

export default purchasedLottoArray;
