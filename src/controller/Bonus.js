import { ERROR_MESSAGE } from '../data/message.js';

class Bonus {
    constructor(bonus, numbers) {
        this.bonus = bonus;
        this.#isCheckNumber(bonus);
        this.#isCheckProperNumberRange(bonus);
        this.#isCheckDuplicate(bonus, numbers);
    }

    #isCheckNumber(bonus) {
        if(!bonus || isNaN(bonus)) {
            throw new Error(`${ERROR_MESSAGE.AMOUT_NUMBER_ERROR}`);
        }
    }

    #isCheckProperNumberRange(bonus) {
        if(+bonus < 1 || +bonus > 45) {
            throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE_ERROR}`);
        }
    }

    #isCheckDuplicate(bonus, numbers) {
        if(numbers.includes(bonus)) {
            throw new Error(`${ERROR_MESSAGE.BONUS_DUPLICATED_ERROR}`);
        }
    }
    
}

export default Bonus;