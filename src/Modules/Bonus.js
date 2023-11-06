import { ERROR } from "../constants/messages";
import { Console } from "@woowacourse/mission-utils";


class Bonus { //예외처리 및 값 저장
    #bonus;
    
    constructor(numbers ,bonus) {
        this.numbers = numbers;
        this.#bonus = bonus;
    }

    validateRange() {
        const isRightRange = this.#bonus < 1 || this.#bonus > 45;
        try {
            if (isRightRange) throw new Error(ERROR.BONUS_RANGE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isRightRange;
    }

    validateDuplicate() {
        const isDuplicate = this.numbers.includes(this.#bonus);
        try {
            if (isDuplicate) throw new Error(ERROR.BONUS_DUPLICATE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isDuplicate;
    }

    validateNumber() {
        const isNumber = isNaN(this.#bonus);
        try {
            if (isNumber) throw new Error(ERROR.BONUS_INCLUDE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isNumber;
    }
}

export default Bonus;