import { Random } from '@woowacourse/mission-utils';

class LotteryIssuance {
    constructor(quantity) {
        this.quantity = quantity;
        this.#issue();
    }

    #issue() {
        this.issuLotto();
    }

    automaticSelector() {
        const selected = Random.pickUniqueNumbersInRange(1, 45, 6);
        return selected;
    }

    issuLotto() {
        let lotteries = []; 
        Array.from({ length: this.quantity }, (_) => {
            const lotto = this.automaticSelector();
            lotteries.push(lotto);
        });
        return lotteries;
    }
}

export default LotteryIssuance;

