import {MissionUtils} from "@woowacourse/mission-utils";

class MyLottos {
    #MY_LOTTO;
    #ANSWER;
    #BONUS;
    #RESULT = [0, 0, 0, 0, 0];
    #EARNING;
    #COIN

    constructor(COIN) {
        this.#MY_LOTTO = this.makeLottoArray(COIN);
        this.#COIN = COIN;
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
            if (this.#ANSWER.includes(v)) {
                cnt++;
            }
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
        return (earning / (this.#MY_LOTTO.length * 1000) * 100).toFixed(1);
    }

    makeLottoArray(LOTTO_NUM) {
        let my_lotto_arr = [];
        while (my_lotto_arr.length !== LOTTO_NUM) {
            my_lotto_arr.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
        }
        return my_lotto_arr;
    };

    count() {
        this.checkLotto(this.#MY_LOTTO);
    }

    getResult() {
        return this.#RESULT;
    }

    getEarning() {
        this.#EARNING = this.countEarning();
        return this.#EARNING;
    }

    setAnswer(Answer) {
        this.#ANSWER = Answer;
    }

    setBonus(Bonus) {
        this.#BONUS = Bonus;
    }

    getMyLottos() {
        return this.#MY_LOTTO;
    }

    getCoin() {
        return this.#COIN;
    }
}

export default MyLottos;