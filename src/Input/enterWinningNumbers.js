import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

async function enterWinningNumbers() {
  const winningNumbers = await Console.readLineAsync(message.ENTER_WINNING_NUMBERS);
  const winningNumbersArray = winningNumbers.split(',').map((item) => item.trim());
}

export default enterWinningNumbers;
