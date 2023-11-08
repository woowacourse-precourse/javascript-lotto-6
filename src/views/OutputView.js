import { Console } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGE from '../constants/OutputMessage.js';

class OutputView {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  static printPurchaseNumber(lottoAmount, lottoArray) {
    Console.print(OUTPUT_MESSAGE.PRINT_ENTER);
    Console.print(
      OUTPUT_MESSAGE.PRINT_PURCHASED_NUMBER(lottoAmount.toString())
    );
    lottoArray.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
    Console.print(OUTPUT_MESSAGE.PRINT_ENTER);
  }

  static printWinningLog(placeArray) {
    Console.print(OUTPUT_MESSAGE.PRINT_ENTER);
    Console.print(OUTPUT_MESSAGE.PRINT_WINNING_LOG);
    Console.print(OUTPUT_MESSAGE.PRINT_HORIZONTAL_LINE);
    Console.print(OUTPUT_MESSAGE.PRINT_FIRST_PLACE(placeArray[0]));
    Console.print(OUTPUT_MESSAGE.PRINT_SECOND_PLACE(placeArray[1]));
    Console.print(OUTPUT_MESSAGE.PRINT_THIRD_PLACE(placeArray[2]));
    Console.print(OUTPUT_MESSAGE.PRINT_FORTH_PLACE(placeArray[3]));
    Console.print(OUTPUT_MESSAGE.PRINT_FIFTH_PLACE(placeArray[4]));
  }

  static printTotalReturn(returnRate) {
    Console.print(OUTPUT_MESSAGE.PRINT_TOTAL_RETURN_RATE(returnRate));
  }
}

export default OutputView;
