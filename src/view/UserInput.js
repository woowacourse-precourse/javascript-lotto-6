import { MissionUtils } from "@woowacourse/mission-utils";

import Amount from '../controller/Amount.js';
import Lotto from '../controller/Lotto.js';
import Bonus from '../controller/Bonus.js';

import { MESSAGE } from '../data/message.js';

class UserInput {
    #amount;

    constructor() {
        this.#amount = 0;
    }
    
    async RequestAmount() {
        this.#amount = await MissionUtils.Console.readLineAsync(`${MESSAGE.PURCHASE_AMOUNT}\n`);
        new Amount(this.#amount);

        return this.#amount;
    }

    async RequestNumbers() {
        const input = await MissionUtils.Console.readLineAsync(`\n${MESSAGE.WINNING_NUMBERS}\n`);
        const numbers = input.split(',');
        new Lotto(numbers);

        return numbers;
    }

    async RequestBonus(numbers) {
        const bonus = await MissionUtils.Console.readLineAsync(`\n${MESSAGE.BONUS_NUMBER}\n`);
        new Bonus(bonus, numbers);

        return bonus;
    }
}

export default UserInput;