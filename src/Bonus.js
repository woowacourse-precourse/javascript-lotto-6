import { ERROR } from "./constants/messages";
import { Console } from "@woowacourse/mission-utils";


class Bonus { //예외처리 및 값 저장
    #bonus;
    
    constructor(numbers ,bonus) {
        this.#bonus = bonus;
        this.validate(numbers, bonus);
    }

    validate(numbers, bonus) {
        this.validateRange(bonus);
        this.validateDuplicate(numbers);
        this.validateNumber(bonus);
    }

    validateRange() {
        const isRightRange = bonus < 1 || bonus > 45;
        try {
            if (isRightRange) throw new Error(ERROR.BONUS_RANGE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isRightRange;
    }

    validateDuplicate(numbers, bonus) {
        const isDuplicate = numbers.includes(bonus);
        try {
            if (isDuplicate) throw new Error(ERROR.BONUS_DUPLICATE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isDuplicate;
    }

    validateNumber(bonus) {
        const isNumber = isNaN(bonus);
        try {
            if (isNumber) throw new Error(ERROR.BONUS_INCLUDE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isNumber;
    }

    getBonusNumber() {
        return this.#bonus;
    }
}

export default Bonus;