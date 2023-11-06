import { MissionUtils } from '@woowacourse/mission-utils';
import { isNumber } from './validation.js';

export function parseNumber(string) {
  const parsedNumber = Number(string);
  isNumber(parsedNumber);
  return parsedNumber;
}

export function generateRandomLottoNumbers() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
}
