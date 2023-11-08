import { Random } from "@woowacourse/mission-utils";
import Output from "../View/Output.js";

class LottoGenerator {
    /**
     * @type numbers[]
     */
    #generateLotto = [];
    
    generateRandomNumbers(quantity) {
        const output = new Output();
        for (let count = 0; count < quantity; count++) {
            this.#generateLotto.push((Random.pickUniqueNumbersInRange(1, 45, 6)).sort((a, b) => a - b));
        }
        output.printLotto(this.#generateLotto);
        return this.#generateLotto
    }
}

export default LottoGenerator;