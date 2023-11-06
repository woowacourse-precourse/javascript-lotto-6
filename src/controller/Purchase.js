import { MissionUtils } from "@woowacourse/mission-utils";

import { OUTPUT_MESSAGE } from '../data/message.js';

class Purchase {
    #count;

    constructor(amount) {
        this.#count = amount / 1000;
        this.lottoArray = [];
        this.printCount();
    }

    async printCount() {
        await MissionUtils.Console.print(`${this.#count}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
    }

    async public() {
        for (let i = 0; i < this.#count; i++) {
            const numbers = await MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            numbers.sort((a, b) => a - b);
            
            await MissionUtils.Console.print(numbers);
            this.lottoArray.push(numbers);
        }

        return this.lottoArray;
    }
}

export default Purchase;