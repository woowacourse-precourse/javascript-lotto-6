import CheckMoney from "./Validation/Purchase.js";

export default class Lottos {
    constructor(money) {
        this.validate(money);
        this.value = money
        this.count = money / 1000
    }

    validate(money) {
        CheckMoney.checkPurchaseMoney(money);
    }
}