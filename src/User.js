import { Console, Random } from '@woowacourse/mission-utils';

class User {
    #DIVIDE_NUMBER
    #purchaseAmount
    #numberOfPurchases
    #lottoNumbers

    constructor(money) {
        this.#DIVIDE_NUMBER = 1000;
        this.#validate(money);
        this.#purchaseAmount = Number(money);
        this.#numberOfPurchases = Number(money) / this.#DIVIDE_NUMBER;
        this.#lottoNumbers = [];
    }

    #validate(money) {
        if (money.trim() === '') {
            throw new Error('[ERROR] 구입 금액은 숫자로 입력해야합니다.');
        }
        if (Number.isNaN(Number(money))) {
            throw new Error('[ERROR] 구입 금액은 숫자로 입력해야합니다.');
        }

        if (Number(money) % this.#DIVIDE_NUMBER !== 0) {
            throw new Error('[ERROR] 구입 금액은 1000원 단위의 숫자로 입력해야합니다.');
        }
    }

    setLottoNumbers() {
        Console.print(`\n${this.#numberOfPurchases}개를 구매했습니다.`);
        
        for (let i = 0; i < this.#numberOfPurchases; i++) {
            const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
            this.#lottoNumbers.push(randomNumber);
            Console.print(randomNumber);
        }
    }

    getLottoNumbers() {
        return this.#lottoNumbers;
    }

    getPurchaseAmount() {
        return this.#purchaseAmount;
    }
}

export default User;