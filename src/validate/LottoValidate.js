import { ERROR_MESSAGE } from "../comm/Message.js";

class LottoValidate{

    inputPurchaseAmountValidate = (purchaseAmount) => {
        if(purchaseAmount % 1000 !== 0){
            throw new Error(`${ERROR_MESSAGE.INPUT_PURCHASE_AMOUNT_ERROR}`);
        }
        if(purchaseAmount.trim() === '' || purchaseAmount === undefined){
            throw new Error(`${ERROR_MESSAGE.INPUT_BLANK_ERROR}`);
        }
    }

    inputWinningNumbersValidate = (winningNumbers) => {
        if(winningNumbers.length !== 6){
            throw Error(`${ERROR_MESSAGE.INPUT_MORE_WINNING_NUMBERS_ERROR}`);
        }
        winningNumbers.forEach((number) => {
            if (number < 1 || number > 45) {
                throw new Error(`${ERROR_MESSAGE.INPUT_WINNING_NUMBERS_ERROR}`);
            }
        });
    }

    inputBonusNumberValidate = (bonusNumber) => {
        if(bonusNumber < 1 || bonusNumber > 45){
            throw new Error(`${ERROR_MESSAGE.INPUT_WINNING_NUMBERS_ERROR}`);
        }
        if(bonusNumber.trim() === '' || bonusNumber === undefined){
            throw Error(`${ERROR_MESSAGE.INPUT_BLANK_ERROR}`);
        }
    }

    randomNumberValidate = (lottoNumber) => {
        if(lottoNumber.length !== 6){
            throw Error(`${ERROR_MESSAGE.INPUT_MORE_WINNING_NUMBERS_ERROR}`);
        }
        lottoNumber.forEach((number) => {
            if (number < 1 || number > 45) {
                throw new Error(`${ERROR_MESSAGE.INPUT_WINNING_NUMBERS_ERROR}`);
            }
        });
    }

}

export default LottoValidate