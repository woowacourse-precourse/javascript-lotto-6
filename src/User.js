import { Console } from "@woowacourse/mission-utils";
import { CONSTANT } from "./Constant.js";

class User {
    #money;
    #userLotto;

    constructor() {
        this.#money = 0;
        this.#userLotto = [];
    }

    async setMoney() {
        try {
            const money = await Console.readLineAsync(
                `${CONSTANT.MONEY_INPUT_ASK}\n`
            );
            this.#validateMoney(money);
            this.#money = Number(money);
        } catch (e) {
            Console.print(e.message);
            await this.setMoney();
        }
    }
    #validateMoney(money) {
        if (Number(money) % 1000 != 0) throw new Error(CONSTANT.ERROR);
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
