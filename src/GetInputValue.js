import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/gameConstant";
import { ERROR_MESSAGE } from "./constants/errorMessage";
import Lotto from "./Lotto";

class GetInputValue{
    static async getPurchaseAmount(){
        const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.INPUT_PURCHASE_AMOUNT);
        if(purchaseAmount === ''){
            throw new Error(ERROR_MESSAGE.NO_INPUT);
        }
        if(isNaN(purchaseAmount)){
            throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
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
        for(let i=0; i<checkWinningNumbers.length; i++){
            checkWinningNumbers[i] = parseInt(checkWinningNumbers[i]);
        }
        new Lotto(checkWinningNumbers);
        return checkWinningNumbers;
    }

    static async getBonusNumber(){
        const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUS_NUMBER);
        if(bonusNumber === ''){
            throw new Error(ERROR_MESSAGE.NO_INPUT);
        }
        if(isNaN(bonusNumber)){
            throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
        }
    }
}

export default GetInputValue;