import { Console } from '@woowacourse/mission-utils';
import { WINNING_CATEGORY } from '../constants.js';

class OutputView {
  static printLottoTicketCount(count) {
    OutputView.printBlankLine();
    Console.print(`${count}개를 구매했습니다.`);
  }

  static printLottoTickets(lottoTickets) {
    lottoTickets.forEach((lottoTicket) => {
      Console.print(`[${lottoTicket.getNumbers().join(', ')}]`);
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

  static printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}입니다.`);
  }

  static printBlankLine() {
    Console.print('');
  }
}

export default OutputView;
