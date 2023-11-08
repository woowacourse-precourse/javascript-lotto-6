import { Console, Random } from '@woowacourse/mission-utils';

class User {
    #DIVIDE_NUMBER
    #purchaseAmount
    #numberOfPurchases

    constructor() {
        this.#DIVIDE_NUMBER = 1000;
    }

    async setPurchaseAmount() {
        const money = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
        this.#validate(Number(money));
        this.#purchaseAmount = Number(money);
        this.#numberOfPurchases = Number(money) / this.#DIVIDE_NUMBER;
    }

    #validate(money) {
        if (Number.isNaN(Number(money))) {
            throw new Error('[ERROR] 구입 금액은 숫자로 입력해야합니다.');
        }

        if (money % this.#DIVIDE_NUMBER !== 0) {
            throw new Error('[ERROR] 구입 금액은 1000원 단위의 숫자로 입력해야합니다.');
        }
    }
}

export default User;