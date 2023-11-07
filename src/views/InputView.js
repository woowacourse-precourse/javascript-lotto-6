import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/Constant.js';

export const InputView = {
  async price() {
    const price = await Console.readLineAsync(MESSAGE.price);
    return Number(price);
  },
  async win() {
    const numbers = await Console.readLineAsync(MESSAGE.win);
    return numbers.split(',').map(Number);
  },
  async bonus() {
    const number = await Console.readLineAsync(MESSAGE.bonus);
    return Number(number);
  },
}