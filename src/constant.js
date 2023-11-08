const INFO_MESSAGES = Object.freeze({
  AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  PURCHASED: '개를 구매했습니다.',
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_AMOUNT: '[ERROR] 1,000원 단위의 금액으로 입력해주세요.',
  OUT_OF_RANGE: '[ERROR] 범위가 벗어납니다. 1부터 45 사이 숫자로 입력해주세요.',
  COUNT_OF_NUMBERS:
    '[ERROR] 개수가 맞지 않습니다. 6개의 당첨 번호를 입력해주세요.',
  DUPLICATE_NUMBERS:
    '[ERROR] 중복된 번호가 있습니다. 서로 다른 당첨 번호를 입력해주세요.',
});

const WINNING_MESSAGES = Object.freeze({
  WINNING_STATS: '당첨 통계\n---',
  MATCHING_3: '3개 일치 (5,000원) - ',
  MATCHING_4: '4개 일치 (50,000원) - ',
  MATCHING_5: '5개 일치 (1,500,000원) - ',
  MATCHING_5_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCHING_6: '6개 일치 (2,000,000,000원) - ',
  COUNT: '개',
  PROFIT_RATE_FRONT: '총 수익률은 ',
  PROFIT_RATE_BACK: '%입니다.',
});

const WINNING_AMOUNT = Object.freeze({
  MATCHING_3: 5000,
  MATCHING_4: 50000,
  MATCHING_5: 1500000,
  MATCHING_5_BONUS: 30000000,
  MATCHING_6: 2000000000,
});

export { INFO_MESSAGES, ERROR_MESSAGES, WINNING_MESSAGES, WINNING_AMOUNT };
