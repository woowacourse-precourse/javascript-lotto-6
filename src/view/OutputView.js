import { Console } from '@woowacourse/mission-utils';
import { WINNING_CATEGORY } from '../constants.js';

class OutputView {
  static printLottoTicketCount(count) {
    Console.print(`\n${count}개 구매했습니다.`);
  }

  static printLottoTickets(lottoTickets) {
    lottoTickets.forEach((lottoTicket) => {
      Console.print(lottoTicket.getNumbers());
    });

    OutputView.printBlankLine();
  }

  static printWinningResult(winningCount) {
    OutputView.printBlankLine();
    Console.print('당첨 통계\n---');

    for (let ranking = 5; ranking >= 1; ranking--) {
      const category = WINNING_CATEGORY[ranking];
      const count = winningCount[ranking];

      Console.print(`${category} - ${count}개`);
    }
  }

  static printBlankLine() {
    Console.print('');
  }
}

export default OutputView;
