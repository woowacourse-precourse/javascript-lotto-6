import { ERROR } from "./constants/messages";
import { AMOUNT } from "./constants/values";
import { Console } from "@woowacourse/mission-utils";

class Purchase { //예외처리 및 값 저장
    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    validate(amount) {
        this.validateNumber();
        this.validateAmount();
    }

    validateNumber() {
        const isNumber = isNaN(this.#amount);
        try {
            if (isNumber) throw new Error(ERROR.PURCHASE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isNumber;
    }

    validateAmount() {
        const isRightAmount = this.#amount % AMOUNT.UNIT !== 0;
        try {
            if (isRightAmount) throw new Error(ERROR.PURCHASE);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isRightAmount;
    }

    getQuantity() {
        return parseInt(this.#amount / AMOUNT.UNIT);
    }
}

export default Purchase;