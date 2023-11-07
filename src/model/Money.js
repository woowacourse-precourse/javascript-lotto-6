import { isMoney, isDividedByLottoPrice } from "../validator/moneyValidate.js";
import { LOTTO_PRICE } from "../constants/LottoConstants.js";

class Money {
    #money;

    constructor(money){
        this.#validate(money);
        this.#money = money;
    }

    #validate(money){
        isMoney(money);
        isDividedByLottoPrice(money);
    }

    buyLottos(){
        return this.#money / LOTTO_PRICE;
    }
}

export default Money;