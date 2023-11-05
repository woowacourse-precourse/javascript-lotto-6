import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/message.js';

export const printBuyLottery = (amount) => {
  Console.print(OUTPUT_MESSAGE.OUTPUT_BUY_LOTTERY(amount));
};

export const printLottery = (lotto) => {
  Console.print(`[${lotto.toString().replaceAll(',', ', ')}]`);
};

export const printBeforeResult = () => {
  Console.print(OUTPUT_MESSAGE.OUTPUT_RESULT);
  Console.print(OUTPUT_MESSAGE.OUTPUT_DIVIDER);
};
