import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

class LottoManager {
    constructor(amount) {
        this.amount = amount;
        this.lottos = [];
    }

    generateLotto() {
        for (let i = 0; i < this.amount; i++) {
            const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            console.log(numbers);
            this.lottos.push(new Lotto(numbers));
        }
    }
}

export default LottoManager;