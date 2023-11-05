const ERROR = {
  WINNING_NUMBER_SIZE: "[ERROR] 당첨 번호는 6개여야 합니다",
  WINING_NUMBER_DUPLICATE: "[ERROR] 당첨 번호는 중복되면 안 됩니다",
  WINING_NUMBER_RANGE_NUMBER:
    "[ERROR] 당첨 번호는 1부터 45 이내의 숫자여야 합니다",
  BONUS_NUMBER_RANGE_NUMBER:
    "[ERROR] 보너스 번호는 1부터 45 이내의 숫자여야 합니다",
  BONUS_NUMBER_DUPLICATE:
    "[ERROR] 보너스 번호는 당첨 번호와 중복되면 안 됩니다",
};

Object.freeze(ERROR);

export default { ERROR };
