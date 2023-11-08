import ErrorMessage from "../constant/ErrorMessage.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        const set = new Set(numbers);
        if (!numbers.every(num => (num >= 1 && num <= 45))) {
            throw new Error(ErrorMessage.LOTTO_NUMBER_RANGE);
        }
        if (numbers.length !== 6) {
            throw new Error(ErrorMessage.LOTTO_NUMBER_COUNT);
        }
        if (set.size !== 6) {
            throw new Error(ErrorMessage.LOTTO_NUMBER_NOT_DUPLICATE);
        }
    }

    getNumbers() {
        return this.#numbers;
    }
}

export default Lotto;