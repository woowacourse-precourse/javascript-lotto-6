//입력받은 로또와 일치하는지 비교하는곳 -> 당첨의 조건 및 보상을 담는 클래스
/**
 * 
 * 애플리케이션의 정보, 데이터를 나타냅니다. 
 * 일반적으로 애플리케이션에서 필요한 데이터들과 
 * 들어오는 데이터의 추가, 관리, 삭제 등의 요청이 구현되어 있습니다.

Model의 범주는 아키텍쳐에 따라 달라지는데 javascript의 객체일수도 있고,
서버의 API로 받는 데이터일수도 있고, 
서버에 있는 DB일 수도 있습니다.
 */
import ErrorMessage from "../constant/ErrorMessage.js";

class WinningLotto{
    #winningnumbers;
    // #bonusNumber;

    constructor(winningnumbers) {
        this.#validate(winningnumbers);
        this.#winningnumbers = winningnumbers;
        // this.#bonusNumber = bonusNumber;
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
