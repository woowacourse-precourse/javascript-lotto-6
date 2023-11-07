import { Console } from '@woowacourse/mission-utils';

class OutputView {
  constructor() {}

  static printLottoTicketsCount(count, tickets) {
    Console.print(`${count}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      Console.print(`[${ticket.join(', ')}]`);
    });
  }

  static printLottoStatistics(results, profitRate) {
    const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = results;
    Console.print('당첨 통계');
    Console.print('---');

    Console.print(
      `당첨 통계\n---\n3개 일치 (5,000원) - ${FIFTH}개\n4개 일치 (50,000원) - ${FOURTH}개\n5개 일치 (1,500,000원) - ${THIRD}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${SECOND}개\n6개 일치 (2,000,000,000원) - ${FIRST}개\n총 수익률은 ${profitRate}%입니다.`
    );
  }
}

export default OutputView;
