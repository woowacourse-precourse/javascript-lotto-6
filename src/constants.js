const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = {
  PRICE_UNIT_ERROR: `${ERROR_PREFIX} 금액 입력 단위가 1,000원이 아닙니다.`,
  FORMAT_ERROR: `${ERROR_PREFIX} 금액 입력 형식이 숫자가 아닙니다.`,
};

export const CONSOLE_MESSAGE = {
  PROMPT_USER_PRICE: `로또 구입 금액을 1,000원 단위로 입력해 주세요.\n`,
  PROMPT_PURCHASED_AMOUNT: `개를 구매했습니다.`,
};

export const LOTTO_PRICE_UNIT = 1000;
