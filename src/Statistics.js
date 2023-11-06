import { Console } from '@woowacourse/mission-utils';

export default class Statistics {
  static printRateOfReturn(spend, winning) {
    const rateOfReturn = ((winning / spend) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}
