const INFO_MESSAGES = Object.freeze({
  AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_AMOUNT: '[ERROR] 1,000원 단위의 금액으로 입력해주세요.',
  OUT_OF_RANGE: '[ERROR] 범위가 벗어납니다. 1부터 45 사이 숫자로 입력해주세요.',
  NUMBER_OF_NUMBERS:
    '[ERROR] 개수가 맞지 않습니다. 6개의 당첨 번호를 입력해주세요.',
  DUPLICATE_NUMBERS:
    '[ERROR] 중복된 번호가 있습니다. 서로 다른 당첨 번호를 입력해주세요.',
});

export { INFO_MESSAGES, ERROR_MESSAGES };
