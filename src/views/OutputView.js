import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printTickets(tickets) {
    const quantity = tickets.length;
    Console.print(`${quantity}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      Console.print(ticket);
    });
  },
};
export default OutputView;
