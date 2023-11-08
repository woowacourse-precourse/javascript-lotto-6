import { Console } from '@woowacourse/mission-utils';
import enterWinningNumbers from './enterWinningNumbers.js';

function tryEnterWinningNumbers() {
  let winningNumbersArray;

  async function tryEnter() {
    try {
      winningNumbersArray = await enterWinningNumbers();
      return winningNumbersArray;
    } catch (e) {
      Console.print(e.message);
      return tryEnter();
    }
  }

  return tryEnter();
}

export default tryEnterWinningNumbers;
