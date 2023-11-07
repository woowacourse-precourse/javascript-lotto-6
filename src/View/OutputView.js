import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constants.js';

class OutputView {
  printError(errorMessage) {
    Console.print(`${ERROR_MESSAGE.errorText} ${errorMessage}`);
  }

  printNumLottoTickets(numLottoTickets) {
    Console.print(`\n${numLottoTickets}개를 구매했습니다.`);
  }

  printGetNumbersOrMessage(numberOrMessage) {
    Console.print(numberOrMessage);
  }

  printWinningStats(stats) {
    const winnings = [
      `3개 일치 (5,000원) - ${stats[3]}개`,
      `4개 일치 (50,000원) - ${stats[4]}개`,
      `5개 일치 (1,500,000원) - ${stats[5]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${stats['5b']}개`,
      `6개 일치 (2,000,000,000원) - ${stats[6]}개`,
    ];
    Console.print(winnings.join('\n'));
  }

  printEarningsRate(earningsRate) {
    Console.print(`총 수익률은 ${earningsRate}입니다.`);
  }
}

export default OutputView;
