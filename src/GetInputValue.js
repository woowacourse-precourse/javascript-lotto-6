import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/gameConstant";
import { ERROR_MESSAGE } from "./constants/errorMessage";

class GetInputValue{
    static async getPurchaseAmount(){
        const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.INPUT_PURCHASE_AMOUNT);
        const checkPurchaseAmount = purchaseAmount.split('');
        if(purchaseAmount === ''){
            throw new Error(ERROR_MESSAGE.NO_INPUT);
        }
        if(Number.isNaN(purchaseAmount)){
            throw new Error('[ERROR]');
        }
        if(parseInt(purchaseAmount)%1000!==0){
            throw new Error(ERROR_MESSAGE.WRONG_UNIT_OF_MONEY);
        }
        return purchaseAmount;
    }

    static async getWinningNumbers(){
        const winningNumbers = await Console.readLineAsync(INPUT_MESSAGE.INPUT_WINNING_NUMBERS);
        const checkWinningNumbers = winningNumbers.split(',');
        checkWinningNumbers.sort();
        if(checkWinningNumbers.length !== 6){
            throw new Error(ERROR_MESSAGE.NO_WINNING_NUMBERS);
        }
        if(new Set(checkWinningNumbers).size !== checkWinningNumbers.length){
            throw new Error(ERROR_MESSAGE.INPUT_DUPLICATION);
        }
        for(let i=0; i<6; i++){
            if(parseInt(checkWinningNumbers[i])>45 || parseInt(checkWinningNumbers[i])<1){
                throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
            }
            checkWinningNumbers[i]=parseInt(checkWinningNumbers[i]);
        }
        return checkWinningNumbers;
    }

    static async getBonusNumber(){
        const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUS_NUMBER);
        if(bonusNumber === ''){
            throw new Error(ERROR_MESSAGE.NO_INPUT);
        }
        if(Number.isNaN(parseInt(bonusNumber))){
            throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
        }
        if(parseInt(bonusNumber)>45 || parseInt(bonusNumber)<1){
            throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
        }
        return bonusNumber;
    }
}

export default GetInputValue;