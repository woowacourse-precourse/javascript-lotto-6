import validateWinningNumbers from '../validations/validateWinningNumbers.js';
import { INPUT_MESSAGES } from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

const getWinningNumbers = async () => {
  let flag = false;
  let winningNumbers;
  while (!flag) {
    try {
      winningNumbers = (await Console.readLineAsync(INPUT_MESSAGES.winningNumbers)).split(',').map((number) => Number(number.trim()));
      flag = validateWinningNumbers(winningNumbers);
    } catch (e) {
      Console.print(e.message);
    }
  }
  winningNumbers.sort((a, b) => a - b);

  return winningNumbers;
};

export default getWinningNumbers;
