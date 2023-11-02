import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from '../comm/Message.js';
import InOutputError from '../error/InOutputError.js';

class UserView{

    constructor(){
        this.inOutputError = new InOutputError();
        
    }

    async userInputPurchaseAmount(){
        const PURCHASE_AMOUT = await Console.readLineAsync(MESSAGE.MSG_PURCHASE_AMOUNT+'\n');
        this.inOutputError.inputPurchaseAmountValidate(PURCHASE_AMOUT);
        return PURCHASE_AMOUT;
    }

    async userInputWinningNumbers(){
        const WINNING_NUMBERS = await Console.readLineAsync(MESSAGE.MSG_WINNING_NUMBERS+'\n');
        this.inOutputError.inputWinningNumbersValidate(WINNING_NUMBERS.split(','));
        return WINNING_NUMBERS.split(',');
    }

    async userInputBonusNumber(){
        const BONUS_NUMBER = await Console.readLineAsync(MESSAGE.MSG_BONUS_NUMBER+'\n');
        this.inOutputError.inputBonusNumberValidate(BONUS_NUMBER);
        return BONUS_NUMBER;
    }

}

export default UserView