import { ERROR } from './Constant.js'

class WinningNumbers{
    #numbers;
    #bonus;

    constructor(numbers) {
        this.#validateNumbers(numbers);
        this.#numbers = numbers;
    }

    addBonusNumber(bonus) {
        this.#validateBonusNumber(bonus);
        this.#bonus = bonus;
    }

    #validateNumbers(numbers) {
        if (Number.isNaN(numbers)) {
            throw new Error(ERROR.WINNING_NUMBER_IS_NAN);
        }
    }

    #validateBonusNumber(bonus) {

    }
}