const ERROR = Object.freeze({
  PREFIX: '[ERROR] ',

  COMMON_NOT_INPUT: '아무것도 입력하지 않았습니다.',
  COMMON_NOT_WHITESPACE: '입력값에 공백이 있으면 안됩니다.',

  PAYMENT_NOT_THOUSAND: '결제 금액은 1000원 단위로 입력해주셔야 합니다.',
  PAYMENT_NOT_NUMBER: '결제 금액은 양의 정수만 입력해주셔야 합니다.',

  WINNING_NOT_NUMBER: "당첨 번호는 '양의 정수'만 입력해주셔야 합니다.",
  WINNING_NOT_RANGE: "당첨 번호는 '1부터 45까지'의 숫자만 입력해주셔야 합니다.",
  WINNING_NOT_LENGTH:
    '당첨 번호는 1부터 45까지의 중복되지 않는 6개의 숫자를 입력해주셔야 합니다. 번호의 구분은 쉼표(,)자로 해주세요.',

  BONUS_NOT_NUMBER: "보너스 번호는 '숫자'만 입력해주셔야 합니다.",
  BONUS_NOT_RANGE: "보너스 번호는 1부터 45까지의 '숫자'만 입력해주셔야 합니다.",
  BONUS_DUPLICATE:
    '보너스 번호는 1부터 45까지의 자연수 중 당첨 번호와 중복되지 않는 값을 입력해주셔야 합니다.',
});

export default ERROR;
