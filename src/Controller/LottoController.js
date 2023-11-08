import Lotto from "../Model/Lotto.js";
import RandomNum from "../Model/RandomNum.js";

class LottoController {
    #LottoController;

    constructor() {
        this.#LottoController = [];
    }

    set(money) {
        while (this.#LottoController.length < money / 1000) {
            this.#createLotto();
        }
    }

    get() {
        return this.#LottoController;
    }

    #createLotto() {
        const lotto = new Lotto(RandomNum.create());
        this.#LottoController.push(lotto);
    }

    checkWinning(winningLotto, rank) {
        this.#LottoController.forEach((lotto) => {
            const [count, hasBonus] = winningLotto.compareWith(lotto);
            rank.choose(count, hasBonus);
        });
    }

    calculateWinnings(rank) {
        const totalWinnings = rank.findTotalWinnings();
        const winningsRate =
            (totalWinnings / (this.#LottoController.length * 1000)) * 100;

        return winningsRate;
    }
}

export default LottoController;