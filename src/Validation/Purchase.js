export default class CheckMoney {
    static checkPurchaseMoney(money) {
        this.checkInputMoneyIsNumber(money);
        this.checkPurchaseAmountOnUnitValueOf1000Won(money);
    }

    // 입력한 금액이 숫자
    static checkInputMoneyIsNumber(input) {
        if (isNaN(Number(input))) {
            throw new Error ('[ERROR] 숫자만 입력 가능합니다.')
        } return true;
    }

    // 입력한 금액이 1000원으로 나누었을때 정수로 반환
    static checkPurchaseAmountOnUnitValueOf1000Won(input) {
        if (! Number.isInteger(input/1000)) {
            throw new Error ('[ERROR] 1,000원 단위로 구매 가능합니다.')
        } return true;
    }
}