import { Console } from '@woowacourse/mission-utils';
import { PROMPT } from '../constant/constant.js';

class Input {
  static async readAsync(prompt) {
    const answer = await Console.readLineAsync(prompt);

    return answer;
  }

  static async getLottoBudget() {
    const lottoBudget = await Input.readAsync(PROMPT.lottoBudget);

    return lottoBudget;
  }

  static async getWinLotto() {
    const winLotto = await Input.readAsync(PROMPT.winLotto);

    return winLotto;
  }

  static async getBonusLotto() {
    const bonusLotto = await Input.readAsync(PROMPT.bonusLotto);

    return bonusLotto;
  }
}

export default Input;
