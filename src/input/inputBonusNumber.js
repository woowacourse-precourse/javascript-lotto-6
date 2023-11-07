import { Console } from '@woowacourse/mission-utils';
import { BONUS_LOTTO } from '../constants.js';
import isValidBonusNumber from './isValidBonusNumber.js';

async function inputBonusNumber(winningNumbers) {
  let bonusNumber = 0;
  while (!bonusNumber) {
    const INPUT = await Console.readLineAsync(BONUS_LOTTO);
    if (isValidBonusNumber(winningNumbers, Number(INPUT))) bonusNumber = Number(INPUT);
  }
  return bonusNumber;
}

export default inputBonusNumber;
