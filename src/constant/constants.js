const GAME_RULE_NUMBER = {
  min: 1,
  max: 45,
  length: 6,
  price: 1000,
};

const GAME_WINNER = {
  lottoPrize: ['0', '5000', '50000', '1500000', '30000000', '2000000000'],
  firstPrize: '2,000,000,000원',
  secondPrize: '30,000,000원',
  thirdPrize: '1,500,000원',
  fourthPrize: '50,000원',
  fifthPrize: '5,000원',
  first: (amount) => `6개 일치 (${GAME_WINNER.firstPrize}) - ${amount}개`,
  second: (amount) =>
    `5개 일치, 보너스 볼 일치 (${GAME_WINNER.secondPrize}) - ${amount}개`,
  third: (amount) => `5개 일치 (${GAME_WINNER.thirdPrize}) - ${amount}개`,
  fourth: (amount) => `4개 일치 (${GAME_WINNER.fourthPrize}) - ${amount}개`,
  fifth: (amount) => `3개 일치 (${GAME_WINNER.fifthPrize}) - ${amount}개`,
  nothing: () => '',
};

const RANKING = {
  6: 'first',
  '5+1': 'second',
  5: 'third',
  4: 'fourth',
  3: 'fifth',
  nothing: 'nothing',
};

const INPUT_MESSAGES = {
  purcahsingMoney: '구입금액을 입력해 주세요.\n',
  lottoWinningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  lottoBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

const PRINT_MESSAGES = {
  purcahsedAmount: (amount) => `\n${amount}개를 구입했습니다.`,
  winStatistics: '당첨 통계',
  dashLine: '---',
  winnerMessage: (ranking, rankingPrize, amount) =>
    `${ranking} (${rankingPrize}) - ${amount}개`,
  profitMessage: (profitPercent) => `총 수익률은 ${profitPercent}%입니다.`,
};

export {
  GAME_RULE_NUMBER,
  INPUT_MESSAGES,
  PRINT_MESSAGES,
  GAME_WINNER,
  RANKING,
};
