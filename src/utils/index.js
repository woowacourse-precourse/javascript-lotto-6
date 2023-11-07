import { MissionUtils } from '@woowacourse/mission-utils';

export function generateRandomLottoNumbers() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
}
