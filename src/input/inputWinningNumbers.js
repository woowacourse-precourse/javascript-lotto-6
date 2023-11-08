import { Console } from '@woowacourse/mission-utils';
import { ANSWER_LOTTO } from '../constants.js';
import isValidWinningNumbers from './isValidWinningNumbers.js';

async function inputWinningNumbers() {
  let winningNumbers = [];
  while (winningNumbers.length !== 6) {
    const INPUT = await Console.readLineAsync(ANSWER_LOTTO);
    const INPUT_LIST = INPUT.split(',').map(Number);
    if (isValidWinningNumbers(INPUT_LIST)) winningNumbers = INPUT_LIST;
  }
  return winningNumbers;
}

export default inputWinningNumbers;
