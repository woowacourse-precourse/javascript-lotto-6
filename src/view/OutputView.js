import { Console } from '@woowacourse/mission-utils';

class OutputView {
  print(message) {
    Console.print(message);
  }

  printNumberOfPurchase(numberOfPurchase) {
    Console.print(`${numberOfPurchase}${CHARACTER.purchaseSuffix}`)
  }

  printStatistic(statistic) {
    Console.print(
      `${STATMESSAGE[statistic.rank]}${statistic.count}${CHARACTER.countSuffix}`
    )
  }
}

export default OutputView;
