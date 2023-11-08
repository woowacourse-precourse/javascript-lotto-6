export const LOTTO = {
  INPUT_START: '구입 금액을 입력해주세요.(1장에 1000원)\n',
  INPUT_WINNING_NUM: '쉼표로 구분하여 6자리 당첨 번호를 입력해주세요. (1 ~ 45)\n',
  INPUT_BONUS_NUM: '보너스 번호를 입력해주세요. (1 ~ 45)\n',
  OUTPUT_RESULT: '당첨 통계\n---\n',
};

export const ERROR = {
  INPUT_MONEY_UNIT: '[ERROR] 단위는 1000단위입니다.',
  INPUT_ZERO_NUM: '[ERROR] 0은 입력할 수 없습니다.',
  INPUT_WINNING_NUM: '[ERROR] 6자리 숫자를 입력해주세요.',
  INPUT_RANGE_NUM: '[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.',
  INPUT_DUPLICATE_NUM: '[ERROR] 중복된 숫자가 있습니다.',
  INPUT_DUPLICATE_BONUS_NUM: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  INPUT_EMPTY: '[ERROR] 입력값이 없습니다.',
  INPUT_NOT_NUMBER: '[ERROR] 숫자를 입력해주세요.',
  INPUT_NOT_INTEGER: '[ERROR] 정수를 입력해주세요.',
  INPUT_NOT_POSITIVE: '[ERROR] 양수를 입력해주세요.',
};

export const WINNING_MONEY = {
  FIRST: '2,000,000,000원',
  SECOND: '30,000,000원',
  THIRD: '1,500,000원',
  FOURTH: '50,000원',
  FIFTH: '5,000원',
};

export const NUMBER = {
  WINNING_LENGTH: 6,
  MAN_RANDOM_NUMBER: 45,
  MIN_RANDOM_NUMBER: 1,
  MONEY_UNIT: 1000,
};
