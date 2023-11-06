import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants/Constant.js';
import Lotto from './Lotto.js';

export async function inputWinningNumber() {
  try {
    const userInputNumber = await Console.readLineAsync(MESSAGE.enterWinningNumber);
    const numbers = userInputNumber.split(',');
    return new Lotto(numbers);
  } catch (error) {
    Console.print(error.message);
    return inputWinningNumber();
  }
}
