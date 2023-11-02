import { MissionUtils } from "@woowacourse/mission-utils";

import Validate from '../controller/Validate.js';

import { MESSAGE } from '../data/message.js';

class UserInput {
    constructor() {
        this.validate = new Validate();
    }
    
    async amount() {
        const amount = await MissionUtils.Console.readLineAsync(`${MESSAGE.PURCHASE_AMOUNT}\n`);
        if(
            !this.validate.isCheckNumber(amount) || 
            !this.validate.isCheckProperRange(amount) || 
            !this.validate.isCheckThousand(amount)
            ) {
            return 
        }

        return amount;
    }
}

export default UserInput;