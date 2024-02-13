export const GameMessage = {
  LINE: '---',
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
  FIFTH: 'FIFTH',
  WINNIG_STATISICS: '당첨 통계',
  THIRD_PLACE: `3개 일치 (5,000원) - `,
  FOURTH_PLACE: `4개 일치 (50,000원) - `,
  FIFTH_PLACE: `5개 일치 (1,500,000원) - `,
  FIFTH_PLACE_PLUS_BONUS: `5개 일치, 보너스 볼 일치 (30,000,000원) - `,
  SIX_PLACE: `6개 일치 (2,000,000,000원) - `,
  INVALID_LOTTO_NUMBER_SCOPE: '[ERROR]: 로또 번호는 1부터 45사이여야 합니다.',
  INVALID_INPUT_PRICE_TYPE_ERROR: '[ERROR]: 잘못된 구매 금액 형식입니다.',
  INVALID_INPUT_PRICE_UNIT_ERROR: '[ERROR]: 1000원 단위로 금액을 입력해주세요.',
  INVALID_INPUT_MAIN_LOTTO_LENGTH: '[ERROR]: 로또 번호는 6개 여야 합니다.',
  INVALID_INPUT_LOTTO_TYPE_ERROR: '[ERROR]: 로또 번호는 숫자여야 합니다.',
  DUPLICATED_LOTTO_NUMBER_ERROR: '[ERROR]: 로또 번호에 중복된 번호가 있습니다.',
  INVALID_INPUT_BONUS_LOTTO_LENGTH: '[ERROR]: 보너스 번호는 1개 여야 합니다.',
};

export const ErrorMessage = {
  INVALID_LOTTO_NUMBER_SCOPE: '[ERROR]: 로또 번호는 1부터 45사이여야 합니다.',
  INVALID_INPUT_PRICE_TYPE_ERROR: '[ERROR]: 잘못된 구매 금액 형식입니다.',
  INVALID_INPUT_PRICE_UNIT_ERROR: '[ERROR]: 1000원 단위로 금액을 입력해주세요.',
  INVALID_INPUT_MAIN_LOTTO_LENGTH: '[ERROR]: 로또 번호는 6개 여야 합니다.',
  INVALID_INPUT_LOTTO_TYPE_ERROR: '[ERROR]: 로또 번호는 숫자여야 합니다.',
  DUPLICATED_LOTTO_NUMBER_ERROR: '[ERROR]: 로또 번호에 중복된 번호가 있습니다.',
  INVALID_INPUT_BONUS_LOTTO_LENGTH: '[ERROR]: 보너스 번호는 1개 여야 합니다.',
};

export const LottoConstants = {
  THOUSAND_WON_UNIT: 1000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_NUMBER_COUNT: 6,
};

export const WinningPrizesConstants = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};
