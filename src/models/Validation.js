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

    static isUserInputLottoNumberValidate(userLottoNumber){
        if(!userLottoNumber){
            throw new Error(ERROR_MESSAGE.INVALID_NULL);
        }

        const lottoNumberArray = userLottoNumber.split(',');
        if(lottoNumberArray.length !== CONSTANTS.LOTTO_NUMBER_LENGTH){
            throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_LENGTH);
        }
        
        if(new Set(lottoNumberArray).size !== lottoNumberArray.length){
            throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_LOTTO_NUMBER);
        }

        if(lottoNumberArray.some(number => number < CONSTANTS.MIN_VALUE || number > CONSTANTS.MAX_VALUE)){
            throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
        }
        
        if(lottoNumberArray.some(number => isNaN(Number(number)))){
            throw new Error(ERROR_MESSAGE.INVALID_NOT_A_NUMBER);
        }

        return true;
    }

    static isUserInputBonusNumberValidate(userLottoNumber, userBonusNumber){
        if(!userBonusNumber){
            throw new Error(ERROR_MESSAGE.INVALID_NULL);
        }

        if(userBonusNumber < CONSTANTS.MIN_VALUE || userBonusNumber > CONSTANTS.MAX_VALUE){
            throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
        }

        if(isNaN(Number(userBonusNumber))){
            throw new Error(ERROR_MESSAGE.INVALID_NOT_A_NUMBER);
        }

        if(userLottoNumber.includes(Number(userBonusNumber))){
            throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_LOTTO_NUMBER);
        }
        return true;
    }
}

export default Validation;