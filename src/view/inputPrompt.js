import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/message.js';

export const inputMoney = () => {
  return Console.readLineAsync(INPUT_MESSAGE.INPUT_MONEY);
};

export const inputWinningNumber = () => {
  return Console.readLineAsync(INPUT_MESSAGE.INPUT_WINNER_NUMBER);
};

export const inputBonusNumber = () => {
  return Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUS_NUMBER);
};
