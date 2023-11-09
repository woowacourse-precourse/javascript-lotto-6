import { ERROR_MESSAGE } from "./outputMessage.js";
class Validate{
    validatePrice(price) {
        if (isNaN(price)) throw new Error(`${ERROR_MESSAGE.NUMBER_TYPE}`);
        if (price % 1000 !== 0) throw new Error(`${ERROR_MESSAGE.NUMBER_UNDIVEDE}`);
        return price;
    }
    validateBonusNumber(bonus, numbers){
        if (isNaN(bonus)) throw new Error(`${ERROR_MESSAGE.NUMBER_TYPE}`);
        if (bonus > 46 || bonus < 0) throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE}`);
        if (numbers.includes(bonus) ) throw new Error(`${ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE}`);
    }
}
export default Validate
