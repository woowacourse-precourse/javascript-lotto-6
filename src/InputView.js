import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';

const InputView = {
  readMoney: async () => {
    const answer = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
    return answer;
  },
  readNumbers: async () => {
    const answer = await Console.readLineAsync(MESSAGE.INPUT_NUMBERS);
    return answer.split(',').map((number) => Number(number));
  },
  readBonus: async () => {
    const answer = await Console.readLineAsync(MESSAGE.INPUT_BONUS);
    return answer;
  },
};

export default InputView;
