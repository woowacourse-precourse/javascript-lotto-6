import { Console } from '@woowacourse/mission-utils';
import { BONUS_LOTTO } from '../constants.js';
import isValidBonusNumber from './isValidBonusNumber.js';

async function inputBonusNumber(winningNumbers) {
  try {
    const INPUT = await Console.readLineAsync(BONUS_LOTTO);
    const BONUS_NUMBER = Number(INPUT);
    if (!isValidBonusNumber(winningNumbers, BONUS_NUMBER)) return 0;
    return BONUS_NUMBER;
  } catch (error) {
    throw new Error(error);
  }
}

export default inputBonusNumber;
