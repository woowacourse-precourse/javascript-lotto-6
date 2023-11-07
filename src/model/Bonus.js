import { MissionUtils } from "@woowacourse/mission-utils";

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
                await this.validateCorrectFormat(bonus, numbers);
                isCorrect = true;
            } catch(error) {
                MissionUtils.Console.print(`${ERROR_MESSAGE.AMOUT_NUMBER_ERROR}`);
                bonus = await MissionUtils.Console.readLineAsync(`${INPUT_MESSAGE.BONUS_NUMBER}`);
            }
        }

        return bonus;
    }

    static async validateCorrectFormat(bonus, numbers) {
        if(isNaN(bonus) || +bonus < 1 || +bonus > 45 || numbers.includes(bonus)) {
            throw 'error';
        }
    }

}

export default Bonus;