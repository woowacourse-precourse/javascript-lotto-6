import { ERROR_MESSAGE } from '../data/message.js';

class Amount {
    constructor(amount) {
        this.amount = amount;
        Amount.#isCheckNumber(amount);
        Amount.#isCheckThousand(amount);
        Amount.#isCheckProperRange(amount);
    }

    static #isCheckNumber(amount) {
        if(isNaN(amount)) {
            throw new Error('[ERROR] 숫자를 입력해야합니다.');
        }

        return amount;
    }

    static #isCheckThousand(amount) {
        if(+amount % 1000 !== 0) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_THOUSAND_ERROR}`);
        }

        return amount;
    }

    static #isCheckProperRange(amount) {
        if(+amount < 1000 || +amount > 20000) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_RANGE_ERROR}`);
        }

        return amount;
    }
}

export default Amount;