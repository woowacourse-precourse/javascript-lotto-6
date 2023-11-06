import { MissionUtils } from '@woowacourse/mission-utils';
import { validateNumber, isNumber } from './validation.js';

export function parseNumbers(string) {
  const lottoNumbers = string.split(',').map(Number);
  lottoNumbers.forEach(validateNumber);
  return lottoNumbers;
}

export function parseNumber(string) {
  const parsedNumber = Number(string);
  isNumber(parsedNumber);
  return parsedNumber;
}

export function generateRandomLottoNumbers() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
}
