import { CONSTANT } from "./Constant.js";

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

    static compareLottoNum(userLotto, winningLotto, bonusNum) {
        let result = 0;
        winningLotto.forEach((element) => {
            if (userLotto.includes(element)) result += 1;
        });
        if (result == 5 && userLotto.includes(bonusNum))
            result = "" + result + "b";
        return result;
    }
}

export default Controller;
