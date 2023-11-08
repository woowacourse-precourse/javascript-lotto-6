import { ERROR_MESSAGE ,LOTTO_NUM} from '../constants/message.js';

const inRange = (input) =>
    input >= LOTTO_NUM.MIN_NUMBER && input <= LOTTO_NUM.MAX_NUMBER;

const Validator = {
    unit(input) {
        if (input % 1000) {
            throw new Error(ERROR_MESSAGE.UNIT);
        }
    },

    availability(input) {
        if (input < 1000) {
            throw new Error(ERROR_MESSAGE.AVAILABILITY);
        }
    },

    numberType(input) {
        if (!Number.isInteger(input)) {
            throw new Error(ERROR_MESSAGE.NUMBER_TYPE);
        }
    },

    length(input) {
        if (input.length !== LOTTO_NUM.LENGTH) {
            throw new Error(ERROR_MESSAGE.LENGTH);
        }
    },

    range(input) {
        if (!input.every(inRange)) {
            throw new Error(ERROR_MESSAGE.RANGE);
        }
    },

    duplication(input) {
        if (new Set(input).size !== input.length) {
            throw new Error(ERROR_MESSAGE.DUPLICATION);
        }
    },
};

export default Validator;