import { ERROR, AMOUNT } from "./constant";

class Purchase { //예외처리 및 값 저장
    #amount;

    constructor(amount) {
        this.#validate(amount);
        this.#amount = amount;
    }

    #validate(amount) {
        if (isNaN(amount)) throw new Error(ERROR.PURCHASE);
        if (amount % AMOUNT.UNIT !== 0) throw new Error(ERROR.PURCHASE);
    }


    getQuantity() { //로또 수량
        return parseInt(this.#amount / AMOUNT.UNIT);
    }
}

export default Purchase;