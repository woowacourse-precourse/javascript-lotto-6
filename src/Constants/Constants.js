const LOTTO_MESSAGE = Object.freeze({
  INPUT_PRICE: '구입금액을 입력해 주세요.\n',
  BUY_LOTTO: (lotto) => `\n${lotto}개를 구매했습니다.`,
  INPUT_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS: '보너스 번호를 입력해주세요\n',
  STATISTICS_MESSAGE: '당첨 통계\n---',
  MATCHES_3: '3개 일치 (5,000원) - ',
  MATCHES_4: '4개 일치 (50,000원) - ',
  MATCHES_5: '5개 일치 (1,500,000원) - ',
  MATCHES_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000)원',
  MATCHES_6: '6개 일치 (2,000,000,000원) - ',
  LOTTO_STATISTICS: '총 수익률은',
  PERCENTAGE: '%입니다.',
});

const ERROR_MESSAGE = Object.freeze({
  NOT_THOUSANDS: '[ERROR] 금액은 1,000 단위로 입력해주세요.',
  NOT_NUMBERS: '[ERROR] 1 이상의 숫자로 입력해주세요',
  INPUT_NOTHING: '[ERROR] 값을 입력해주세요.',
  NOT_LOTTO_NUM: '[ERROR] 로또 번호는 1부터 45 사이의 숫자로 입력해주세요.',
  NOT_SIX: '[ERROR] 로또 번호는 6개의 숫자를 쉼표(,)로 구분하여 입력해주세요.',
  NOT_BOMUS_NUM:
    '[ERROR] 보너스 번호는 1부터 45 사이의 숫자를 1개만 입력해주세요.',
});

const NUMBERS = {
  MIN_LOTTO: 1,
  MAX_LOTTO: 45,
  LOTTO_PRICE: 1000,
  LOTTO_SELECT_NUM: 6,
};
export { LOTTO_MESSAGE, ERROR_MESSAGE, NUMBERS };
