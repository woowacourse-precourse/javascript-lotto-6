import { Console } from '@woowacourse/mission-utils';

const STATISTICS_INTRO = '\n당첨 통계\n---';
const TICKET_COUNT_MESSAGE = '개를 구매했습니다.';
const STATISTICS_HIT_RESULT = [
  '',
  '6개 일치 (2,000,000,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '4개 일치 (50,000원) - ',
  '3개 일치 (5,000원) - ',
];

function getRateOfReturn(percent) {
  return `총 수익률은 ${percent}%입니다.`;
}

export default class OutPutService {
  printTicketCount(tickets) {
    Console.print(`\n${tickets}` + TICKET_COUNT_MESSAGE);
  }

  printTickets(ticket) {
    Console.print('[' + ticket.join(', ') + ']');
  }

  printStatIntro() {
    Console.print(STATISTICS_INTRO);
  }

  printHitStatistics(hits) {
    for (let i = 5; i >= 1; --i) {
      Console.print(STATISTICS_HIT_RESULT[i] + `${hits[i]}개`);
    }
  }

  printRateOfReturn(rate) {
    Console.print(getRateOfReturn(rate));
  }
}
