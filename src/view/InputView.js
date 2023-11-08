import { Console } from '@woowacourse/mission-utils';
import INPUT_MESSAGE from '../constants/input';

const InputView = {
  async getLottoPurchaseAmount() {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
    return answer;
  },

  async getWinningLotto() {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.winningLotto);
    return answer;
  },

  async getBonus() {
    const answer = await Console.readLineAsync(INPUT_MESSAGE.bonus);
    return answer;
  },
};

export default InputView;
