import { Console } from '@woowacourse/mission-utils';
import { PRIZE_INFO } from '../constants/Constants.js';

class LottoView {
  static displayTickets(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static displayResults(results) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Object.keys(PRIZE_INFO).forEach((rank) => {
      const count = results.filter((result) => result.rank === rank).length;
      const prize = PRIZE_INFO[rank].prize.toLocaleString();
      const message = `${PRIZE_INFO[rank].match}개 일치 (${prize}원) - ${count}개`;
      Console.print(message);
    });
  }

  static displayProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoView;
