import { MissionUtils } from "@woowacourse/mission-utils";

import { INPUT_MESSAGE } from '../data/message.js';

class Purchase {
    #amount;
    #count;

    constructor(amount) {
        this.#amount = amount;
        this.#count = this.#amount / 1000;
        this.lottoArray = [];
    }

    public() {
        this.countPrint();
        for (let i = 0; i < this.#count; i++) {
            const numbers = this.pick();
            const sortedNumbers = this.sort(numbers);
            this.numbersPrint(sortedNumbers)
            this.push(sortedNumbers);
        }

        return this.lottoArray;
    }
    
    countPrint() {
        MissionUtils.Console.print(`\n${this.#count}${INPUT_MESSAGE.PURCHASE_COUNT}`);
    }

    numbersPrint(array) {
        return MissionUtils.Console.print([`${array}`]);
    }

    pick() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    sort(array) {
        return array.sort((a, b) => a - b);
    }

    push(array) {
        return this.lottoArray.push(array);
    }
}

export default Purchase;