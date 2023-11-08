import { Console } from '@woowacourse/mission-utils';
import { UI_MESSAGES } from '../constants/UiConstants';

export default class OutputView {
  static displayTickets(tickets) {
    Console.print(UI_MESSAGES.TICKETS_PURCHASED(tickets.length));
    tickets.forEach((ticket) => {
      Console.print(`[${ticket.numbers.join(', ')}]`);
    });
  }

  static displayResults(resultStrings) {
    Console.print(UI_MESSAGES.WINNING_STATISTICS);
    Console.print(resultStrings);
  }

  static displayProfitRate(profitRate) {
    Console.print(UI_MESSAGES.TOTAL_PROFIT_RATE(profitRate));
  }

  static displayError(message) {
    Console.print(`${message}`);
  }
}
