import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default function excutionNumber(number) {
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(
      new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)).numbers,
    );
  }
  return result;
}
