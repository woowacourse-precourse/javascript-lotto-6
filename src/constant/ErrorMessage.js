const ErrorMessage= Object.freeze({
    PURCHASE_UNIT_IS_1000 : '[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.',
    LOTTO_NUMBER_RANGE : '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    LOTTO_NUMBER_COUNT : '[ERROR] 로또 번호는 6개여야 합니다.',
    BONUS_NUMBER_RANGE : '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    BONUS_NUMBER_NOT_DUPLICATE : '[ERROR] 보너스 번호는 로또 번호와 중복되지 않아야합니다.',
    LOTTO_NUMBER_NOT_DUPLICATE: '[ERROR] 로또 번호는 중복되지 않아야합니다.'
})

export default ErrorMessage;