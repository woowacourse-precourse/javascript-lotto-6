import { ERROR_MESSAGE } from '../data/message.js';

class Amount {
    constructor(amount) {
        this.amount = amount;
        this.#isCheckNumber(amount);
        this.#isCheckThousand(amount);
        this.#isCheckProperRange(amount);
    }

    #isCheckNumber(amount) {
        if(!amount || isNaN(amount)) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_NUMBER_ERROR}`);
        }
    }

    #isCheckThousand(amount) {
        if(amount % 1000 !== 0) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_THOUSAND_ERROR}`);
        }
    }

    #isCheckProperRange(amount) {
        if(amount < 1000 || amount > 20000) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_RANGE_ERROR}`);
        }
    }
}

export default Amount;