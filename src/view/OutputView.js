import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../util/constant/index.js';
class OutputView {
  static printLottoTicketsCount(count, tickets) {
    Console.print(`${count}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      Console.print(`[${ticket.join(', ')}]`);
    });
  }

  static printLottoStatistics(results, profitRate) {
    const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = results;
    const prizeLevels = [
      { name: OUTPUT_MESSAGE.FIFTH_NAME, count: FIFTH },
      { name: OUTPUT_MESSAGE.FOURTH_NAME, count: FOURTH },
      { name: OUTPUT_MESSAGE.THIRD_NAME, count: THIRD },
      { name: OUTPUT_MESSAGE.SECOND_NAME, count: SECOND },
      { name: OUTPUT_MESSAGE.FIRST_NAME, count: FIRST },
    ];

    Console.print(OUTPUT_MESSAGE.STATISTICS);
    Console.print(OUTPUT_MESSAGE.LINE);

    prizeLevels.forEach((prize) => {
      Console.print(`${prize.name} - ${prize.count}개`);
    });

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;
