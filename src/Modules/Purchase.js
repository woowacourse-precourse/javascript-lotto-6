import { ERROR } from "../constants/messages";
import { AMOUNT } from "../constants/values";
import { Console } from "@woowacourse/mission-utils";

function getPurchaseAmount(amount) {
    return parseInt(amount / AMOUNT.UNIT);
}

class Purchase { //예외처리 및 값 저장
    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    validateNumber() {
        const isNumber = isNaN(this.#amount);
        try {
            if (isNumber) throw new Error(ERROR.AMOUNT_NUMBER);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isNumber;
    }

    validateAmount() {
        const isRightAmount = this.#amount % AMOUNT.UNIT !== 0;
        try {
            if (isRightAmount) throw new Error(ERROR.AMOUNT_UNIT);
        }
        catch (error) {
            Console.print(error.message);
        }
        return isRightAmount;
    }
}

export { getPurchaseAmount, Purchase };