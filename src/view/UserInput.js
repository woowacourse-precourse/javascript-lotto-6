import { MissionUtils } from "@woowacourse/mission-utils";

import Validate from '../controller/Validate.js';

import { MESSAGE } from '../data/message.js';

class UserInput {
    constructor() {
        this.validate = new Validate();
    }
    
    async RequestAmount() {
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

    async RequestWinningNumbers() {
        const input = await MissionUtils.Console.readLineAsync(`\n${MESSAGE.WINNING_NUMBERS}\n`);
        const winningNumbers = input.split(',');

        for(const num of winningNumbers) {
            if(!this.validate.isCheckProperNumberRange(num)) {
                return
            }
        }

        if(
            !this.validate.isCheckDuplicate(winningNumbers) ||
            !this.validate.isCheckProperNumberLength(winningNumbers)
        ) {
            return
        }

        return winningNumbers;
    }
}

export default UserInput;