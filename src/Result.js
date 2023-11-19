import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, LOTTO } from './Constants.js';

function getRankCounts(ticketArr) {
  const rankCounts = [0, 0, 0, 0, 0];

  ticketArr.forEach((ticket) => {
    if (ticket.Rank >= 1 && ticket.Rank <= 5) {
      rankCounts[ticket.Rank - 1]++;
    }
  });
  return rankCounts;
}

function showResult(rankCounts) {
  Console.print(OUTPUT_MESSAGE.RESULT(rankCounts));
}

function calcEarning(rankCounts) {
  return (
    LOTTO.EARNING.RANK_5 * rankCounts[4] +
    LOTTO.EARNING.RANK_4 * rankCounts[3] +
    LOTTO.EARNING.RANK_3 * rankCounts[2] +
    LOTTO.EARNING.RANK_2 * rankCounts[1] +
    LOTTO.EARNING.RANK_1 * rankCounts[0]
  );
}

function calcEarningRate(earning, purchasePrice) {
  return Math.round((earning / purchasePrice) * 10000) / 100;
}

function showEarningRate(earningRate) {
  Console.print(OUTPUT_MESSAGE.EARNING(earningRate));
}

export { getRankCounts, showResult, calcEarning, calcEarningRate, showEarningRate };
