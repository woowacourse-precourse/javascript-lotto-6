import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constants/message.js';

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
            throw new Error(ERROR_MESSAGE.notNumberException);
        }
        if (Number.isNaN(Number(money))) {
            throw new Error(ERROR_MESSAGE.notNumberException);
        }

        if (Number(money) % this.#DIVIDE_NUMBER !== 0) {
            throw new Error(ERROR_MESSAGE.notDivide1000Exception);
        }
    }

    setLottoNumbers() {
        for (let i = 0; i < this.#numberOfPurchases; i++) {
            const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
            this.#lottoNumbers.push(randomNumber);
        }
    }

    getLottoNumbers() {
        return this.#lottoNumbers;
    }

    getPurchaseAmount() {
        return this.#purchaseAmount;
    }

    getNumberOfPurchases() {
        return this.#numberOfPurchases;
    }
}

export default User;