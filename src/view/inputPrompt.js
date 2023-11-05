import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/message.js';

export const inputMoney = () => {
  return Console.readLineAsync(INPUT_MESSAGE.INPUT_MONEY);
};
