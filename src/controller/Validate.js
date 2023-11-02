import { ERROR_MESSAGE } from '../data/message.js';

class Validate {
    isCheckNumber(amount) {
        if(!amount || isNaN(amount)) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_NUMBER_ERROR}`);
        }

        return true;
    }

    isCheckThousand(amount) {
        if(amount % 1000 !== 0) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_THOUSAND_ERROR}`);
        }

        return true;
    }

    isCheckProperRange(amount) {
        if(amount < 1000 || amount > 20000) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_RANGE_ERROR}`);
        }

        return true;
    }
}

export default Validate;