import { ERROR } from "./constants/messages";
import { AMOUNT } from "./constants/values";
import { Console } from "@woowacourse/mission-utils";

class Purchase { //예외처리 및 값 저장
    #amount;

    constructor(amount) {
        this.#amount = amount;
        this.validate(amount);
    }

    validate(amount) {
        this.validateNumber(amount);
        this.validateAmount(amount);
    }

    validateNumber(amount) {
        const isNumber = isNaN(amount);
        try {
            if (isNumber) throw new Error(ERROR.PURCHASE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isNumber;
    }

    validateAmount(amount) {
        const isRightAmount = amount % AMOUNT.UNIT !== 0;
        try {
            if (isRightAmount) throw new Error(ERROR.PURCHASE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isRightAmount;
    }

    getQuantity() { //로또 수량
        return parseInt(this.#amount / AMOUNT.UNIT);
    }
}

export default Purchase;