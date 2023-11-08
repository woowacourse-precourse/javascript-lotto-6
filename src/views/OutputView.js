import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printAmount(amount) {
    Console.print(amount);
  },
  printTickets(ticketList) {
    ticketList.forEach((ticket) => {
      Console.print(ticket);
    });
  },
  printResult(result) {
    const { prize, profit } = result;
    Console.print(
      `당첨 통계
      ---
      3개 일치 (5,000원) - ${prize[3]}개
      4개 일치 (50,000원) - ${prize[4]}개
      5개 일치 (1,500,000원) - ${prize[5]}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${prize.bonus}개
      6개 일치 (2,000,000,000원) - ${prize[6]}개
      총 수익률은 ${profit}%입니다.`,
    );
  },
};

export default OutputView;
