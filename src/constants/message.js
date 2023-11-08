export const INPUT_MESSAGE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGE = {
  PURCHASE_SUMMARY: '개를 구매했습니다.',
  TITLE: '\n당첨 통계\n---',
  1: '6개 일치 (2,000,000,000원) - ',
  2: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  3: '5개 일치 (1,500,000원) - ',
  4: '4개 일치 (50,000원) - ',
  5: '3개 일치 (5,000원) - ',
};

export const ERROR_MESSAGE = {
  INVALID_PURCHASE_AMOUNT: '[ERROR] 구입금액은 1,000원 단위로 입력해 주세요.',
  INVALID_NUMBERS_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_COMMA_SEPARATED: '[ERROR] 번호 입력은 쉼표로 구분되어야 합니다.',
  INVALID_LOTTO_RANGE: '[ERROR] 로또 번호 및 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATE_NUMBERS: '[ERROR] 로또 번호 및 보너스 번호는 중복될 수 없습니다.',
  INVALID_NUMBER_INPUT: '[ERROR] 로또 번호 및 보너스 번호는 숫자여야 합니다.'
};
