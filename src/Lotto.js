import {
    ERROR,
    LOTTO_NUMBER_COUNT,
    MIN_LOTTO_NUMBER,
    MAX_LOTTO_NUMBER,
    TYPE_NUMBER,
} from "./utils/Define";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== LOTTO_NUMBER_COUNT) {
            throw new Error(`${ERROR.HEAD} ${ERROR.NOT_INPUT_SIX_NUMBER}`);
        }
        if (new Set(numbers).size !== LOTTO_NUMBER_COUNT) {
            throw new Error(`${ERROR.HEAD} ${ERROR.DUPLICATE_LOTTO_NUMBER}`);
        }
        if (!numbers.every(number => typeof number === TYPE_NUMBER)) {
            throw new Error(`${ERROR.HEAD} ${ERROR.NOT_NUMBER_LOTTO_MESSAGE}`);
        }
        const isOutOfRange = numbers.some(number => number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER || !Number.isInteger(number));
        if (isOutOfRange) {
            throw new Error(`${ERROR.HEAD} ${ERROR.INVALID_LOTTO_NUMBER_RANGE}`);
        }
    }

    getNumbers() {
        return this.#numbers;
    }

    checkNumbers(winningNumbers) {
        return this.#numbers.filter(number => winningNumbers.includes(number)).length;
    }
}

export default Lotto;