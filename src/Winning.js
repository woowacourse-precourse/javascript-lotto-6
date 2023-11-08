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
            const BONUS = await Console.readLineAsync(
                `\n${CONSTANT.BONUS_INPUT_ASK}\n`
            );
            if (
                !(Number(BONUS) >= 1 && Number(BONUS <= 45)) ||
                this.#winningLotto.getNum().includes(Number(BONUS))
            )
                throw new Error(CONSTANT.ERROR);
            this.#bonus = Number(BONUS);
        } catch (e) {
            Console.print(e.message);
            await this.setBonus();
        }
    }

    getBonus() {
        return this.#bonus;
    }
}

export default Winning;
