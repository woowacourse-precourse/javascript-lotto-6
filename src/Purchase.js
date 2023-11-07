class Purchase {
    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    #validate(amount) {
        if (!this.isValidAmount(amount)) {
            throw new Error("[ERROR] 유효한 구입금액을 입력해주세요.");
        }
    }

    isValidAmount(amount) {
        return (
            !isNaN(amount) &&
            amount >= 1000 &&
            amount <= 1000000 &&
            amount % 1000 === 0
        );
    }

    getAmount() {
        return this.#amount;
    }
}

export default Purchase;
