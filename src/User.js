class User {
    #money;
    #userLotto;

    constructor() {
        this.#money = 0;
        this.#userLotto = [];
    }

    setMoney(money) {
        this.#money = money;
    }
    getMoney() {
        return this.#money;
    }

    setUserLotto(Lotto) {
        this.#userLotto.push(Lotto);
    }
    getUserLotto() {
        return this.#userLotto;
    }

    getAmount() {
        return Number(this.#money / 1000);
    }
}

export default User;
