const GAME_RULE_NUMBER = {
  Min: 1,
  Max: 45,
  Length: 6,
  Price: 1000,
  firstPrize: '2,000,000,000원',
  secondPrize: '30,000,000원',
  thirdPrize: '1,500,000원',
  fourthPrize: '50,000원',
  fifthPrize: '5,000원',
};

const INPUT_MESSAGES = {
  purcahsingMoney: '구입금액을 입력해 주세요.\n',
  lottoWinningNumbers: '당첨 번호를 입력해 주세요.\n',
  lottoBonusNumber: '보너스 번호를 입력해 주세요.\n',
};

const PRINT_MESSAGES = {
  purcahsedAmount: (number) => `${number}를 구입했습니다.\n`,
  winStatistics: '당첨 통계',
  dashLine: '---',
};

export { GAME_RULE_NUMBER, INPUT_MESSAGES, PRINT_MESSAGES };
