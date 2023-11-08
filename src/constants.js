const REWARD = {
  FIRST: 2_000_000_000,
  SECOND: 30_000_000,
  THIRD: 1_500_000,
  FOURTH: 50_000,
  FIFTH: 5_000,
};

const NUMBER = {
  LOTTO_LENGTH: 6,
  SECOND_THIRD: 5,
  FOURTH: 4,
  FIFTH: 3,
  START: 1,
  DEFAULT: 0,
  LAST: 45,
  DECIMAL: 1,
  DIVISOR: 100,
  DEFAULT_WON: 1000,
  ADD: 1,
};

const number = {
  first: 4,
  second: 3,
  third: 2,
  fourth: 1,
  fifth: 0,
};

const totalReward = [
  `${NUMBER.FIFTH}개 일치 (${REWARD.FIFTH.toLocaleString()}원) - `,
  `${NUMBER.FOURTH}개 일치 (${REWARD.FOURTH.toLocaleString()}원) - `,
  `${NUMBER.SECOND_THIRD}개 일치 (${REWARD.THIRD.toLocaleString()}원) - `,
  `${NUMBER.SECOND_THIRD}개 일치, 보너스 볼 일치 (${REWARD.SECOND.toLocaleString()}원) - `,
  `${NUMBER.LOTTO_LENGTH}개 일치 (${REWARD.FIRST.toLocaleString()}원) - `,
];

const pattern = {
  prefix: '[ERROR]',
  notNumber: /[^1-9]/,
  notMoney: /[^0-9]/,
  zeroCheck: /^(0+)$|^0.*0$/,
};

const REQUEST = {
  MONEY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const NOTICE = {
  lotto: (quantity) => `${quantity}개를 구매했습니다.`,
  FINAL_RESULT: '\n당첨 통계\n---',
  final: (profit) => `총 수익률은 ${profit}%입니다.`,
  lottoRecord: (rank, prizeResult, index) => `${rank}${prizeResult[index]}개`,
};

const ERROR = {
  TYPE_CHECK: `${pattern.prefix} 정확한 값이 아닙니다.`,
  MINIMUN_INPUT: `${pattern.prefix} 최소한 1000원 이상은 입력해주세요.`,
  AMOUNT_CHECK: `${pattern.prefix} 금액은 ${NUMBER.DEFAULT}원 단위로 입력해주세요.`,
  INVALID_ARRAY: `${pattern.prefix} ${NUMBER.LOTTO_LENGTH}개의 숫자를 쉼표(,)로 구분하여 입력해주세요.`,
  DUPLICATE: `${pattern.prefix} 서로 다른 숫자를 입력해주세요.`,
  RANGE_CHECK: `${pattern.prefix} ${NUMBER.START}에서 ${NUMBER.LAST}사이에 숫자를 입력해주세요.`,
  LENGTH_CHECK: `${pattern.prefix} 로또 번호는 ${NUMBER.LOTTO_LENGTH}개여야 합니다.`,
};

export {
  REWARD,
  NUMBER,
  totalReward,
  pattern,
  ERROR,
  REQUEST,
  number,
  NOTICE,
};
