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
  INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
};

const GAME_NUMBER = {
  MONEY_UNIT: 1000,
};

const LOTTO_NUMBER = {
  MIN: 1,
  MAX: 45,
  COUNT: 6,
};

export { ERROR, MESSAGE, GAME_NUMBER, LOTTO_NUMBER };
