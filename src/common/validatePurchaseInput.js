import { ERROR_MESSAGE } from "./OutputMessage";

class ValidatePurchaseInput{
    #price;

    constructor(price) {
        this.#validatePrice(price);
        this.#price = price;
    }

    #validatePrice(price) {
        if (price % 1000 !== 0) throw new Error(ERROR_MESSAGE.NUMBER_UNDIVEDE);
    }
}
export default ValidatePurchaseInput;