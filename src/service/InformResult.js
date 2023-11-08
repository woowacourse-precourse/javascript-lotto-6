import Utils from './Utils.js';

const INFORM_TEMPLATE = {
  purchase: '개를 구매했습니다.',
  numberSeperator: ', ',
  lottoSeperator: '\n',
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

const PRINT_STRING = {
  resultHeader: '당첨 통계\n---',
  prizeUnit: '원',
  matchCountUnit: '개',
};

const informResult = {
  issuedLotto: (issuedLotto, count) => {
    const lottoList = issuedLotto.map(
      (lotto) => `[${lotto.join(INFORM_TEMPLATE.numberSeperator)}]`,
    );

    Utils.informUser(`${count}${INFORM_TEMPLATE.purchase}`);
    Utils.informUser(`${lottoList.join(INFORM_TEMPLATE.lottoSeperator)}`);
  },

  winningStatistic: (winnerList) => {
    Utils.informUser(PRINT_STRING.resultHeader);

    RANKING.forEach((standard, rank) => {
      const prize = WINNING_PRIZE.get(rank);
      const matchCount = winnerList.get(rank) ?? 0;

      Utils.informUser(
        `${standard} (${prize.toLocaleString()}${
          PRINT_STRING.prizeUnit
        }) - ${matchCount}${PRINT_STRING.matchCountUnit}`,
      );
    });
  },
};

export default informResult;
