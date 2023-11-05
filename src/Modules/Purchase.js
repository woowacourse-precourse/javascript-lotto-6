import { ERROR } from "../constants/messages";
import { AMOUNT } from "../constants/values";
import { Console } from "@woowacourse/mission-utils";

class Purchase { //예외처리 및 값 저장
    #amount;

    constructor(amount) {
        this.#amount = Number(amount);
        this.#validate();
    }

    #validate() {
        this.validateNumber();
        this.validateUnit();
    }

    validateNumber() {
        try {
            if (isNaN(this.#amount)) throw new Error(ERROR.AMOUNT_NUMBER);
        }
        catch (error) {
            Console.print(error.message);
        } 
        finally {
            //숫자를 재입력할 Console.readLine()함수 
        }
    }

    validateUnit() {
        try {
            if (this.#amount % AMOUNT.UNIT !== 0) throw new Error(ERROR.AMOUNT_UNIT);
        }
        catch (error) {
            Console.print(error.message);
        } 
        finally {
            //숫자를 재입력할 Console.readLine()함수 
        }
    }

    getPurchaseAmount() {
        return parseInt(this.#amount / AMOUNT.UNIT);
    }
}

export default Purchase;