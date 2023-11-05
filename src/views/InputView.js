import { Console } from '@woowacourse/mission-utils';
import gameMessage from '../constants/gameMessages.js';

const InputView = {
  async money() {
    const inputValue = await Console.readLineAsync(gameMessage.INPUT.MONEY);
    return inputValue;
  },
};

export default InputView;
