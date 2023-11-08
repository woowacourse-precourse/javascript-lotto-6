import { Console } from '@woowacourse/mission-utils';
import { PRIZE_INFO } from '../constants/Constants.js';

class LottoView {
  static displayTickets(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static displayResults(results) {
    Console.print('\n당첨 통계');
    Console.print('-------------');
    const sortedResults = Object.keys(PRIZE_INFO)
      .sort((a, b) => PRIZE_INFO[a].match - PRIZE_INFO[b].match)
      .filter((rank) => PRIZE_INFO[rank].match >= 3);

    sortedResults.forEach((rank) => {
      const count = results.filter((result) => result.rank === rank).length;
      let message = `${PRIZE_INFO[rank].match}개 일치 (${PRIZE_INFO[
        rank
      ].prize.toLocaleString()}원) - ${count}개`;
      if (rank === 'SECOND') {
        message = `5개 일치, 보너스 볼 일치 (${PRIZE_INFO[
          rank
        ].prize.toLocaleString()}원) - ${count}개`;
      }
      Console.print(message);
    });
  }

  static displayProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoView;
