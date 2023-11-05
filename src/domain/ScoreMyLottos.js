class ScoreMyLottos {
    #MY_LOTTO;
    #ANSWER;
    #BONUS;
    #RESULT = [0, 0, 0, 0, 0];
    #EARNING;

    constructor(Lottos, Answer, Bonus) {
        this.#MY_LOTTO = Lottos;
        this.#ANSWER = Answer;
        this.#BONUS = Bonus;
        this.checkLotto(Lottos);
        this.countEarning();
    }
    checkLotto(Lotto) {
        Lotto.forEach(v => {
            if (this.countingLotto(v) !== 0) this.#RESULT[this.countingLotto(v) - 1]++
        });
    }

    countingLotto(ARR) {
        let cnt = 0;
        let isBonus = false;
        ARR.forEach(v => {
            if (this.#ANSWER.includes(v)) cnt++;
            if (v === this.#BONUS) isBonus = true;
        });
        if (cnt === 3) return 5;
        if (cnt === 4) return 4;
        if (cnt === 5 && !isBonus) return 3;
        if (cnt === 5 && isBonus) return 2;
        if (cnt === 6) return 1;
        return 0;
    }
    countEarning() {
        let earning = (2000000000 * this.#RESULT[0])
            + (30000000 * this.#RESULT[1])
            + (1500000 * this.#RESULT[2])
            + (50000 * this.#RESULT[3])
            + (5000 * this.#RESULT[4]);
        this.#EARNING = (earning / (this.#MY_LOTTO.length * 1000) * 100).toFixed(1);
    }

    getResult() {
        return this.#RESULT;
    }

    getEarning() {
        return this.#EARNING;
    }
}

export default ScoreMyLottos;