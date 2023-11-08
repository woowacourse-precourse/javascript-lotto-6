import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../Constants/Messages.js';

const InputView = {
  async buyLotto() {
    const amount = await Console.readLineAsync(MESSAGES.buyLottoPrice);
    return amount;
  },

  async winningNumbers() {
    const winningNumbers = await Console.readLineAsync(MESSAGES.winningNumbers);
    return winningNumbers;
  },

  async bonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGES.bonusNumber);
    return bonusNumber;
  },
};

export default InputView;
