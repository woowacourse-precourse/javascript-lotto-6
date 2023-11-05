import { ERROR } from "../constants/messages";
import { AMOUNT } from "../constants/values";
import { Console } from "@woowacourse/mission-utils";

function getPurchaseAmount(amount) {
    return parseInt(amount / AMOUNT.UNIT);
}

class Purchase { //예외처리 및 값 저장
    #amount;
    pass;

    constructor(amount) {
        this.#amount = amount;
        this.#validate();
    }

    #validate() {
        try {
            this.pass = true;
            if (isNaN(this.#amount)) throw new Error(ERROR.AMOUNT_NUMBER);
            if (this.#amount % AMOUNT.UNIT !== 0) throw new Error(ERROR.AMOUNT_UNIT);
        }
        catch (error) {
            this.pass = false;
            Console.print(error.message);
        } 
    }
}

export { getPurchaseAmount, Purchase };