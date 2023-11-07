import { Console } from "@woowacourse/mission-utils";

import { OUTPUT_MESSAGE } from '../data/message.js';

class UserOutput {
    constructor() {}

    static error(message) {
        return Console.print(message);
    }

    static purchaseCount(count) {
        return Console.print(`${count}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
    }

    static lottoNumber(lotto) {
        return Console.print(`[${lotto.join(', ')}]`);
    }

    static result(award) {
        if(typeof award === 'object') {
            Console.print(`${OUTPUT_MESSAGE.RESULT_INFO}\n---\n`);
            for(const value of Object.values(award)) {
                Console.print(value);
            }

            return
        }
        if(typeof award === 'string') {
            return Console.print(award);
        }
    }
}

export default UserOutput;