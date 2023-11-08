const MESSAGE = {
    MSG_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
    MSG_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
    MSG_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
    MSG_LOTTO_COUNT: '개를 구매했습니다.',
    MSG_LOTTO_STATISTIC: '당첨 통계'
};

const ERROR_MESSAGE = {
    INPUT_PURCHASE_AMOUNT_ERROR: '[ERROR] 구입 금액은 천 단위여야 합니다.',
    INPUT_WINNING_NUMBERS_ERROR: '[ERROR] 당첨 번호는 1 ~ 45의 숫자여야 합니다.',
    INPUT_MORE_WINNING_NUMBERS_ERROR: '[ERROR] 당첨 번호가 6개여야 합니다.',
    INPUT_BLANK_ERROR: '[ERROR] 값이 공백입니다.',
    INPUT_NUMBER_ERROR: '[ERROR] 값이 숫자가 아닙니다.',
    INPUT_NUMBER_DUPLICATION_ERROR: '[ERROR] 값은 중복되어서는 안됩니다.'
};

export { MESSAGE, ERROR_MESSAGE }