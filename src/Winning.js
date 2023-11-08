import { CONSTANT } from "./Constant.js";
import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";

class Winning {
    #winningLotto;
    #bonus;

    constructor() {
        this.#winningLotto = {};
        this.#bonus = 0;
    }

    async setWinning() {
        try {
            let lotto = await Console.readLineAsync(
                `${CONSTANT.LOTTO_INPUT_ASK}\n`
            );
            this.#winningLotto = new Lotto(lotto.trim().split(",").map(Number));
        } catch (e) {
            Console.print(e.message);
            await this.setWinning();
        }
    }

    getWinning() {
        return this.#winningLotto;
    }

    async setBonus() {
        try {
            const bonus = await Console.readLineAsync(
                `\n${CONSTANT.BONUS_INPUT_ASK}\n`
            );
            this.#validateBonus(bonus);
            this.#bonus = Number(bonus);
        } catch (e) {
            Console.print(e.message);
            await this.setBonus();
        }
    }
    #validateBonus(bonus) {
        if (
            !(Number(bonus) >= 1 && Number(bonus <= 45)) ||
            this.#winningLotto.getNum().includes(Number(bonus))
        )
            throw new Error(CONSTANT.ERROR);
    }

    getBonus() {
        return this.#bonus;
    }
}

export default Winning;
