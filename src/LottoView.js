import { Console } from '@woowacourse/mission-utils';
import COUNT_WINNERS from './CountWinners.js';
import MESSAGES from './messages.js';

class LottoView {
  showLottoNumbers(countOfLotto, lottos) {
    Console.print(MESSAGES.PURCHASED_LOTTOS(countOfLotto));
    lottos.forEach((lotto) => {
      const sortLotto = lotto.numbers.sort((a, b) => a - b);
      Console.print(`[${sortLotto.join(', ')}]`);
    });
  }

  showResults(countWinners) {
    Console.print(MESSAGES.WINNING_STATISTICS);
    const winnerOrder = [3, 4, 5, '5+1', 6];

    winnerOrder.forEach((key) => {
      const { count, prize, text } = COUNT_WINNERS[key];
      const winnerCount = countWinners[key];
      Console.print(MESSAGES.WINNER_COUNT(text, prize, winnerCount));
    });
  }

  showProfitRate(profitRate) {
    Console.print(MESSAGES.TOTAL_PROFIT_RATE(profitRate));
  }
}

export default LottoView;
