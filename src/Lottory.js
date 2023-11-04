class Lottory {
    #MY_LOTTO;
    #ANSWER;
    #RESULT = [0, 0, 0, 0, 0];

    constructor(Lotto, answer) {
        this.#MY_LOTTO = (Lotto);
        this.#ANSWER = (answer);
        //this.checkLotto(Lotto);
    }

    checkLotto(Lotto) {
        Lotto.forEach(v => {

        });
    }

    check(ARR) {
        let cnt = 0;
        ARR.forEach(v => {
            if (this.#ANSWER.includes(v)) {
                cnt++;
            }
        });
        return cnt;
    }
}

export default Lottory;