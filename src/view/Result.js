import { MissionUtils } from "@woowacourse/mission-utils";

import { OUTPUT_MESSAGE } from '../data/message.js';
import { REWORD } from '../data/reward.js';

class Result {
    constructor(result, rate) {
        this.result = result;
        this.rate = rate;
        this.printCount;
        this.fifth;
        this.fourth;
        this.third;
        this.second;
        this.first;
        this.printRate;
    }

    get printCount() {
        return MissionUtils.Console.print(`${OUTPUT_MESSAGE.RESULT_INFO}\n---\n`);
    }

    get fifth() {
        return MissionUtils.Console.print(`${OUTPUT_MESSAGE.RESULT_THREE} (${REWORD.FIFTH_PLACE.toLocaleString()}원) - ${this.result[3] ?? 0}개`);
    }

    get fourth() {
        return MissionUtils.Console.print(`${OUTPUT_MESSAGE.RESULT_FOUR} (${REWORD.FOURTH_PLACE.toLocaleString()}원) - ${this.result[4] ?? 0}개`);
    }

    get third() {
        return MissionUtils.Console.print(`${OUTPUT_MESSAGE.RESULT_FIVE} (${REWORD.THIRD_PLACE.toLocaleString()}원) - ${this.result[5] ?? 0}개`);
    }

    get second() {
        return MissionUtils.Console.print(`${OUTPUT_MESSAGE.RESULT_FIVE_BOUNS} (${REWORD.SECOND_PLACE.toLocaleString()}원) - ${this.result['bonus'] ?? 0}개`); 
    }

    get first() {
        return MissionUtils.Console.print(`${OUTPUT_MESSAGE.RESULT_SIX} (${REWORD.FIRST_PLACE.toLocaleString()}원) - ${this.result[6] ?? 0}개`);
    }

    get printRate() {
        return MissionUtils.Console.print(`${OUTPUT_MESSAGE.RESULT_RATE} ${this.rate}%입니다.`);
    }
}

export default Result;