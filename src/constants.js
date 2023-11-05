const LOTTO_NUMBERS = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  NUMBER_SIZE: 6,
};

const GRADING_COUNT = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
};

const INPUT_MESSAGE = {
  PURCHASE_MESSAGE: '구입금액을 입력해 주세요.\n',
  PURCHASED_MESSAGE: (n) => `${n}개를 구매했습니다.\n`,
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
    3개 일치 (5,000원) - ${count}개
    4개 일치 (50,000원) - ${count}개
    5개 일치 (1,500,000원) - ${count}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개
    6개 일치 (2,000,000,000원) - ${count}개
    `,
  PROFIT: (number) => `총 수익률은 ${number}%입니다.`,
};

export {
  LOTTO_NUMBERS,
  GRADING_COUNT,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  WINNER_MESSAGE,
};
