import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from '../comm/Message.js';
import InOutputError from '../error/InOutputError.js';

class UserView{

    constructor(){
        this.validate = new Validate();
        
    }

    async userInputPurchaseAmount(){
        const PURCHASE_AMOUT = await Console.readLineAsync(MESSAGE.MSG_PURCHASE_AMOUNT+'\n');
        this.inOutputError.inputPurchaseAmountValidate(PURCHASE_AMOUT);
        return PURCHASE_AMOUT;
    }

    async userInputWinningNumbers(){
        const WINNING_NUMBERS = await Console.readLineAsync(MESSAGE.MSG_WINNING_NUMBERS+'\n');
        return WINNING_NUMBERS.split(',');
    }

}

export default UserView