const ERROR_MESSAGE = Object.freeze({
  PAYMENT_INVALID: "\n[ERROR] 1000원 단위로 입력해주세요.",
  NUMBER_FORM: "\n[ERROR] 숫자만으로 입력해주세요.",
  NUMBER_COMMA_FORM: "\n[ERROR] 숫자와 쉼표만으로 입력해주세요.",
  BLANK_FORM: "\n[ERROR] 값을 입력해주세요.",
  RANGE_INVALID: "\n[ERROR] 1부터 45 사이의 숫자로 입력해주세요",
  SIZE_INVALID: "\n[ERROR] 총 6개의 숫자를 입력해주세요.",
  DUPLICATION: "\n[ERROR] 6개의 숫자를 중복없이 입력해주세요.",
  BONUS_NUMBER_INVALID: "\n[ERROR] 당첨 번호와 중복없이 입력해주세요.",
});

export default ERROR_MESSAGE;
