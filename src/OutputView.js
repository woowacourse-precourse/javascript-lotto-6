import { Console, PRINT_PURCHASE_COUNT } from './Constant';

const OutputView = {
  printLottoTickets(tickets) {
    Console.print(`${tickets.length}${PRINT_PURCHASE_COUNT}`);
    tickets.map(ticket => {
      Console.print(ticket);
    });
  },
};

export default OutputView;
