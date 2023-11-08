const ERROR_MESSAGE = Object.freeze({
  LOTTO_IN_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_WINNING_NUMBER: '[ERROR] 당첨번호가 잘못된 형식입니다.',
  INVALID_BONUS_NUMBER: '[ERROR] 보너스번호가 잘못된 형식입니다.',
  GIVE_BONUS_NUMBER: '[ERROR] 보너스 번호를 입력해주세요',
  CHECK_RESULT_FIRST: '[ERROR] 결과를 먼저 확인해주세요',
  INVALID_MONEY: '[ERROR] 구매 금액은 최소 1000이상의 양의 정수여야 합니다.',
  LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NO_OVERLAP: '[ERROR] 로또 번호에 중복된 숫자가 있을 수 없습니다.',
  LOTTO_NO_STRING: '[ERROR] 로또 번호에 문자가 있을 수 없습니다.',
});

export default ERROR_MESSAGE;
