import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Lotto.js';

const InputView = {
  readMoney: async () => {
    const answer = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
    return answer;
  },
};

export default InputView;
