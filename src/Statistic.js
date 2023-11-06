import { STATISTICS_MESSAGE } from './constant';
import { printMessage, printWinningResult, printRateOfReturn } from './utils';

class Statistics {
  constructor(winningResult, rateOfReturn) {
    this.print(winningResult, rateOfReturn);
  }
  print(winningResult, rateOfReturn) {
    printMessage(STATISTICS_MESSAGE.header);
    printMessage(STATISTICS_MESSAGE.division);
    printWinningResult(winningResult);
    printRateOfReturn(rateOfReturn);
  }
}

export default Statistics;
