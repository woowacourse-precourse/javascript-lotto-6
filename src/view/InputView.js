import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const InputView = Object.freeze({
  async readLine(query) {
    const answer = await Console.readLineAsync(query);
    return answer;
  },

  async readPurchaseMoney() {
    const answer = await InputView.readLine(MESSAGES.readPurchaseMoney);
    return answer;
  },

  async readWinningNumbers() {
    const answer = await InputView.readLine(MESSAGES.readPurchaseMoney);
    return answer;
  },
});

export default InputView;
