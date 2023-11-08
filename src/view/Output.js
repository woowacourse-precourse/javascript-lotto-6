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

  lottoTickets(tickets) {
    this.lottoTicketsCount(tickets);
    this.lottoTicketsNumbers(tickets);
  }

  singleWinningResult(prize, results) {
    return prize === PRIZE.SECOND_PRIZE
      ? Console.print(OUTPUT.second_prize(prize.match, prize.reward, results[prize.rank]))
      : Console.print(OUTPUT.default_prize(prize.match, prize.reward, results[prize.rank]));
  }

  totalWinningResult(results) {
    Console.print(OUTPUT.divider);

    const prizeList = [
      PRIZE.FIFTH_PRIZE,
      PRIZE.FOURTH_PRIZE,
      PRIZE.THIRD_PRIZE,
      PRIZE.SECOND_PRIZE,
      PRIZE.FIRST_PRIZE,
    ];

    prizeList.forEach((prize) => this.singleWinningResult(prize, results));
  }

  totalReturnResult(totalReturn) {
    Console.print(OUTPUT.total_return(totalReturn));
  }

  gameResult(result) {
    const { results, totalReturn } = result;

    this.totalWinningResult(results);
    this.totalReturnResult(totalReturn);
  }
}

export default Output;
