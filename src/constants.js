const LOTTO_NUMBERS = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  NUMBER_SIZE: 6,
  PAY_LOTTO_MONEY: 1000,
};

const GRADING_COUNT = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
};

const LOTTO_PRIZE_MONEY = {
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};

const INPUT_MESSAGE = {
  PURCHASE_MESSAGE: '구입금액을 입력해 주세요.\n',
  PURCHASED_MESSAGE: (n) => `\n${n}개를 구매했습니다.`,
  LOTTO_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

const ERROR_MESSAGE = {
  ISNAN: '[ERROR] 숫자만 입력해 주세요',
  RANGE: '[ERROR] 1~45의 범위로 입력해 주세요.',
  COUNT: '[ERROR] 6개의 숫자를 입력해 주세요.',
  DUPLICATED: '[ERROR] 중복된 숫자는 입력할 수 없습니다.',
  UNIT: '[ERROR] 1,000원 단위로 입력해 주세요.',
};

const WINNER_MESSAGE = {
  WINLOG: '당첨 통계 \n+ --- \n',
  WINCOUNT: (count) => `
    ${GRADING_COUNT.THREE}개 일치 (${LOTTO_PRIZE_MONEY.FIFTH_PRIZE}원) - ${count}개
    ${GRADING_COUNT.FOUR}개 일치 (${LOTTO_PRIZE_MONEY.FOURTH_PRIZE}원) - ${count}개
    ${GRADING_COUNT.FIVE}개 일치 (${LOTTO_PRIZE_MONEY.THIRD_PRIZE}원) - ${count}개
    ${GRADING_COUNT.FIVE}개 일치, 보너스 볼 일치 (${LOTTO_PRIZE_MONEY.SECOND_PRIZE}원) - ${count}개
    ${GRADING_COUNT.SIX}개 일치 (${LOTTO_PRIZE_MONEY.FIRST_PRIZE}원) - ${count}개
    `,
  PROFIT: (number) => `총 수익률은 ${number}%입니다.`,
};

export {
  LOTTO_NUMBERS,
  GRADING_COUNT,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  WINNER_MESSAGE,
  LOTTO_PRIZE_MONEY,
};
