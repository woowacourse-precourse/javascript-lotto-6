import {Console, MissionUtils} from "@woowacourse/mission-utils";
import {LOTTO_NUMBER} from "./constants/policy.js";

class CheckManager {
    #ranks

    constructor(luckyNumber, bonusNumber, tryCount) {
        this.#ranks = this.#checkRanks(luckyNumber, bonusNumber, this.#publishLottos(tryCount))
    }

    #publishLottos(count) {
        return new Array(count).fill('').map(v => {
            const publishLotto = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_NUMBER.startNumber, LOTTO_NUMBER.endNumber, LOTTO_NUMBER.lottoLength);
            Console.print(publishLotto.sort((a, b) => a - b).toString())
            return publishLotto
        });
    }

    #checkRanks(luckyNumber, bonusNumber, randomPublishLottos) {
        return randomPublishLottos.map(randomPublishLotto => {
            const differentCount = this.#checkLuckyNumber(luckyNumber, randomPublishLotto)
            const isBonus = this.#checkBonus(bonusNumber, randomPublishLottos)
            switch (differentCount) {
                case 0:
                    return 1
                case 1:
                    if (isBonus) {
                        return 2
                    }
                    return 3
                default:
                    return differentCount + 2
            }
        })
    }

    #checkLuckyNumber(luckyNumber, randomPublishLotto) {
        let differentCount = 6;
        randomPublishLotto.forEach((number) => {
            if (luckyNumber.includes(number)) {
                differentCount--;
            }
        });
        return differentCount;
    }

    #checkBonus(bonusNumber, randomPublishLotto) {
        return randomPublishLotto.includes(bonusNumber);
    }
}

export default CheckManager