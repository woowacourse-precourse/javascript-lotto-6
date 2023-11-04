class Lottory {
    #MY_LOTTO;
    #ANSWER;
    #BONUS;
    #RESULT = [0, 0, 0, 0, 0];

    constructor(Lotto, answer, Bonus) {
        this.#MY_LOTTO = Lotto;
        this.#ANSWER = answer;
        this.#BONUS = Bonus;
        this.checkLotto(Lotto);
    }

    checkLotto(Lotto) {
        Lotto.forEach(v => {
            if (this.check(v) !== 0) this.#RESULT[this.check(v) - 1]++
        });
    }

    check(ARR) {
        let cnt = 0;
        let isBonus = false;
        ARR.forEach(v => {
            if (this.#ANSWER.includes(v)) {
                cnt++;
            }
            if (v === this.#BONUS) isBonus = true;
        });
        if (cnt === 3) return 5;
        if (cnt === 4) return 4;
        if (cnt ===5 && !isBonus) return 3;
        if (cnt === 5 && isBonus) return 2;
        if (cnt ===6) return 1;
        return 0;
    }

    getAnswer() {
        return this.#RESULT;
    }
}

export default Lottory;