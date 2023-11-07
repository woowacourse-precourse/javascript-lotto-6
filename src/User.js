import { CONSTANT } from "./Constant.js";

class User {
    constructor() {
        this.moeny = 0;
        this.userLotto = [];
    }

    setMoney(money) {
        this.money = money;
    }

    getMoney() {
        return this.money;
    }

    setUserLotto(Lotto) {
        this.userLotto.push(Lotto);
    }

    getUserLotto() {
        return this.userLotto;
    }

    getAmount() {
        if (this.money % 1000 != 0) throw new Error(CONSTANT.ERROR_MONEY_INPUT);
        return Number(this.money);
    }
}

export default User;
