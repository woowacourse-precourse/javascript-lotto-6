import { Console } from '@woowacourse/mission-utils';
import Validate from '../util/Validate.js';
import gameMessage from '../constants/gameMessages.js';

const InputView = {
  async money() {
    const inputMoney = await Console.readLineAsync(gameMessage.INPUT.MONEY);
    try {
      Validate.money(inputMoney);
    } catch (error) {
      Console.print(error.message);
      return InputView.money();
    }
    return inputMoney;
  },

  async winningNumbers() {
    const inputWinning = await Console.readLineAsync(gameMessage.INPUT.WINNING);
    Validate.notNull(inputWinning);
    return inputWinning;
  },
};

export default InputView;
