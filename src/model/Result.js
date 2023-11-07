import UserOutput from '../view/UserOutput.js';

import { OUTPUT_MESSAGE } from '../data/message.js';

class Result {
    constructor(result, rate) {
        this.result = result;
        this.rate = rate;
        this.award = {
            'first': `${OUTPUT_MESSAGE.RESULT_SIX}${this.result[6] ?? 0}개`,
            'second': `${OUTPUT_MESSAGE.RESULT_FIVE_BOUNS}${this.result['bonus'] ?? 0}개`,
            'third': `${OUTPUT_MESSAGE.RESULT_FIVE}${this.result[5] ?? 0}개`,
            'fourth': `${OUTPUT_MESSAGE.RESULT_FOUR}${this.result[4] ?? 0}개`,
            'fifth': `${OUTPUT_MESSAGE.RESULT_THREE}${this.result[3] ?? 0}개`
        };
    }

    print() {
        UserOutput.result(this.award);
        UserOutput.result(`${OUTPUT_MESSAGE.RESULT_RATE} ${this.rate}%입니다.`);
    }
}

export default Result;