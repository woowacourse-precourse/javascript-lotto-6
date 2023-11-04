import { ERROR_MESSAGE } from "./OutputMessage.js";
class Validate{
    validatePrice(price) {
        if (isNaN(price)) throw new Error(`${ERROR_MESSAGE.NUMBER_TYPE}`);
        if (price % 1000 !== 0) throw new Error(`${ERROR_MESSAGE.NUMBER_UNDIVEDE}`);
        return price;
    }
    validateBonusNumber(bonus){
        if (isNaN(bonus)) throw new Error(`${ERROR_MESSAGE.NUMBER_TYPE}`);
        if (bonus > 46 || bonus < 0) throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE}`);
        return bonus;
    }
}
export default Validate;