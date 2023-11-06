import { STATISTICS_MESSAGE } from './constant';
import { printMessage, printWinningResult, printRateOfReturn } from './utils';

class Statistics {
  print(winningResult, rateOfReturn) {
    printMessage(STATISTICS_MESSAGE.header);
    printMessage(STATISTICS_MESSAGE.division);
    printWinningResult(winningResult);
    printRateOfReturn(rateOfReturn);
  }
}

export default Statistics;
