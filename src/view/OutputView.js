import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static displayTickets(tickets) {
    Console.print(`${tickets.length}개를 구매했습니다.\n`);
    tickets.forEach((ticket) => {
      Console.print(`[${ticket.numbers.join(', ')}]`);
    });
  }

  static displayResults(resultStrings) {
    Console.print('당첨 통계\n---');
    resultStrings.forEach((resultString) => {
      Console.print(resultString);
    });
  }

  static displayProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  static displayError(message) {
    Console.print(`[ERROR] ${message}`);
  }
}
