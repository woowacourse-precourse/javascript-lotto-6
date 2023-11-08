class MoneyValidator {
    static isPositiveInt(money) {
        const positiveIntRegex = new RegExp(/^[1-9]\d*$/);
        if (!positiveIntRegex.test(money))
            throw new Error("[ERROR] 구입 금액은 양의 정수입니다.");
    }

    static isDivisibleBy1000(money) {
        if (money % 1000 !== 0)
            throw new Error("[ERROR] 로또는 1,000원 단위로 구입할 수 있습니다.");
    }

    static isValidMoney(money) {
        this.isPositiveInt(money);
        this.isDivisibleBy1000(money);
    }
}

export default MoneyValidator;