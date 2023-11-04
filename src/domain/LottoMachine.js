/**
 * @description 로또를 머신에서 비교해서 당첨인지 확인
 */
export class LottoMachine {
    /**
     * @type {numbers[]}
     */
    #winningNumbers
    /**
     * @type {number}
     */
    #bonusNumber
    /**
     * @type {Lotto[]}
     */
    #boughtLottos

    /**
     *
     * @param {numbers[]} winningNumbers
     * @param {number} bonusNumber
     * @param boughtLottos
     */
    constructor(winningNumbers, bonusNumber, boughtLottos) {
        this.#winningNumbers = winningNumbers
        this.#bonusNumber = bonusNumber
        this.#boughtLottos = boughtLottos
    }

    getResult() {

    }

    makeResultDto() {
    }
}