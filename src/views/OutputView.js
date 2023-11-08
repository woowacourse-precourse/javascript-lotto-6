import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printAmount(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
  },
  printTickets(ticketList) {
    ticketList.forEach((ticket) => {
      Console.print(ticket);
    });
  },
  printResult(result) {
    const { prize, profit } = result;
    Console.print(
      `\n당첨 통계\n---\n3개 일치 (5,000원) - ${prize[3]}개\n4개 일치 (50,000원) - ${prize[4]}개\n5개 일치 (1,500,000원) - ${prize[5]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${prize.bonus}개\n6개 일치 (2,000,000,000원) - ${prize[6]}개\n총 수익률은 ${profit}%입니다.`,
    );
  },
};

export default OutputView;
