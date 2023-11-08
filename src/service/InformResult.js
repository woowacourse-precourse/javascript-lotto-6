import Utils from './Utils.js';
import { INFORM_TEMPLATE, STATISTICS_STANDARD } from './Constants.js';

const InformResult = {
  issuedLotto: (issuedLotto, count) => {
    const lottoList = issuedLotto.map(
      (lotto) => `[${lotto.join(INFORM_TEMPLATE.numberSeperator)}]`,
    );

    Utils.informUser(`${count}${INFORM_TEMPLATE.purchase}`);
    Utils.informUser(`${lottoList.join(INFORM_TEMPLATE.lottoSeperator)}`);
  },

  winningStatistic: (winnerList) => {
    Utils.informUser(INFORM_TEMPLATE.statisticHeader);

    STATISTICS_STANDARD.rankStandard.forEach((standard, rank) => {
      const prize = STATISTICS_STANDARD.prizeAmount.get(rank);
      const prizeLocal = prize.toLocaleString();
      const matchCount = winnerList.get(rank) ?? 0;

      Utils.informUser(
        INFORM_TEMPLATE.statistic(standard, prizeLocal, matchCount),
      );
    });
  },

  winningProfit: (profit) => {
    const message = INFORM_TEMPLATE.profit(profit);
    Utils.informUser(message);
  },
};

export default InformResult;
