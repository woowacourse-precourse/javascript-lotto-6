import Constants from "../constants/Constants.js";
import ErrorMessage from "../constants/ErrorMessage.js";

class ScoreMyLottos {
    #MY_LOTTO;
    #ANSWER;
    #BONUS;
    #RESULT = [...Constants.SCORE_BOARD];
    #EARNING;

    constructor(Lottos, Answer, Bonus) {
        this.#MY_LOTTO = Lottos;
        this.#ANSWER = Answer;
        this.#BONUS = Bonus;
        this.checkLotto(Lottos);
        this.countEarning();
        this.bonusValidator(Answer, Bonus);
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
        const EARNING = this.#RESULT.reduce((acc, VALUE, INDEX) => {
           return acc + (Constants.PRICE_BOARD[INDEX] * VALUE);
        },0);
        this.#EARNING = (EARNING / (this.#MY_LOTTO.length * Constants.LOTTO_PRICE) * 100).toFixed(Constants.EARNING_RADIX_POINT);
    }

    bonusValidator(Answer, Bonus) {
        if (Answer.includes(Bonus)) throw new Error(ErrorMessage.BONUS_ANSWER_DUPLICATE);
    }
    getResult() {
        return this.#RESULT;
    }

    getEarning() {
        return this.#EARNING;
    }
}

export default ScoreMyLottos;