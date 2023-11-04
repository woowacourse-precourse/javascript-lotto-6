export class LottoDto {
    /**
     * @type {Lotto[]}
     */
    #numbers

    constructor(numbers) {
        this.#numbers = numbers
    }

    get numbers() {
        return this.numbers
    }
}