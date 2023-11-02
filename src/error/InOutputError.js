import { ERROR_MESSAGE } from "../comm/Message.js";

class InOutputError{
    inputPurchaseAmountValidate = (purchaseAmount) => {
        if(purchaseAmount % 1000 !== 0){
            throw Error(`${ERROR_MESSAGE.INPUT_PURCHASE_AMOUNT_ERROR}`);
        }
        if(purchaseAmount.trim() === '' || purchaseAmount === undefined){
            throw Error(`${ERROR_MESSAGE.INPUT_BLANK_ERROR}`);
        }
        if(isNaN(purchaseAmount)){ 
            throw Error(`${ERROR_MESSAGE.INPUT_NUMBER_ERROR}`);
        }
    }
}

export default InOutputError