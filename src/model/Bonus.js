import { Console } from "@woowacourse/mission-utils";

import UserOutput from '../view/UserOutput.js';

import { ERROR_MESSAGE } from '../data/message.js';
import { INPUT_MESSAGE } from '../data/message.js';

class Bonus {
    constructor() {}

    static async changeIntoInt(input, numbers) {
        const bonus = await Bonus.#validateRepeat(input, numbers);

        return Number(bonus);
    }

    static async #validateRepeat(input, numbers) {
        let bonus = input;
        let isCorrect = false;

        while(!isCorrect) {
            try {
                this.validateCorrectFormat(bonus, numbers);
                isCorrect = true;
            } catch(error) {
                UserOutput.error(`${ERROR_MESSAGE.AMOUT_NUMBER_ERROR}`);
                bonus = await Console.readLineAsync(`${INPUT_MESSAGE.BONUS_NUMBER}`);
            }
        }

        return bonus;
    }

    static validateCorrectFormat(bonus, numbers) {
        if(isNaN(bonus) || +bonus < 1 || +bonus > 45 || numbers.includes(+bonus)) {
            throw '[ERROR]';
        } 

        return bonus;
    }

}

export default Bonus;