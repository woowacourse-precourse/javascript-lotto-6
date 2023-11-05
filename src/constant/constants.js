const GAME_RULE_NUMBER = {
  min: 1,
  max: 45,
  length: 6,
  price: 1000,
  lottoLength: 6,
  bonusNumberLength: 1,
  minimunAccord: 3,
};

const PRINT_MESSAGES = {
  purcahsedAmount: (amount) => `\n${amount}개를 구매했습니다.`,
  winStatistics: '\n당첨 통계',
  dashLine: '---',
  winnerMessage: (ranking, rankingPrize, amount) =>
    `${ranking} (${rankingPrize}) - ${amount}개`,
  profitMessage: (profitPercent) => `총 수익률은 ${profitPercent}%입니다.`,
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
  nothing: () => PRINT_MESSAGES.dashLine,
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

const SYMBOLS = {
  sort: ',',
};

const ERROR_MESSAGES = {
  divisibleByLottoPrice: `[ERROR] 로또 구매 금액은 ${GAME_RULE_NUMBER.price}원 단위만 가능합니다.`,
  inputMoneyType: '[ERROR] 구매 금액은 숫자여야 합니다.',
  inputMoneyMinimun: `[ERROR] 로또 구매 금액은 최소 ${GAME_RULE_NUMBER.price}이상이어야 합니다.`,
  lottoSplit: `[ERROR] 로또 번호는 반드시 쉼표(${SYMBOLS.sort})로 구분되어야 합니다.`,
  lottoType: '[ERROR] 로또 번호는 반드시 숫자 혹은 정수여야 합니다.',
  lottoRange: `[ERROR] 로또 번호는 반드시 ${GAME_RULE_NUMBER.min}~${GAME_RULE_NUMBER.max}여야 합니다.`,
  lottoLength: `[ERROR] 로또 번호는 ${GAME_RULE_NUMBER.lottoLength}개여야 합니다.`,
  bonusDuplicated: '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.',
  bonusType: '[ERROR] 보너스 번호는 반드시 숫자 혹은 정수여야 합니다.',
  bonusRange: `[ERROR] 보너스 번호는 반드시 ${GAME_RULE_NUMBER.min}~${GAME_RULE_NUMBER.max}여야 합니다.`,
  bonusLength: `[ERROR] 보너스 번호는 반드시 ${GAME_RULE_NUMBER.bonusNumberLength}자리여야 합니다.`,
  inputBlank: '[ERROR] 입력 값이 없습니다.',
  inputSpace: '[ERROR] 입력 값에 공백이 포함되어 있습니다.',
  duplicatedNumber: '[ERROR] 로또 번호는 중복되면 안됩니다.',
};

export {
  GAME_RULE_NUMBER,
  INPUT_MESSAGES,
  PRINT_MESSAGES,
  GAME_WINNER,
  RANKING,
  ERROR_MESSAGES,
};
