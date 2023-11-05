import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/message.js';

export const printBuyLottery = (amount) => {
  return Console.print(OUTPUT_MESSAGE.OUTPUT_BUY_LOTTERY(amount));
};
