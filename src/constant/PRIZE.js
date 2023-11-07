const RANK = {
  FIRST: { MATCHED_COUNT: 6, MONEY: 2_000_000_000 },
  SECOND: { MATCHED_COUNT: 5, BONUS_MATCH: true, MONEY: 30_000_000 },
  THIRD: { MATCHED_COUNT: 5, MONEY: 1_500_000 },
  FOURTH: { MATCHED_COUNT: 4, MONEY: 50_000 },
  FIFTH: { MATCHED_COUNT: 3, MONEY: 5_000 },
};

const ERROR = {
  WINNING_NUMBER_STRING_TYPE:
    "[ERROR] 당첨 번호는 공백 없이 숫자와 쉼표로만 입력해주세요",
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
Object.freeze(RANK);

export default { ERROR, RANK };
