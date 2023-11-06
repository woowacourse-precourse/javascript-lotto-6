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

    }

    #validateBonusNumber(bonus) {

    }
}