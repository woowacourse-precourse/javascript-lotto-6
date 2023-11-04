import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printLottoTicket(tickets) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.map((ticket) => Console.print(ticket));
  },
};

export default OutputView;
