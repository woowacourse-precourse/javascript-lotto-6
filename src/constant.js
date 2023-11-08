export const MIN_PURCHASE_AMOUNT = 1000;

export const LOTTO_PICK = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  DRAW_UNITS: 6,
};

export const INPUT_MESSAGE = {
  PURCHASE_AMOUNT : "구입금액을 입력해주세요\n",
  WIN_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

export const ERROR_MESSAGE = {
  WRONG_TYPE : "숫자가 잘못된 형식입니다.",
  MIN_AMOUNT: "구매금액은 1,000원 단위로 입력해야합니다.",
  WRONG_RANGE: "1에서 45까지의 숫자 중에서만 입력해야합니다.",
  WRONG_COMMA: "입력값이 쉼표로 시작하거나 끝날 수 없습니다.",
  WRONG_LENGTH: "잘못된 숫자 개수입니다.",
  OVERLAPPED_VALUE: "중복된 값이 있습니다.",
};

export const WIN_PRIZE = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};