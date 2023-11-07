class PayMoney {
    
    constructor(money){
        this.validatePayMoney(money);
        this.money = money
    }
    validatePayMoney(money) {
        if (!/^[1-9]\d{3,}$/.test(money)) {
            throw new Error("[ERROR] 구매 금액은 4자리 이상의 자연수만 입력할 수 있습니다.");
        }
        if (Number(money)%1000 !==0) {
            throw new Error("[ERROR] 구매 금액은 1000원 단위로만 입력할 수 있습니다.")
        }
    }

    getMoney() {
        return this.money;
    }
}

export default PayMoney;
