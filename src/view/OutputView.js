import { Console } from '@woowacourse/mission-utils';
import { GAME_PRIZES, NUMBER, PRIZE_AMOUNTS } from '../utils/Constans';
import { GAME_MESSAGES } from '../utils/Messages';

class OutputView {
  static printQuantity(ticketPrice) {
    Console.print(
      `${ticketPrice / PRIZE_AMOUNTS.TICKET_PRICE_AMOUNT}개를 구매했습니다.`
    );
  }

  static printLottoTickets(tickets) {
    const formattedTickets = tickets
      .map((ticket) => `[${ticket.join(', ')}]`)
      .join('\n');
    Console.print(formattedTickets);
  }

  static printResultTitle() {
    Console.print(GAME_MESSAGES.RESULT_TITLE);
  }

  static printSeparator() {
    Console.print(GAME_MESSAGES.SEPARATOR);
  }

  static formatResults(result) {
    const formattedResults = [];
    formattedResults.push(`3개 일치 (5,000원) - ${result[GAME_PRIZES.FIFTH_PRIZE]}개`);
    formattedResults.push(`4개 일치 (50,000원) - ${result[GAME_PRIZES.FOURTH_PRIZE]}개`);
    formattedResults.push(`5개 일치 (1,500,000원) - ${result[GAME_PRIZES.THIRD_PRIZE]}개`);
    formattedResults.push(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[GAME_PRIZES.SECOND_PRIZE]}개`);
    formattedResults.push(`6개 일치 (2,000,000,000원) - ${result[GAME_PRIZES.FIRST_PRIZE]}개`);
    Console.print(formattedResults.join("\n"));
  }

  static calculateProfitRate(result) {
    const profitRate = (result.totalEarnings / result.totalSpent) * NUMBER.ONE_HUNDRED;
    Console.print(`총 수익률은 ${profitRate.toFixed(NUMBER.ONE)}%입니다.`);
  }
}
export default OutputView;