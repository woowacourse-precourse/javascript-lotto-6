class RankModel {
    #ranking;
    #standard;
    #prize;
    #winningAmount;

    constructor(ranking, standard, prize) {
        // 초기화
        this.#ranking = ranking;
        this.#standard = standard;
        this.#prize = prize;
        this.#winningAmount = 0;
    }
    // 두 변수 비교
    #meetStandard(count, hasBonus) {
        const { numbers, bonus } = this.#standard;

        return numbers === count && bonus === hasBonus;
    }

    win(count, hasBonus) {
        if (this.#meetStandard(count, hasBonus)) {
            this.#winningAmount += 1;
        }
    }

    getWinnings() {
        return this.#prize * this.#winningAmount;
    }

    get() {
        return [this.#standard, this.#prize, this.#winningAmount];
    }
}

export default RankModel;