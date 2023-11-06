import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../utils/constant';

export const Handle_Output = {
  Error_Output: (message) => {
    Console.print(message);
  },

  Quantitiy_Output: (quantitiy) => {
    Console.print(quantitiy + OUTPUT_MESSAGE.QUANTITY);
  },

  Lotto_Output: (lottotikets) => {
    Console.print(lottotikets);
  },

  Profit_OutPut: (profit) => {
    Console.print(
      OUTPUT_MESSAGE.PROFIT_HEAD + profit + '%' + OUTPUT_MESSAGE.PROFIT_TAIL,
    );
  },

  Ending_Output: (result) => {
    Console.print(OUTPUT_MESSAGE.END_MESSAGE);
    Console.print(result);
  },
};
