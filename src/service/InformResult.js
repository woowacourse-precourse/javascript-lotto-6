import Utils from './Utils.js';

const INFORM_TEMPLATE = {
  purchase: '개를 구매했습니다.',
  numberSeperator: ', ',
  lottoSeperator: '\n',
  statisticHeader: '당첨 통계\n---',
  statistic: (matchStandard, prize, count) =>
    `${matchStandard}개 일치 (${prize}원) - ${count}개`,
  profit: (profit) => `총 수익률은 ${profit}%입니다.`,
};

const RANKING = new Map([
  ['5등', `3개 일치`],
  ['4등', `4개 일치`],
  ['3등', `5개 일치`],
  ['2등', `5개 일치, 보너스 볼 일치`],
  ['1등', `6개 일치`],
]);

const WINNING_PRIZE = new Map([
  ['5등', 5000],
  ['4등', 50000],
  ['3등', 1500000],
  ['2등', 30000000],
  ['1등', 2000000000],
]);

const informResult = {
  issuedLotto: (issuedLotto, count) => {
    const lottoList = issuedLotto.map(
      (lotto) => `[${lotto.join(INFORM_TEMPLATE.numberSeperator)}]`,
    );

    Utils.informUser(`${count}${INFORM_TEMPLATE.purchase}`);
    Utils.informUser(`${lottoList.join(INFORM_TEMPLATE.lottoSeperator)}`);
  },

  winningStatistic: (winnerList) => {
    Utils.informUser(INFORM_TEMPLATE.statisticHeader);

    RANKING.forEach((standard, rank) => {
      const prize = WINNING_PRIZE.get(rank);
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

export default informResult;
