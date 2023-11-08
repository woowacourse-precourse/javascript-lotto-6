import { Random } from "@woowacourse/mission-utils";

class LottoGenerator {
    /**
     * @type numbers[]
     */
    #generateLotto = [];

    generateRandomNumbers(quantity) {
        for (let count = 0; count < quantity; count++) {
            this.#generateLotto.push((Random.pickUniqueNumbersInRange(1, 45, 6)).sort((a, b) => a - b));
        }
        return this.#generateLotto
    }
}

export default LottoGenerator;