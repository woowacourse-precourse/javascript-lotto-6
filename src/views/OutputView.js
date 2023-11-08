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
  printResult() {},
};

export default OutputView;
