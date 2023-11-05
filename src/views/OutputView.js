import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/constants.js';

const OutputView = {
  printTickets(tickets) {
    Console.print(OUTPUT_MESSAGE.purchaseCount(tickets));
    tickets.forEach(numbers => {
      const ticket = numbers.sort((a, b) => a - b);
      Console.print(OUTPUT_MESSAGE.tickets(ticket));
    });
  },
};

export default OutputView;
