import { MissionUtils } from "@woowacourse/mission-utils";

import Amount from '../controller/Amount.js';
import Lotto from '../controller/Lotto.js';
import Bonus from '../controller/Bonus.js';

import { INPUT_MESSAGE } from '../data/message.js';

class UserInput {
    constructor() {}
    
    static async RequestAmount() {
        const input = await MissionUtils.Console.readLineAsync(`${INPUT_MESSAGE.PURCHASE_AMOUNT}`);
        const amount = new Amount(input);

        return amount;
    }

    static async RequestNumbers() {
        const input = await MissionUtils.Console.readLineAsync(`${INPUT_MESSAGE.WINNING_NUMBERS}`);
        const numbers = input.split(',');
        new Lotto(numbers);

        return numbers;
    }

    static async RequestBonus(numbers) {
        const bonus = await MissionUtils.Console.readLineAsync(`${INPUT_MESSAGE.BONUS_NUMBER}`);
        new Bonus(bonus, numbers);

        return bonus;
    }
}

export default UserInput;