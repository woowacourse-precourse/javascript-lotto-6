import { Console } from "@woowacourse/mission-utils";

import Amount from '../model/Amount.js';
import Lotto from '../Lotto.js';
import Bonus from '../model/Bonus.js';

import { INPUT_MESSAGE } from '../data/message.js';

class UserInput {
    constructor() {}
    
    static async RequestAmount() {
        const input = await Console.readLineAsync(`${INPUT_MESSAGE.PURCHASE_AMOUNT}`);
        const amount = await Amount.changeIntoInt(input);

        return amount;
    }

    static async RequestNumbers() {
        const input = await Console.readLineAsync(`${INPUT_MESSAGE.WINNING_NUMBERS}`);

        const numbers = input.split(',');
        const lotto = new Lotto(numbers);
        
        return lotto.lottoNumber;
    }

    static async RequestBonus(numbers) {
        const input = await Console.readLineAsync(`${INPUT_MESSAGE.BONUS_NUMBER}`);
        const bonus = await Bonus.changeIntoInt(input, numbers);

        return bonus;
    }
}

export default UserInput;