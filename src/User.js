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
            const MONEY = await Console.readLineAsync(
                `${CONSTANT.MONEY_INPUT_ASK}\n`
            );
            if (Number(MONEY) % 1000 != 0) throw new Error(CONSTANT.ERROR);
            this.#money = MONEY;
        } catch (e) {
            Console.print(e.message);
            await this.setMoney();
        }
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
