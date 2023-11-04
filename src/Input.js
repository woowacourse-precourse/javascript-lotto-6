import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from './constant.js';

class Input {
  static async getLottoBudget() {
    const lottoBudget = await Console.readLineAsync(PROMPT.lottoBudget);

    return lottoBudget;
  }

  static async getWinLotto() {
    const winLotto = await Console.readLineAsync(PROMPT.winLotto);

    return winLotto;
  }

  static async getBonusLotto() {
    const bonusLotto = await Console.readLineAsync(PROMPT.bonusLotto);

    return bonusLotto;
  }
}

export default Input;
