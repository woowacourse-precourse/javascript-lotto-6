import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

import validateWinningNumbers from '../Validation/validateWinningNumbers.js';

async function enterWinningNumbers() {
  const winningNumbers = await Console.readLineAsync(message.ENTER_WINNING_NUMBERS);
  const winningNumbersArray = winningNumbers.split(',').map((item) => item.trim());

  if (validateWinningNumbers(winningNumbersArray)) {
    return winningNumbersArray;
  }

  throw new Error(message.ERROR);
}

export default enterWinningNumbers;
