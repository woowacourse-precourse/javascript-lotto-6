export class DrawResultDto {
    /**
     * @type {number}
     */
    #earningRate
    /**
     * @type {number}
     */
    #firstRank
    /**
     * @type {number}
     */
    #secondRank
    /**
     * @type {number}
     */
    #thirdRank
    /**
     * @type {number}
     */
    #forthRank
    /**
     * @type {number}
     */
    #fifthRank

    /**
     * @param {number} earningRate
     * @param {number} firstRank
     * @param {number}secondRank
     * @param {number}thirdRank
     * @param {number}forthRank
     * @param {number}fifthRank
     */
    constructor(
        earningRate,
        firstRank,
        secondRank,
        thirdRank,
        forthRank,
        fifthRank
    ) {
        this.#earningRate = earningRate
        this.#firstRank = firstRank
        this.#secondRank = secondRank
        this.#thirdRank = thirdRank
        this.#forthRank = forthRank
        this.#fifthRank = fifthRank
    }

    /**
     *
     * @return {number}
     */
    get earningRate() {
        return this.#earningRate;
    }

    /**
     *
     * @return {number}
     */
    get firstRank() {
        return this.#firstRank;
    }

    /**
     *
     * @return {number}
     */
    get secondRank() {
        return this.#secondRank;
    }

    /**
     *
     * @return {number}
     */
    get thirdRank() {
        return this.#thirdRank;
    }

    /**
     *
     * @return {number}
     */
    get forthRank() {
        return this.#forthRank;
    }

    get fifthRank() {
        return this.#fifthRank;
    }
}