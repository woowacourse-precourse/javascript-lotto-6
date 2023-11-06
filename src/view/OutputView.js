import { Console } from '@woowacourse/mission-utils';
import { CHARACTER } from '../constants/constants.js'

class OutputView {
  print(message) {
    Console.print(message);
  }

  printNumberOfPurchase(numberOfPurchase) {
    Console.print(`${numberOfPurchase}${CHARACTER.purchaseSuffix}`);
  }

  printStatistic(statistic) {
    Console.print(
      `${STATMESSAGE[statistic.rank]}${statistic.count}${CHARACTER.countSuffix}`
    );
  }

  printRateOfReturns(rateOfReturns) {
    Console.print(
      `${CHARACTER.returnPreffix}${rateOfReturns}${CHARACTER.returnSuffix}`
    );
  }
}

export default OutputView;
