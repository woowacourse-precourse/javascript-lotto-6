import { ERROR_MESSAGE } from "../comm/Message.js";

class LottoValidate{

    inputPurchaseAmountValidate = (purchaseAmount) => {
        if(purchaseAmount % 1000 !== 0 || purchaseAmount === 0){
            throw new Error(`${ERROR_MESSAGE.INPUT_PURCHASE_AMOUNT_ERROR}`);
        }
        if(purchaseAmount === '' || purchaseAmount === undefined || purchaseAmount.includes(' ')){
            throw new Error(`${ERROR_MESSAGE.INPUT_BLANK_ERROR}`);
        }
        if(isNaN(purchaseAmount)){
            throw new Error(`${ERROR_MESSAGE.INPUT_NUMBER_ERROR}`);
        }
    }

    inputWinningNumbersValidate = (winningNumbers) => {
        if(winningNumbers.length !== 6){
            throw Error(`${ERROR_MESSAGE.INPUT_MORE_WINNING_NUMBERS_ERROR}`);
        }
        if(winningNumbers.filter((value, index) => winningNumbers.indexOf(value) !== index).length > 0){
            throw Error(`${ERROR_MESSAGE.INPUT_NUMBER_DUPLICATION_ERROR}`);
        }
        winningNumbers.forEach((number) => {
            if (number < 1 || number > 45) {
                throw new Error(`${ERROR_MESSAGE.INPUT_WINNING_NUMBERS_ERROR}`);
            }
            if(isNaN(number)){
                throw new Error(`${ERROR_MESSAGE.INPUT_NUMBER_ERROR}`);
            }
        });
    }

    inputBonusNumberValidate = (bonusNumber) => {
        if(bonusNumber < 1 || bonusNumber > 45){
            throw new Error(`${ERROR_MESSAGE.INPUT_WINNING_NUMBERS_ERROR}`);
        }
        if(bonusNumber === '' || bonusNumber === undefined || bonusNumber.includes(' ')){
            throw Error(`${ERROR_MESSAGE.INPUT_BLANK_ERROR}`);
        }
        if(isNaN(bonusNumber)){
            throw new Error(`${ERROR_MESSAGE.INPUT_NUMBER_ERROR}`);
        }
    }

    randomNumberValidate = (lottoNumber) => {
        if(lottoNumber.length !== 6){
            throw Error(`${ERROR_MESSAGE.INPUT_MORE_WINNING_NUMBERS_ERROR}`);
        }
        if(lottoNumber.filter((value, index) => lottoNumber.indexOf(value) !== index).length > 0){
            throw Error(`${ERROR_MESSAGE.INPUT_NUMBER_DUPLICATION_ERROR}`);
        }
        lottoNumber.forEach((number) => {
            if(number < 1 || number > 45) {
                throw new Error(`${ERROR_MESSAGE.INPUT_WINNING_NUMBERS_ERROR}`);
            }
            if(isNaN(number)){
                throw new Error(`${ERROR_MESSAGE.INPUT_NUMBER_ERROR}`);
            }
        });
    }

}

export default LottoValidate