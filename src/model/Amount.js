import { Console } from "@woowacourse/mission-utils";

import UserOutput from '../view/UserOutput.js';

import { ERROR_MESSAGE } from '../data/message.js';
import { INPUT_MESSAGE } from '../data/message.js';

class Amount {
    constructor() {}

    static async changeIntoInt(input) {
        let amount = await Amount.#validateRepeat(input);

        return Number(amount);
    }

    static async #validateRepeat(input) {
        let amount = input;
        let isCorrect = false;

        while(!isCorrect) {
            try {
                Amount.validateCorrectFormat(amount);
                isCorrect = true;
            } catch(error) {
                UserOutput.error(`${ERROR_MESSAGE.AMOUT_NUMBER_ERROR}`);
                amount = await Console.readLineAsync(`${INPUT_MESSAGE.PURCHASE_AMOUNT}`);
            }
        }

        return amount;
    }

    static validateCorrectFormat(amount) {
        if(isNaN(+amount) || +amount % 1000 !== 0 || +amount < 1000 || +amount > 20000) {
            throw '[ERROR]';
        }
    }
}

export default Amount;