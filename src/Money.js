import { ERROR } from "./constants/messages";
import { Console } from "@woowacourse/mission-utils";

class Money {
    #money;

    constructor(money) {
        this.#money = Number(money);
        this.#validate();
    }

    #validate() {
        this.checkNumber();
        this.checkUnit();
    }

    checkNumber() {
        try {
            if (isNaN(this.#money)) throw new Error(ERROR.MONEY_NUMBER);
        }
        catch (error) {
            Console.print(error.message);
        } 
        finally {
            //숫자를 재입력할 Console.readLine()함수 
        }
    }

    checkUnit() {
        try {
            if (this.#money % 1000 !== 0) throw new Error(ERROR.MONEY_UNIT);
        }
        catch (error) {
            Console.print(error.message);
        } 
        finally {
            //숫자를 재입력할 Console.readLine()함수 
        }
    }

    getPurchaseAmount() {
        return this.#money;
    }
}

export default Money;