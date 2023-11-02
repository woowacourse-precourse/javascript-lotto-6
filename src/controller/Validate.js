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

    isCheckDuplicate(numbers) {
        const filteredNumbers = new Set(numbers);
        if(filteredNumbers.size !== numbers.length) {
            throw new Error(`${ERROR_MESSAGE.NUMBER_DUPLICATED_ERROR}`);
        }

        return true;
    }

    isCheckProperNumberRange(num) {
        if(+num < 1 || +num > 45) {
            throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE_ERROR}`);
        }
        return true;
    }

    isCheckProperNumberLength(numbers) {
        if(numbers.length !== 6) {
            throw new Error(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
        }

        return true;
    }
}

// const validate = new Validate();
// console.log(validate.isCheckProperNumberRange([1,2,3,4,5,67]))

export default Validate;