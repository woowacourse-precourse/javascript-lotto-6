import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/Messages.js';
import { LOTTO_NUMBER, PRIZE } from '../constants/Condition.js';

class Output {
  error(message) {
    Console.print(message);
  }

  lottoTicketsCount(tickets) {
    Console.print(OUTPUT.ticket_count(tickets.length));
  }

  lottoTicketsNumbers(tickets) {
    tickets.forEach((ticket) =>
      Console.print(OUTPUT.ticket_number(ticket.getNumbers().join(`${LOTTO_NUMBER.seperator} `)))
    );
  }

  singleWinningResult(prize, results) {
    if (prize === PRIZE[2]) {
      Console.print(OUTPUT.second_prize(prize.match, prize.reward, results[prize.rank]));
    }

    if (prize !== PRIZE[0]) {
      Console.print(OUTPUT.default_prize(prize.match, prize.reward, results[prize.rank]));
    }
  }

  totalWinningResult(results) {
    Console.print(OUTPUT.divider);
    [...PRIZE].reverse().forEach((prize) => this.singleWinningResult(prize, results));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.total_return(totalReturn));
  }
}

export default Output;
