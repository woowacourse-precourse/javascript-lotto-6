import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from '../comm/Message.js';
import Validate from '../comm/Validate.js';

class UserView{

    constructor(){
        this.validate = new Validate();
        
    }

    async userInputPurchaseAmount(){
        const PURCHASE_AMOUT = await Console.readLineAsync(MESSAGE.MSG_PURCHASE_AMOUNT+'\n');
        return PURCHASE_AMOUT;
    }

}

export default UserView