import MESSAGES from '../Constants/Messages.js';
import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async buyLotto() {
    const amount = await Console.readLineAsync(MESSAGES.buyLottoPrice);
    return amount;
  },

  async winningNumber() {
    const winningNumber = await Console.readLineAsync(MESSAGES.winningNumber);
    return winningNumber;
  },

  async bonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGES.bonusNumber);
    return bonusNumber;
  }
}

export default InputView;
