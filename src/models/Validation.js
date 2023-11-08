import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";
import { CONSTANTS } from "../constants/GameConstant.js";

class Validation{
    static isPurchasePriceValidate(purchasePrice){
        const MIN_VALUE = 0;
        if(Number(purchasePrice) < MIN_VALUE){
            throw new Error(ERROR_MESSAGE.INVALID_PRICE);
        }

        if(isNaN(Number(purchasePrice))){
            throw new Error(ERROR_MESSAGE.INVALID_NOT_A_NUMBER);
        }

        if(Number(purchasePrice) % CONSTANTS.PURCHASE_UNIT_PRICE !== 0){
            throw new Error(ERROR_MESSAGE.INVALID_PRICE);
        }

        return true;
    }
}

export default Validation;