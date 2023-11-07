export const Message = Object.freeze({
  INPUT_PURCHASING_AMOUNT: '구입금액을 입력해 주세요.',
  COUNT_PURCHASING_AMOUNT: '개를 구매했습니다.',
  INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  RESULT_STRING: `\n당첨통계\n---`,

  FIFTH: '3개 일치 (5,000원) - ',
  FOURTH: '4개 일치 (50,000원) - ',
  THIRD: '5개 일치 (1,500,000원) - ',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST: '6개 일치 (2,000,000,000원) - ',

  PRINT_RATE: '총 수익률은 ',

  error: {
    NOT_NUMBER: '[ERROR] 숫자형태로 입력해주세요.',
    NOT_ONETHOUSAND: '[ERROR] 1000원 단위로 입력해주세요.',
    NOT_SIX_LENGTH:
      '[ERROR] 로또 번호는 쉼표(,)로 구분해서 6개로 입력해주세요.',
    NOT_RANGE: '[ERROR] 1~45 사이의 숫자를 입력해주세요.',
    NOT_UNIQUE: '[ERROR] 중복된 값이 존재합니다 다시 입력해주세요.',
    INCLUDES_BLANK: '[ERROR] 입력에 공백이 존재합니다',
  },
});
