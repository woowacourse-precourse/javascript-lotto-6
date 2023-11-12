import { ERROR } from "./constant";
import Lotto from "./Lotto";

class Bonus { //예외처리 및 값 저장
    /** 
     * @type {Lotto}
     * @type {number}
     */
    #numbers;
    #bonus;

    /** 
     * @param {Lotto} numbers
     * @param {number} bonus
     */
    constructor(numbers, bonus) {
        this.#validate(numbers, bonus);
        this.#bonus = bonus;
        this.#numbers = numbers;
    }

    /** 
     * @param {Lotto} numbers
     * @param {number} bonus
     */
    #validate(numbers, bonus) {
        if (bonus < 1 || bonus > 45) throw new Error(ERROR.BONUS_RANGE);
        if (numbers.getWinningNumbers().includes(bonus)) throw new Error(ERROR.BONUS_DUPLICATE);
        if (isNaN(bonus)) throw new Error(ERROR.BONUS_INCLUDE);
    }

    getBonusNumber() {
        return this.#bonus;
    }

    getWinningNumbers() {
        return this.#numbers;
    }
}

export default Bonus;
