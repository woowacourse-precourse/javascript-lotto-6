export class LottoDto {
    /**
     * @type {number[]}
     */
    #numbers

    /**
     *
     * @para {number[]} numbers
     */
    constructor(numbers) {
        this.#numbers = numbers
    }

    /**
     *
     * @return {number[]}
     */
    get numbers() {
        return this.#numbers
    }
}