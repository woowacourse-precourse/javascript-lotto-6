import ErrorMessage from "../constant/ErrorMessage.js";
import { Console } from "@woowacourse/mission-utils";
class WinningLotto{
    #winningnumbers;

    constructor(winningnumbers) {
        this.#validate(winningnumbers);
        this.#winningnumbers = winningnumbers;
    }

    #validate(numbers) {
        const set = new Set(numbers);
        if (!numbers.every((num) => (num >= 1 && num <= 45))) {
            throw new Error(ErrorMessage.LOTTO_NUMBER_RANGE);
        }
        if (numbers.length !== 6) {
            throw new Error(ErrorMessage.LOTTO_NUMBER_COUNT);
        }
        if (set.size !== 6) {
            throw new Error(ErrorMessage.LOTTO_NUMBER_NOT_DUPLICATE);
        }
    }

    static validate_bonus(winningnumbers, bonusnumber){
        if (isNaN(bonusnumber) || parseInt(bonusnumber) < 1 || parseInt(bonusnumber) > 45) {
            throw new Error(ErrorMessage.BONUS_NUMBER_RANGE);
        }
        if (winningnumbers.includes(bonusnumber)) {
            throw new Error(ErrorMessage.BONUS_NUMBER_NOT_DUPLICATE);
        }
    }

    getNumbers() {
        return this.#winningnumbers;
    }

    checkMatch(lottolist, bonusNumber) {
        let  result = new Map([['3', 0],['4', 0],['5', 0], ['5+', 0],['6', 0]]);
        lottolist.forEach(lottoNumbers => {
            let matchCount = lottoNumbers.filter(num => this.#winningnumbers.includes(num));
            matchCount = matchCount.length;
            let bonus = lottoNumbers.includes(bonusNumber);
            let key = (matchCount === 5 && bonus) ? '5+' : matchCount.toString();
            if (result.has(key)){
                result.set(key, result.get(key)+1)
            }
        });
        return result
    }
}

export default WinningLotto
