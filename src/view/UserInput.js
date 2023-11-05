import { MissionUtils } from "@woowacourse/mission-utils";

import Amount from '../controller/Amount.js';
import Lotto from '../controller/Lotto.js';
import Bonus from '../controller/Bonus.js';

import { MESSAGE } from '../data/message.js';

class UserInput {
    constructor() {
        this.amount = 0;
        this.numbers = null;
        this.bonus = null;
    }
    
    async RequestAmount() {
        this.amount = await MissionUtils.Console.readLineAsync(`${MESSAGE.PURCHASE_AMOUNT}\n`);
        new Amount(this.amount);

        return this.amount;
    }

    async RequestNumbers() {
        const input = await MissionUtils.Console.readLineAsync(`\n${MESSAGE.WINNING_NUMBERS}\n`);
        this.numbers = input.split(',');
        new Lotto(this.numbers);

        return this.numbers;
    }

    async RequestBonus(numbers) {
        this.bonus = await MissionUtils.Console.readLineAsync(`\n${MESSAGE.BONUS_NUMBER}\n`);
        new Bonus(this.bonus, numbers);

        return this.bonus;
    }
}

export default UserInput;