import { MissionUtils } from "@woowacourse/mission-utils";

import Validate from '../controller/Validate.js';
import { MESSAGE } from '../data/message.js';

class UserInput {
    #amount;

    constructor() {
        this.validate = new Validate();
        this.#amount = 0;
    }
    
    async RequestAmount() {
        this.#amount = await MissionUtils.Console.readLineAsync(`${MESSAGE.PURCHASE_AMOUNT}\n`);

        return this.#amount;
    }

    async RequestWinningNumbers() {
        const input = await MissionUtils.Console.readLineAsync(`\n${MESSAGE.WINNING_NUMBERS}\n`);
        const winningNumbers = input.split(',');

        return winningNumbers;
    }

    async RequestBonus() {
        const bonus = await MissionUtils.Console.readLineAsync(`\n${MESSAGE.BONUS_NUMBER}\n`);

        return bonus;
    }
}

export default UserInput;