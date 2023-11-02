const MESSAGE = {
    PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
    PURCHASE_COUNT: '개를 구매했습니다.',
    WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
    RESULT_INFO: '당첨 통계',
    RESULT_THREE: '3개 일치 (5,000원) - ',
    RESULT_FOUR: '4개 일치 (50,000원) - ',
    RESULT_FIVE: '5개 일치 (1,500,000원) - ',
    RESULT_FIVE_BOUNS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    RESULT_SIX: '6개 일치 (2,000,000,000원) - ',
    RESULT_RATE: '총 수익률은',
}

const ERROR_MESSAGE = {
    AMOUT_NUMBER_ERROR: '[ERROR] 숫자를 입력해야 합니다.',
    AMOUT_THOUSAND_ERROR: '[ERROR] 1,000원 단위로 구매가 가능합니다.',
    AMOUT_RANGE_ERROR: '[ERROR] 1,000원 ~ 20,000 사이로만 구매가 가능합니다.',
    NUMBER_DUPLICATED_ERROR: '[ERROR] 번호가 중복이 되면 안됩니다.',
    NUMBER_RANGE_ERROR: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    NUMBER_LEGNTH_ERROR: '[ERROR] 총 6개의 숫자를 적어야 합니다.',
}

export { MESSAGE, ERROR_MESSAGE };