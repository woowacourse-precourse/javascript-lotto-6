const GAME_RULE_NUMBER = {
  min: 1,
  max: 45,
  length: 6,
  price: 1000,
  firstPrize: '2,000,000,000원',
  secondPrize: '30,000,000원',
  thirdPrize: '1,500,000원',
  fourthPrize: '50,000원',
  fifthPrize: '5,000원',
};

const INPUT_MESSAGES = {
  purcahsingMoney: '구입금액을 입력해 주세요.\n',
  lottoWinningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  lottoBonusNumber: '보너스 번호를 입력해 주세요.\n',
};

const PRINT_MESSAGES = {
  purcahsedAmount: (amount) => `\n${amount}개를 구입했습니다.`,
  winStatistics: '당첨 통계',
  dashLine: '---',
};

export { GAME_RULE_NUMBER, INPUT_MESSAGES, PRINT_MESSAGES };
