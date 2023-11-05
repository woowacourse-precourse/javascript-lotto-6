class MoneyValidator {
    static isPositiveInt(money) {
        const regex = new RegExp(/^[1-9]\d*$/);
        if (!regex.test(money))
            throw new Error("[ERROR] 구입 금액은 양의 정수입니다.");
    }

    static isDivisibleBy1000(money) {
        if (money % 1000 != 0)
            throw new Error("[ERROR] 로또는 1,000원 단위로 구입할 수 있습니다.");
    }
}

export default MoneyValidator;