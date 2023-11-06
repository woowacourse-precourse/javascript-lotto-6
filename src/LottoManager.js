import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

class LottoManager {
    #amount;
    #lottos;

    constructor(amount) {
        this.#amount = amount;
        this.#lottos = [];
    }

    generateLottos() {
        for (let i = 0; i < this.#amount; i++) {
            const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            this.#lottos.push(new Lotto(numbers));
        }
    }

    getLottos() {
        return this.#lottos;
    }
}

export default LottoManager;