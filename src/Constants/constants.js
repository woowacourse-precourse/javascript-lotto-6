export const MESSAGE = {
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_LOTTO_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBERS: '\n보너스 번호를 입력해 주세요.\n',
  OUTPUT_LOTTO: '개를 구매했습니다.',
  OUTPUT_STATISTICS: '\n당첨 통계 \n---',
};

export const LOTTO = {
  LOTTO_NUMBERS: 6,
};

export const ERROR = {
  PREFIX: '[ERROR]',
  PURCHASE_AMOUNT: {
    NOT_PRIME_NUMBER: '1,000원으로 나누어지는 숫자여야 합니다.',
    IS_NOT_NUMBER: '1,000원 단위 숫자로 입력해주세요.',
  },
  LOTTO_NUMBERS: {
    IS_DUPLICATE: '당첨 번호는 중복되지 않아야 합니다.',
    INVALID_LENGTH: '당첨 번호는 6개의 숫자로 입력해야합니다.',
    IS_NOT_NUMBER: '당첨 번호는 숫자로만 입력해주세요.',
  },
  BONUS_NUMBER: {
    IS_DUPLICATE: '당첨 번호와 중복되지 않은 수를 입력해야합니다.',
    INVALID_LENGTH: '보너스 번호는 1개의 숫자만 입력해야합니다.',
    IS_NOT_NUMBER: '보너스 번호는 숫자로만 입력해주세요',
  },
};
