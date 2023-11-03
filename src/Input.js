import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from './constant.js';
import Validate from './Validate.js';

class Input {
  static async getLottoBudget() {
    const lottoBudget = await Console.readLineAsync(PROMPT.lottoBudget);
    Validate.checkLottoBudget(lottoBudget);

    return lottoBudget;
  }
}

export default Input;
