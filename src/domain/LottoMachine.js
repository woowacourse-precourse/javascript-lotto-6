export class LottoMachine {
    /**
     * @type {number[]}
     */
    #winningNumbers
    /**
     * @type {number}
     */
    #bonusNumber

    /**
     *
     * @param {numbers[]} winningNumbers
     * @param {number} bonusNumber
     */
    constructor(winningNumbers, bonusNumber) {
        this.#winningNumbers = winningNumbers
        this.#bonusNumber = bonusNumber
    }
}