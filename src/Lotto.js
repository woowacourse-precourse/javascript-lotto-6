import { ERROR } from "./utils/Define";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error(`${ERROR.HEAD} ${ERROR.NOT_INPUT_SIX_NUMBER}`);
        }
        if (new Set(numbers).size !== 6) {
            throw new Error(`${ERROR.HEAD} ${ERROR.DUPLICATE_LOTTO_NUMBER}`);
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