const ERROR = {
  INVALID_NUMBER: '[ERROR] 숫자를 입력해 주세요.',
  INVALID_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  INVALID_ARRAY: '[ERROR] 쉼표(,)로 구분하여 작성해 주세요.',
  INVALID_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_LOTTO_NUMBER: '[ERROR] 숫자만 입력해 주세요.',
  INVALID_LOTTO_RANGE: '[ERROR] 1~45 사이의 숫자를 입력해 주세요.',
  LOTTO_DUPLICATION: '[ERROR] 중복된 당첨번호가 있습니다.',
};

const MESSAGE = {
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  OUTPUT_LOTTO_COUNT: (ticketCount) => `\n${ticketCount}개를 구매했습니다.`,
  OUTPUT_LOTTOS: (numbers) => `[${numbers}]`,
  OUTPUT_STATUS: '\n당첨 통계\n---',
  OUTPUT_RESULT: (result) =>
    `3개 일치 (5,000원) - ${result[5]}개\n4개 일치 (50,000원) - ${result[4]}개\n5개 일치 (1,500,000원) - ${result[3]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개\n6개 일치 (2,000,000,000원) - ${result[1]}개`,
  OUTPUT_EARNING_RATE: (earningRate) => `총 수익률은 ${earningRate}%입니다.`,
};

const GAME_NUMBER = {
  MONEY_UNIT: 1000,
};

const LOTTO_NUMBER = {
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
};

const RANK = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  NONE: 0,
};

const PRIZE = {
  NONE: 0,
  FIRST: 2000000000,
  SECOND: 3000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

export { ERROR, MESSAGE, GAME_NUMBER, LOTTO_NUMBER, RANK, PRIZE };
