import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER_RANGE, LOTTO_NUMBER_SIZE } from '../constants/GameSetting.js';

export function getRandomNumber() {
  return Random.pickUniqueNumbersInRange(
    LOTTO_NUMBER_RANGE.start,
    LOTTO_NUMBER_RANGE.end,
    LOTTO_NUMBER_SIZE,
  );
}
