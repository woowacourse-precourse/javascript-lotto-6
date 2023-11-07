import { Random, Console } from "@woowacourse/mission-utils";

import { OUTPUT_MESSAGE } from '../data/message.js';

class Purchase {
    #count;

    constructor(amount) {
        this.#count = amount / 1000;
    }

    async public() {
        let lottoArray = [];
        this.printCount;
        for (let i = 0; i < this.#count; i++) {
            const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
            const lotto = this.onSortNumbers(numbers);

            lottoArray.push(lotto);
        }

        return lottoArray;
    }

    onSortNumbers(array) {
        array.sort((a, b) => a - b);
        this.printNumbers(array);

        return array;
    }

    get printCount() {
        return Console.print(`${this.#count}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
    }

    printNumbers(array) {
        const numbers = array.join(', ');
        return Console.print(`[${numbers}]`);
    }
}

export default Purchase;