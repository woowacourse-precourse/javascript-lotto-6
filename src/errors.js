const ErrorMessages = {
    INVALID_PURCHASE_AMOUNT: "[ERROR] 구입 금액은 1,000 단위의 정수여야 합니다",
    INVALID_LOTTO_NUMBERS_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
    DUPLICATE_LOTTO_NUMBERS: "[ERROR] 로또 번호는 중복될 수 없습니다.",
    INVALID_NUMBER_FORMAT: "[ERROR] 번호는 쉼표(,)로 구분하여 입력해야 합니다."
};

class LottoError extends Error {
    constructor(message) {
        super(message);
        this.name = "LottoError"
    }
}

export { ErrorMessages, LottoError };