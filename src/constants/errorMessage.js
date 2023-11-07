const MONEY_ERROR = Object.freeze({
  string_error: "[ERROR] 문자가 포함되어 있습니다.",
  space_error: "[ERROR] 공백이 입력되어 있습니다.",
  amount_error: "[ERROR] 1000원 단위 숫자만 입력해주세요.",
});

const WINNING_ERROR = Object.freeze({
  error: "[ERROR] 로또 번호는 1 이상 45 이하 숫자 6개여야 합니다.",
});

const BONUS_ERROR = Object.freeze({
  space_error: "[ERROR] 공백이 입력되어 있습니다.",
  point_error: "[ERROR] 소수점이 입력되었습니다.",
  string_error: "[ERROR] 문자가 포함되어 있습니다.",
  range_error: "[ERROR] 1 이상 45 이하의 숫자만 입력해주세요.",
  dulicate_error: "[ERROR] 당첨 번호와 중복된 번호가 있습니다.",
});

export { MONEY_ERROR, WINNING_ERROR, BONUS_ERROR };
