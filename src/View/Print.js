import { Console } from '@woowacourse/mission-utils';
import STRING from '../Message/Strig';
import NUMBER from '../Message/Number';
class Print {
  static printTickets(tickets = []) {
    Console.print(`${STRING.lineBreak}${tickets.length}${STRING.purchaseAmountSuffix}`);
    tickets.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

  static printResults(results = []) {
    const resultSring = [...STRING.result]
    results.forEach((result, index) => {
      Console.print(
        `${resultSring[index]}${result}${STRING.resultSuffix}`,
      );
    });
  }

  static printEarningRate(earningRate = NUMBER.defaultNumber) {
    Console.print(`${STRING.earningRatePrefix}${earningRate}${STRING.earningRateSuffix}`);
  }
}
export default Print;
