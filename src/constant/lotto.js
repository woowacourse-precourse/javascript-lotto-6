export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_PRICE = 1000;
export const THREE_MATCH_PRICE = 5000;
export const FOUR_MATCH_PRICE = 10000;
export const FIVE_MATCH_PRICE = 1500000;
export const FIVE_AND_BONUS_MATCH_PRICE = 30000000;
export const SIX_MATCH_PRICE = 2000000000;

export const BONUS_ERROR_MESSAGE = {
  INVALID_BONUS_NUMBER_ERROR:
    "[ERROR] 1부터 45 사이의 숫자 한 개만 입력이 가능합니다.",
  NON_INTEGER_INPUT_ERROR: "[ERROR] 자연수만 입력이 가능합니다.",
  DUPLICATE_WINNING_NUMBER_ERROR:
    "[ERROR] 입력한 당첨 번호 외 숫자를 입력해 주세요.",
};
export const INPUT_ERROR_MESSAGE = {
  INVALID_LOTTO_LENGTH_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_INPUT_NUMBER_ERROR:
    "[ERROR] 입력한 숫자는 1부터 45 사이의 자연수이어야 합니다.",
  DUPLICATE_INPUT_NUMBER_ERROR: "[ERROR] 중복된 숫자는 입력하면 안 됩니다.",
};
export const PRICE_ERROR_MESSAGE = "[ERROR] 구입금액을 올바르게 입력해 주세요.";
