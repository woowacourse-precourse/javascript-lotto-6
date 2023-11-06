import { Console } from '@woowacourse/mission-utils';
import { BONUS_LOTTO } from '../constants.js';

async function inputBonusNumber() {
  try {
    const INPUT = await Console.readLineAsync(BONUS_LOTTO);
    const BONUS_NUMBER = Number(INPUT);
    return BONUS_NUMBER;
  } catch (error) {
    throw new Error(error);
  }
}

export default inputBonusNumber;
