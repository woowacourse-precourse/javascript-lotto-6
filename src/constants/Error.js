const ERROR = Object.freeze({
  PREFIX: '[ERROR] ',

  COMMON_INPUT: '아무것도 입력하지 않았습니다.',
  COMMON_WHITESPACE: '입력값에 공백이 있으면 안됩니다.',

  PAYMENT_THOUSAND: '결제 금액은 1000원 단위로 입력해주셔야 합니다.',
  PAYMENT_NUMBER: '결제 금액은 양의 정수만 입력해주셔야 합니다.',

  LOTTO_NUMBER: '로또 번호 또는 당첨 번호는 양의 정수만 가능합니다.',
  LOTTO_RANGE: "로또 번호 또는 당첨 번호는 '1부터 45까지'의 숫자만 가능합니다.",
  LOTTO_LENGTH:
    '로또 번호 또는 당첨 번호는 6가지의 숫자가 필요합니다. 번호의 구분은 쉼표(,)로 해주세요.',
  LOTTO_DUPLICATE: '로또 번호 또는 당첨 번호는 중복값을 가질 수 없습니다.',

  BONUS_NUMBER: "보너스 번호는 '숫자'만 입력해주셔야 합니다.",
  BONUS_RANGE: "보너스 번호는 1부터 45까지의 '숫자'만 입력해주셔야 합니다.",
  BONUS_DUPLICATE:
    '보너스 번호는 1부터 45까지의 자연수 중 당첨 번호와 중복되지 않는 값을 입력해주셔야 합니다.',
});

export default ERROR;
