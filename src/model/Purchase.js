import { Random } from "@woowacourse/mission-utils";

import UserOutput from '../view/UserOutput.js';

class Purchase {
    constructor(amount) {
        this.count = amount / 1000;
        this.lottoArray = [];
    }

    async public() {
        UserOutput.purchaseCount(`${this.count}`);
        for (let i = 0; i < this.count; i++) {
            await this.getLotto(this.lottoArray);
        }

        return this.lottoArray;
    }

    async getLotto(lottoArray) {
        const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
        const lotto = this.onSortNumbers(numbers);

        lottoArray.push(lotto);

        return lottoArray;
    }

    onSortNumbers(array) {
        array.sort((a, b) => a - b);
        UserOutput.lottoNumber(array);

        return array;
    }
}

export default Purchase;