import { CONSTANT } from "./Model.js";

class Controller {
    static priceToAmount(price) {
        const AMOUNT = price / CONSTANT.LOTTO_PRICE;
        if (Number.isInteger(AMOUNT)) {
            return AMOUNT;
        } else if (!Number.isInteger(AMOUNT)) {
            throw new Error(CONSTANT.ERROR_PURCHASE_INPUT);
        }
    }

    static lottoNumToArray(lottoNumStr) {
        const LOTTO_NUM_ARRAY = lottoNumStr.trim().split(",").map(Number);
        return LOTTO_NUM_ARRAY;
    }
}

export default Controller;
