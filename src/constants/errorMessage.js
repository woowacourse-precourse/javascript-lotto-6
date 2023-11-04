const MONEY_ERROR = Object.freeze({
  string_error: "[ERROR] 문자가 포함되어 있습니다.",
  space_error: "[ERROR] 공백이 입력되어 있습니다.",
  point_error: "[ERROR] 소수점이 입력되었습니다.",
  amount_error: "[ERROR] 1000원 단위로 입력해주세요.",
});

const WINNING_ERROR = Object.freeze({
  length_error: "[ERROR] 6개의 숫자를 입력해주세요",
  range_error: "[ERROR] 1 이상 45 이하의 숫자만 입력해주세요.",
  string_error: "[ERROR] 문자가 포함되어 있습니다.",
  dulicate_error: "[ERROR] 중복된 숫자가 입력되어 있습니다.",
});

const BONUS_ERROR = Object.freeze({
  space_error: "[ERROR] 공백이 입력되어 있습니다.",
  point_error: "[ERROR] 소수점이 입력되었습니다.",
  string_error: "[ERROR] 문자가 포함되어 있습니다.",
  range_error: "[ERROR] 1 이상 45 이하의 숫자만 입력해주세요.",
  dulicate_error: "[ERROR] 당첨 번호와 중복된 번호가 있습니다.",
});
export { MONEY_ERROR, WINNING_ERROR, BONUS_ERROR };
