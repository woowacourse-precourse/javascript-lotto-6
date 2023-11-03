import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from './constant.js';

class Input {
  static async getLottoBudget() {
    const lottoBudget = await Console.readLineAsync(PROMPT.lottoBudget);

    return lottoBudget;
  }
}

export default Input;
