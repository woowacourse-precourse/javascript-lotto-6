export const RANGE_MIN = 1;
export const RANGE_MAX = 45;
export const LOTTO_LENGTH = 6;

export const keys = Object.freeze({
  THREE: 'three',
  FOUR: 'four',
  FIVE: 'five',
  FIVE_BONUS: 'fivePlusBonus',
  SIX: 'six',
});

export const inputPrompts = Object.freeze({
  PURCHASE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const tierDescriptions = Object.freeze({
  THREE: '3개 일치 (5,000원)',
  FOUR: '4개 일치 (50,000원)',
  FIVE: '5개 일치 (1,500,000원)',
  FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  SIX: '6개 일치 (2,000,000,000원)',
});

export const errorMessages = Object.freeze({
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  NAN: '[ERROR] 숫자를 입력해야 합니다.',
  DECIMALS: '[ERROR] 로또 번호는 정수여야 합니다.',
  DUPLICATES: '[ERROR] 중복되는 숫자가 있습니다.',
  RANGE: '[ERROR] 로또 번호는 1에서 45 사이여야 합니다.',
  PURCHASE_AMOUNT: '[ERROR] 구매 금액은 1000의 배수여야 합니다.',
  NEGATIVE_AMOUNT: '[ERROR] 구매 금액은 음수일 수 없습니다.',
});
