import { Console } from '@woowacourse/mission-utils';

const STATISTICS_INTRO = '\n당첨 통계\n---';

const STATISTICS_HIT_RESULT = [
  '',
  '6개 일치 (2,000,000,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '4개 일치 (50,000원) - ',
  '3개 일치 (5,000원) - ',
];

export default class OutPutService {
  printTicketCount(message) {
    Console.print(message);
  }

  printTickets(ticket) {
    const OUTPUT = '[' + ticket.join(', ') + ']';
    Console.print(OUTPUT);
  }

  printStatIntro() {
    Console.print(STATISTICS_INTRO);
  }

  printHitStatistics(hits) {
    for (let i = 5; i >= 1; --i) {
      const OUTPUT = STATISTICS_HIT_RESULT[i] + `${hits[i]}개`;
      Console.print(OUTPUT);
    }
  }
}
